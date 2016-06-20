/**********************************************************************
 *                           Target Practice V                        *
 *                                                                    *
 *                         Sorting II - Revisted                      *
 *                                                                    *
 *  Instructions: To further reinforce understanding of how Merge and *
 *                Quicksort are implemented, we will be building      *
 *                those functions again.                              *
 *                                                                    *
 *                Additionally, we will be using a min heap to build  *
 *                heapsort.  Please use your min heap from class.     *
 *                                                                    *
 *                Please do not refer to your homework solutions for  *
 *                Merge Sort or Quicksort.                            *
 *                                                                    *
 **********************************************************************/

/**
 *  1. Please indicate whether the following sorting algorithms are stable or unstable
 *
 *  Merge Sort: Stable Sort
 *
 *  Quicksort: Not Stable Sort
 *
 *  Heapsort: Not Stable Sort
 **/


/**
 *  2a. Implement Quicksort in your chosen language, such that given an unsorted array
 *      of numbers you will return that array sorted.

 *  Input:  An unsorted array
 *  Output: A sorted array
 *
 *  Example: quicksort([4,15,16,50,8,23,42,108])
 *           // [4,8,15,16,23,42,50,108]
 **/

var quickSort = function(work) {

  // if array length is less than 1
  if (work.length <= 1) {
    return work;
  }

  // Create the pivot
  var pivotIndex = Math.floor(work.length / 2);
  var pivot = work[pivotIndex];

  // create 2 arrays to store before and after elements of pivot
  var before = [];
  var after = [];

  // fill the above arrays to fill with the numbers
  for (var i = 0; i < work.length; i++) {
    // make sure is i not on the pivot index
    if (i !== pivotIndex) {
      if (work[i] <= pivot) {
        before.push(work[i]);
      } else {
        after.push(work[i]);
      }
    }
  }
  // recursion call
  return quickSort(before).concat(pivot).concat(quickSort(after));
}

// var array = [2,1,5,21,3,4,10,6,7,1];
// console.log(quickSort(array));

/**
 *  2b. What is the time complexity and auxiliary space complexity of your quicksort?
 *
 *      Time Complexity: O(n^2)
 *      Auxiliary Space Complexity: O(n)
 **/


/**
 *  3a. Implement Merge Sort in your chosen language, such that given an unsorted array
 *      of numbers you will return that array sorted.
 *
 *  Input:  An unsorted array
 *  Output: A sorted array
 *
 *  Example: mergeSort([4,15,16,50,8,23,42,108])
 *           // [4,8,15,16,23,42,50,108]
 **/

// Joining 2 arrays
var joinArrays = function(arr1, arr2){
  // create pointer 1 and 2 and equal to 0
  var p1, p2;
  p1 = p2 = 0;
  // create a result array to put the merged array into
  var result = [];

  // check it any of the arrays are undefined
  // then push the other array into the result
  if (arr1 === undefined) {
    return arr2;
  } else if (arr2 === undefined) {
    return arr1;
  }
  // iterate through both arrays
  // before end of array check to see which element is bigger or smaller
  // then add it to result accordingly and increase their pointer
  while (arr1[p1] !== undefined && arr2[p2] !== undefined) {
    if (arr1[p1] <= arr2[p2]) {
      result.push(arr1[p1]);
      p1++;
    } else {
      result.push(arr2[p2]);
      p2++;
    }
  }
  // if one of the arrays pointers become undefined
  // then push the other array result at the end of result array
  if (p1 === arr1.length) {
    result = result.concat(arr2.slice(p2));
  } else if (p2 === arr2.length) {
    result = result.concat(arr1.slice(p2));
  }
  // return final result
  return result
}

// var arr1 = [1,3,5,7,9,11,13]
// var arr2 = [2,4,6,8];

// console.log(joinArrays(arr1, arr2));
// merge sort function
var mergeSort = function(array){
  // if the array length is less than 1
  // then return itself since that's sorted
  if (array.length <= 1) {
    return array;
  }
  // create middle index
  // create left and right arrays
  var midIndex = Math.floor(array.length / 2);
  // create the left and right arrays
  var left = array.slice(0, midIndex);
  var right = array.slice(midIndex, array.length);

  // recursion case to return the result while merging and sorting (divide - conquer)
  return joinArrays(mergeSort(left), mergeSort(right));
}

// var array = [2,1,5,21,3,4,10,6,7,-1,-1];
// console.log(quickSort(array));
/**
 *  3b. What is the time complexity and auxiliary space complexity of your mergeSort?
 *
 *      Time Complexity: O(n log(n))
 *      Auxiliary Space Complexity: O(n)
 **/


/**
 *  4a. Implement heapsort in your chosen language, such that given an unsorted array
 *      of numbers you will return that array sorted.
 *
 *  Input:  An unsorted array
 *  Output: A sorted array
 *
 *  Example: heapsort([4,15,16,50,8,23,42,108])
 *           // [4,8,15,16,23,42,50,108]
 **/


/**
 *  4b. What is the time complexity and auxiliary space complexity of your heapsort?
 *
 *      Time Complexity:
 *      Auxiliary Space Complexity:
 **/


// if you do not have your own heap, a min-heap has been provided for your use
function MinHeap(){
  this.storage = [];
}

MinHeap.prototype.insert = function(value){
  this.storage.push(value);
  this.bubbleUp();
}

MinHeap.prototype.remove = function(){
  this.swap(0, this.size() - 1);
  var result = this.storage.pop();
  this.bubbleDown();
  return result;
}

MinHeap.prototype.bubbleUp = function(){
  var current = this.size() - 1;
  var parent = this.parentIndex(current);
  while(current > 0 && this.storage[parent] > this.storage[current]){
    this.swap(parent, current);
    current = parent;
    parent = this.parentIndex(current);
  }
}

MinHeap.prototype.bubbleDown = function(){
  var current = 0;
  var child = this.minChild(current);
  while(child !== undefined && this.storage[current] > this.storage[child]){
    this.swap(current, child);
    current = child;
    child = this.minChild(current);
  }
}

MinHeap.prototype.parentIndex = function(childIndex){
  return Math.floor((childIndex - 1)/2);
}

MinHeap.prototype.childIndex = function(parentIndex){
  return [2 * parentIndex + 1, 2 * parentIndex + 2];
}

MinHeap.prototype.minChild = function(parentIndex){
  var children = this.childIndex(parentIndex);
  //if left child is undefined, then both left and right child will be undefined
  //default to just returning left index
  //if left child is defined however right child is undefined or out of bounds
  //return left child index
  if(this.storage[children[0]] === undefined || this.storage[children[1]] === undefined){ return children[0];}

  if(this.storage[children[0]] < this.storage[children[1]]){
    return children[0];
  } else {
    return children[1];
  }
}

MinHeap.prototype.swap = function(i, j){
  var temp = this.storage[i];
  this.storage[i] = this.storage[j];
  this.storage[j] = temp;
}

MinHeap.prototype.size = function(){
  return this.storage.length;
}

MinHeap.prototype.peak = function(){
  return storage[0];
}

var heap = new MinHeap();
