/*********************************************************************
 *                       Target Practice III                         *
 *                                                                   *
 *                        Data Structures I                          *
 *                                                                   *
 *  Instructions: Using the LinkedList class from your homework,     *
 *                add the following methods to your LinkedList.      *
 *                                                                   *
 *********************************************************************/

 // instantiation for listNode
 var listNode = function(value){
   this.value = value;
   this.next = null;
 }

 // instantiation for linkedList
 var linkedList = function(){
   this.head = null;
   this.tail = null;
   this.listLength = 0;
 }

 // append method for linkedList
 linkedList.prototype.append = function(value){
   if (this.head === null){
     // initializing value being inserted into an empty linkedList
     this.head = new listNode(value);
     this.tail = this.head;
     this.listLength++;
   } else {
     // adding a value to a linkedList of one or more items
     this.tail.next = new listNode(value);
     this.tail = this.tail.next;
     this.listLength++;
   }
 }

 // insert method for linkedList
 linkedList.prototype.insert = function(insertValue, searchValue){
   var work = this.head;
   while (work !== null){
     if (work.value === searchValue){
       var reference = work.next;
       work.next = new listNode(insertValue);
       work.next.next = reference;

       if (reference === null){
         // for when the searchValue is the tail value, we
         // need to reassign the linkedList tail
         this.tail = work.next;
       }
       this.listLength++;
       return;
     }
     work = work.next;
   }
   console.log("second argument " + "'" + searchValue + "'" + " was not found in linkedList");
 }

 linkedList.prototype.delete = function(location){

   if (location === 0 && this.head !== null && this.head === this.tail){
     // case when linkedList consists of a single element
     this.head = null;
     this.tail = null;
     this.listLength--;
     return;
   } else if (location === 0 && this.head !== null && this.head.next !== null){
     // case when linkedList has more than one element, but
     // zeroth element is being removed
     this.head = this.head.next;
     this.listLength--;
     return;
   }

   var work = this.head;
   var counter = 0;
   while (work !== null){
     if (counter === (location-1) && work.next !== null && work.next === this.tail){
       // case when removing the last element of linkedList
       work.next = work.next.next;
       this.tail = work;
       this.listLength--;
       return;
     } else if (counter === (location-1) && work.next !== null){
       // case when removing values that are not the head or tail
       work.next = work.next.next;
       this.listLength--;
       return;
     }
     counter++;
     work = work.next
   }
   console.log('Error: Index ' + "'" + location + "'" + ' falls out of the range of the length of the linkedList');
 }

 linkedList.prototype.contains = function(value){
   var work = this.head;
   while (work !== null){
     if (work.value === value){
       return true;
     }
     work = work.next;
   }
   return false;
 }

 ////////////////////////////////////
 // Creation of test linkedList!!! //
 ////////////////////////////////////

 var test = new linkedList();
 test.append(1);
 test.append(5);
 test.append(7);
 test.append(10);
 test.append(12);
 test.append(15);

// console.log(JSON.stringify(test.head));

/**
 * 1a. Create a method on the singly LinkedList class which prints the value of each node from the head to the tail
 *
 * Input: N/A
 * Output: Print all elements from head to tail
 *
 * Example: (1) --> (5) --> (7) --> (10) .printForward()
 *          Head                    Tail
 *          1
 *          5
 *          7
 *          10
 *
 * What is the time and auxiliary space complexity of your solution?
 **/

linkedList.prototype.printForward = function(){

  var work = this.head;
  while (work !== null) {

    console.log(work.value);
    work = work.next;
  }
}

// test.printForward();

/**
 * 1b. Create a method on the singly LinkedList class which prints the value of each node from tail to head using recursion
 *
 * Input: N/A
 * Output: Print all elements from tail to head
 *
 * Example: (1) --> (5) --> (7) --> (10) .printBackward()
 *          Head                    Tail
 *          10
 *          7
 *          5
 *          1
 *
 * What is the time and auxiliary space complexity of your solution?
 **/
linkedList.prototype.printBackward = function(cNode){

  var traverse = function(cNode){
    if (cNode === null) {
     return;
    }
    traverse(cNode.next);
    console.log(cNode.value);
  }
  traverse(this.head);
}

