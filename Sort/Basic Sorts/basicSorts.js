 /**********************************************************************
  *                                                                    *
  *  Problem: Insertion Sort                                           *
  *                                                                    *
  *  Prompt: Given an unsorted array of numbers,                       *
  *          return a sorted array using insertion sort.               *
  *                                                                    *
  *  Input:  An unsorted array                                         *
  *  Output: A sorted array                                            *
  *                                                                    *
  *  Example: input = [3,9,1,4,7] , output = [1,3,4,7,9]               *
  *                                                                    *
  *  What are the time and auxiliary space complexity?                *
  *            T: O(n^2) S: O(1)                                                       *
  **********************************************************************/
var insertionSort = function(input){
    for (var j = 1; j < input.length; j++) {
      var temp = input[j];
      var i = j - 1;
      while (i >= 0 && input[i] > temp) {
        input[i + 1] = input[i];
        i--;
      }
      input[i + 1] = temp;
    }
  return input;
}
// console.log(insertionSort([8,3,2,10,0]));
  /**********************************************************
   *                                                        *
   *  Problem: Selection Sort                               *
   *                                                        *
   *  Prompt: Given an unsorted array of numbers,           *
   *          return a sorted array using insertion sort.   *
   *                                                        *
   *  Input: An unsorted array                              *
   *  Output: A sorted array                                *
   *                                                        *
   *  Example: input = [8,3,2,10] output = [2,3,8,10]       *
   *                                                        *
   *  What are the time and auxiliary space complexity?     *
   *  What is the best case time complexity?                *
   *  T: (O^2) at all times, S: O(1)                        *
   **********************************************************/
var swap = function(array, firstIndex, secondIndex) {
  var temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
};

var indexOfMinimum = function(array, startIndex) {
  var minIndex = startIndex;
  var minValue = array[startIndex];

  for (var i = minIndex + 1; i < array.length; i++ ) {
    if (array[i] < minValue) {
      minIndex = i;
      minValue = array[i];
    }
  }
  return minIndex;
};

var selectionSort = function(input){
  var min;
  for (var i = 0; i < input.length -1; i++) {
    min = indexOfMinimum(input, i);
    swap(input, i, min);
  }
};
// console.log(selectionSort([8,3,2,10]));
// var array = [8,3,9,-1]
// swap(array,1,3);
// console.log(indexOfMinimum(array, 0));
// selectionSort(array);
// console.log(array);
   /**********************************************************
    *                                                        *
    *  Problem: Bubble Sort                                  *
    *                                                        *
    *  Prompt: Given an unsorted array of numbers,           *
    *          return a sorted array using bubble sort.      *
    *                                                        *
    *  Input: An unsorted array                              *
    *  Output: A sorted array                                *
    *                                                        *
    *  Example: input = [8,3,2,10] output = [2,3,8,10]       *
    *                                                        *
    *  What are the time and auxiliary space complexity?     *
    *  T: O(n^2) S:O(n)                                      *
    **********************************************************/

var bubbleSort = function(input){
  var swap = true;
  while (swap === true) {
    swap = false;
    for (var i = 0; i < input.length; i++) {
      var temp = 0;
      if (input[i] > input[i + 1]) {
        temp = input[i];
        input[i] = input[i+1];
        input[i+1] = temp;
        swap = true;
      }
    }
  }
  return input;
}
// console.log(bubbleSort([1,3,5,8]));

////////////////////////////////////////////////////////////
///////////////  DO NOT TOUCH TEST BELOW!!!  ///////////////
////////////////////////////////////////////////////////////

var expect = require('chai').expect;

describe('INSERTION SORT ', function(){

  describe("RUN ON [8, 3, 2, 10]: ", function(){
    it("should return [2, 3, 8, 10]", function(){
      var test = insertionSort([3,9,1,4,7]);
      var answer = [1,3,4,7,9];

      expect(test).to.eql(answer);
    });
  });

  describe("RUN ON EMPTY INPUT []: ", function(){
    it("should return []", function(){
      var test = insertionSort([]);
      var answer = [];

      expect(test).to.eql(answer);
    });
  });

  describe("RUN ON LARGE INPUT: ", function(){
    it("should complete", function(){
      var testInput = [];
      var i = 1000000;
      while (i--){
        testInput.push(Math.floor(Math.random() * 1000000))
      }
      var test = insertionSort(testInput);

      expect(testInput.sort(function(a, b){return a-b})).to.eql(test);
    })
  })
});


describe('SELECTION SORT ', function(){

  describe("RUN ON [8, 3, 2, 10]: ", function(){
    it("should return [2, 3, 8, 10]", function(){
      var test = selectionSort([8,3,2,10]);
      var answer = [2,3,8,10];

      expect(test).to.eql(answer);
    });
  });

  describe("RUN ON EMPTY INPUT []: ", function(){
    it("should return []", function(){
      var test = selectionSort([]);
      var answer = [];

      expect(test).to.eql(answer);
    });
  });

  describe("RUN ON LARGE INPUT: ", function(){
    it("should complete", function(){
      var testInput = [];
      var i = 1000000;
      while (i--){
        testInput.push(Math.floor(Math.random() * 1000000))
      }
      var test = selectionSort(testInput);

      expect(testInput.sort(function(a, b){return a-b})).to.eql(test);
    })
  })

});

describe('BUBBLE SORT ', function(){

  describe("RUN ON [8, 3, 2, 10]: ", function(){
    it("should return [2, 3, 8, 10]", function(){
      var test = bubbleSort([8,3,2,10]);
      var answer = [2,3,8,10];

      expect(test).to.eql(answer);
    });
  });

  describe("RUN ON EMPTY INPUT []: ", function(){
    it("should return []", function(){
      var test = bubbleSort([]);
      var answer = [];

      expect(test).to.eql(answer);
    });
  });

  describe("RUN ON LARGE INPUT: ", function(){
    it("should complete", function(){
      var testInput = [];
      var i = 1000000;
      while (i--){
        testInput.push(Math.floor(Math.random() * 1000000))
      }
      var test = bubbleSort(testInput);

      expect(testInput.sort(function(a, b){return a-b})).to.eql(test);
    })
  })

});
