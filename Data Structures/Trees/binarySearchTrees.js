/*********************************************************************
 *                           Sprint IV                               *
 *                                                                   *
 *                        Traversals Pt. 1                           *
 *                                                                   *
 *  Instructions: One of the most fundamental components of working  *
 *                with trees and graphs is traversals.  We will      *
 *                focus primarily on this piece to build your        *
 *                foundation of these data structures.               *
 *                                                                   *
 *********************************************************************/

/*** First we need a binary search tree.  Use an existing binary search tree class that you have built. ***/

var node = function(value) {
  this.value = value;
  this.leftChild = null;
  this.rightChild = null;
}

var binarySearchTree = function() {
  this.root = null;
  this.size = 0;
}

binarySearchTree.prototype.insert = function(insertVal) {
  if (this.root === null) {
    this.root = new node(insertVal);
    this.size++;
    return;
  } else {
    var traverse = function(currentNode) {
      if (insertVal > currentNode.value) {
        if (currentNode.rightChild === null) {
          currentNode.rightChild = new node(insertVal);
          return;
        } else {
          traverse(currentNode.rightChild);
        }
      } else {
        if (currentNode.leftChild === null) {
          currentNode.leftChild = new node(insertVal);
          return;
        } else {
          traverse(currentNode.leftChild);
        }
      }
    }
    traverse(this.root);
    this.size++;
  }
}

binarySearchTree.prototype.search = function(searchVal) {
  var check = false;
  var traverse = function(currentNode) {
    if (currentNode === null) {
      return;
    } else if (currentNode.value === searchVal) {
      check = true;
      return;
    }

    traverse(currentNode.rightChild);
    traverse(currentNode.leftChild);
  }
  traverse(this.root);
  return check;
}

binarySearchTree.prototype.delete = function(removeVal) {
   var temp = [];

   var traverse = function(currentNode) {
    if (currentNode === null) {
      return;
    } else if (currentNode.value !== removeVal) {
      temp.push(currentNode.value);
    }
    traverse(currentNode.rightChild);
    traverse(currentNode.leftChild);
   }
   traverse(this.root);

   // error checking: if size of temp and tree is the same
   // then it means there is no such value to remove
   if (temp.lenght === this.size) {
    console.log("there is no such value to delete");
    return;
   }

   this.root = null;
   this.size = 0;
   var toInsert;

   for (var i = 0; i < temp.length; i++) {
    toInsert = temp[i];
    this.insert(toInsert);
   }
   return temp;
}
/**
 *  1. Write a function that takes in an array of integers and performs the insert method on each
 *     item of the array in order.
 *
 *  Input: Array
 *  Output: Binary Search Tree
 *
 *  Example: [4, 2, 5, 1, 3, 7, 6, 8]
 *  Output this binary search tree:
 *
 *              4
 *            /   \
 *          2       5
 *        /   \       \
 *      1       3       7
 *                    /   \
 *                  6      8
 **/


binarySearchTree.prototype.insertMultiple = function(array){
  for (var i = 0; i < array.length; i++){
    this.insert(array[i]);
  }
}

// var test = new binarySearchTree();
// test.insertMultiple([4, 2, 5, 1, 3, 7, 6, 8]);

// console.log(test.root);


/**
 *  2. Given the example output binary search tree from Problem 1, what would the order of values
 *     printed be if we used:
 *
 *     a. BREADTH FIRST traversal
 *     [4, 2, 5, 1, 3, 7, 6, 8]
 *
 *      b. PRE-ORDER DEPTH first traversal
 *     [4, 2, 1, 3, 5, 7, 6, 8]
 *
 *     c. IN-ORDER DEPTH first traversal
 *     [1, 2, 3, 4, 5, 6, 7, 8]
 *
 *     d. POST-ORDER DEPTH first traversal
 *     [1, 3, 2, 6, 8, 7, 5, 4]
 **/

var test = new binarySearchTree();
test.insertMultiple([4, 2, 5, 1, 3, 7, 6, 8]);

/**
 *  3a. Using a queue, and while loop write a function that takes in a binary search tree and
 *      outputs an array of values ordered by BREADTH FIRST traversal.
 *
 *  Input: Binary Search Tree
 *  Output: Array
 *
 *  NOTE: You may use an array or linked list for your queue.
 *
 *  NOTE: Confirm with your answer from problem 2a.
 **/

binarySearchTree.prototype.breadthFirst = function(){

  var queue = [];
  var result = [];
  var cNode;
  queue.push(this.root);

  while (queue.length > 0) {

    cNode = queue.shift();
    if (cNode.leftChild !== null) {
      queue.push(cNode.leftChild);
    }

    if (cNode.rightChild !== null) {
      queue.push(cNode.rightChild);
    }

    result.push(cNode.value);
  }

  return result;
}

// Test Data
console.log(test.breadthFirst());

/**
 *  3b. Using recursion, write a function that takes in a binary search tree and
 *      outputs an array of values ordered by PRE-ORDER DEPTH FIRST traversal.
 *
 *      Input: Binary Search Tree
 *      Output: Array
 *
 *      NOTE: Confirm with your answer from problem 2b.
 **/
binarySearchTree.prototype.preOrder = function(){

  var result = [];
  var traverse = function(cNode) {

    if (cNode === null) {
     return;
    }

    result.push(cNode.value);
    traverse(cNode.leftChild);
    traverse(cNode.rightChild);

  }
  traverse(this.root);
  return result;
}

// Test Data
console.log(test.preOrder());

/**
 *  3c. Using recursion, write a function that takes in a binary search tree and
 *      outputs an array of values ordered by IN-ORDER DEPTH FIRST traversal.
 *
 *      Input: Binary Search Tree
 *      Output: Array
 *
 *      NOTE: Confirm with your answer from problem 2c.
 **/

binarySearchTree.prototype.inOrder = function() {
  var result = [];
  var traverse = function(cNode){

    // Best Case
    if(cNode === null) {
     return;
    }

    // Recursion Case
    traverse(cNode.leftChild);
    result.push(cNode.value);
    traverse(cNode.rightChild);
  }
  traverse(this.root);
  return result;
}

// Test Data
console.log(test.inOrder());
/**
 *  3d. Using recursion, write a function that takes in a binary search tree and
 *      outputs an array of values ordered by POST-ORDER DEPTH FIRST traversal.
 *
 *      Input: Binary Search Tree
 *      Output: Array
 *
 *      NOTE: Confirm with your answer from problem 2d.
 **/

binarySearchTree.prototype.postOrder = function(){
  var result = [];

  var traverse = function(cNode){
    // best case
    if (cNode === null) {
     return;
    }

    //recursion case
    traverse(cNode.leftChild);
    traverse(cNode.rightChild);
    result.push(cNode.value);

  }
  traverse(this.root);
  return result;
}

// Test Data
console.log(test.postOrder());