// test.printBackward(this.head);


/**
 * 1c. Create a method on the singly LinkedList class that reverses the order of the nodes in the linked list
 *
 * Input: N/A
 * Output: Reverse the order of the nodes
 *
 * Example: (1) --> (5) --> (7) --> (10) .reverse()
 *          Head                    Tail
 *
 *          (10) --> (7) --> (5) --> (1)
 *          Head                    Tail
 *
 * What is the time and auxiliary space complexity of your solution?
 **/

linkedList.prototype.reverse = function(){
  var reverse = [];

  // recursion call to add all elements backward
  // to a temp array
  var traverse = function(cNode) {
    // best case
    if (cNode === null) {
     return;
    }
    // recursion case
    traverse(cNode.next);
    reverse.push(cNode.value);

  }
  traverse(this.head);

  this.head = null;
  this.listLength = 0;
  var toInsert;

  // loop to create a linked list
  for (var i = 0; i < reverse.length; i++) {
    toInsert = reverse[i];
    this.append(toInsert);
  }
  return this;
}

// console.log(test.reverse());

/**
 * 1d. Create a method on the singly LinkedList class which swaps the first occurance of the locations of two nodes in the linked list.
 *
 * Input: Two values (a & b)
 * Output: Swapped nodes containing values a & b
 *
 * Example: (1) --> (5) --> (7) --> (10) .swap(5, 10)
 *          Head                    Tail
 *
 *          (1) --> (10) --> (7) --> (5)
 *          Head                    Tail
 *
 * What is the time and auxiliary space complexity of your solution?
 **/

linkedList.prototype.swap = function(val1, val2){
  // if items are in our linked list
  if (this.contains(val1) && this.contains(val2)) {
    var work = this.head;
    var temp;

    while (work !== null) {
     if (work.value === val1) {
       temp = work.value;
       work.value = val2;
     } else if (work.value === val2) {
      temp = work.value;
       work.value = val1;
     }
      work = work.next;
    }
  } else {
   console.log("Atleast one of the nodes are not in the list");
  }
  return this;
}

// test data
//  var test = new linkedList();
//  test.append(1);
//  test.append(5);
//  test.append(7);
//  test.append(10);

// console.log(test.swap(1, 10));
/************************
 *     Extra Credit     *
 ************************/

/**
 * Extra Credit 1:
 *
 * Write a function that, given an input of a listNode, returns true
 * if the listNode is in a circular linkedList, and false if the
 * listNode is in a linkedList that terminates.
 **/

// instantiation for listNode
var listNode = function(value){
  this.value = value;
  this.next = null;
}


// setup of node in a circular linkedList
var nodeA = new listNode(Math.floor(Math.random() * 10000));
var work = nodeA;
var circleSize = Math.floor(Math.random() * (10000 - 100) + 100)

for (var i = 0; i < circleSize; i++){
  work.next = new listNode(Math.floor(Math.random() * 10000));
  work = work.next;
  if (i === (circleSize - 1)){
    // connects the last node to the original nodeA
    work.next = nodeA;
  }
}
// circular linkedList nodeA is ready for use


// setup of a node in a linkedList that terminates
var nodeB = new listNode(Math.floor(Math.random() * 10000));
var work = nodeB;
var listSize = Math.floor(Math.random() * (10000 - 100) + 100)

for (var i = 0; i < listSize; i++){
  work.next = new listNode(Math.floor(Math.random() * 10000));
  work = work.next;
}
// terminating linkedList nodeB is ready for use


// For your input, use nodeA as a node in a circular linkedList
// and nodeB as a node in a terminating linkedList

var isCircular = function(node){
  var turtle, rabbit;
  turtle = rabbit = node;

  var bothTravel = false;
  while (rabbit !== null) {

    if (bothTravel) {
      rabbit = rabbit.next;
      turtle = turtle.next
      bothTravel = false;

    } else {
      rabbit = rabbit.next;
      bothTravel = true;
    }

    if (turtle === rabbit) {
     return true;
    }

  }
  return false;
};

console.log(isCircular(nodeA));
console.log(isCircular(nodeB));
