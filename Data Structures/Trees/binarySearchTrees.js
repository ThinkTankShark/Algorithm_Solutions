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


var createBinaryTree = function(array) {
  var toInsert;
  var bst = new binarySearchTree();

  for (var i = 0; i < array.length; i++) {
    toInsert = array[i];
    bst.insert(toInsert);
  }
  return bst;
}

var array = [4, 2, 5, 1, 3, 7, 6, 8];
console.log(createBinaryTree(array));

/**
 *  2. Given the example output binary search tree from Problem 1, what would the order of values
 *     printed be if we used:
 *
 *     a. BREADTH FIRST traversal
 *
 *     b. PRE-ORDER DEPTH first traversal
 *
 *     c. IN-ORDER DEPTH first traversal
 *
 *     d. POST-ORDER DEPTH first traversal
 **/


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


/**
 *  3b. Using recursion, write a function that takes in a binary search tree and
 *      outputs an array of values ordered by PRE-ORDER DEPTH FIRST traversal.
 *
 *      Input: Binary Search Tree
 *      Output: Array
 *
 *      NOTE: Confirm with your answer from problem 2b.
 **/


/**
 *  3c. Using recursion, write a function that takes in a binary search tree and
 *      outputs an array of values ordered by IN-ORDER DEPTH FIRST traversal.
 *
 *      Input: Binary Search Tree
 *      Output: Array
 *
 *      NOTE: Confirm with your answer from problem 2c.
 **/


/**
 *  3d. Using recursion, write a function that takes in a binary search tree and
 *      outputs an array of values ordered by POST-ORDER DEPTH FIRST traversal.
 *
 *      Input: Binary Search Tree
 *      Output: Array
 *
 *      NOTE: Confirm with your answer from problem 2d.
 **/

