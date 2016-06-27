function TreeNode(value){
  this.value = value;
  this.left = null;
  this.right = null;

}

function BinaryTree() {
  this.root = null;
  this.size = 0;
}


BinaryTree.prototype.insert = function(insertVal){
  // if the tree is emty
  if (this.size === 0){
    this.root = new TreeNode(insertVal);
    this.size++;
    return;
  } else {

    // if the length is more than 0
    // if the value adding is smaller than current
    var traverse = function(currNode){

      // right side
      if (insertVal > currNode.value){
        if (currNode.right === null){
          currNode.right = new TreeNode(insertVal);
          return;
        } else {
          traverse(currNode.right);
        }

      // left side
      } else {
        if (currNode.left === null){
          currNode.left = new TreeNode(insertVal);
          return;
        } else {
          traverse(currNode.left);
        }
      }
    }
    traverse(this.root);
    this.size++;
  }
}


BinaryTree.prototype.isBST = function(){
  var check = true;
  // length is 0
  if (this.size === 0){
    check = false;
    return check;

  // length is 1
  } else if (this.size === 1){
    return check;

  // length bigger than 1
  } else {
    var traverse = function(currNode){
      // best case
      if (currNode.left === null || currNode.right === null){
        return;
      }

      // recursion case
      if (currNode.left.value > currNode.value || currNode.right.value < currNode.value){
        check = false;
        return;
      }
      traverse(currNode.left);
      traverse(currNode.right);

    }
    traverse(this.root);
  }

  return check;
}


// Test Data [25, 15, 50, 10, 22, 35, 70]

var bt = new BinaryTree();
bt.insert(25);
bt.insert(15);
bt.insert(26);
bt.insert(10);
bt.insert(22);
bt.insert(35);
bt.insert(5);

console.log(bt);
console.log(bt.isBST());
