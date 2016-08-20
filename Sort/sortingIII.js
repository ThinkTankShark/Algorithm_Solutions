 /**********************************************************************
  *                           Homework XI                              *
  **********************************************************************/

 /**********************************************************************
  *  Problem 1: Bucket Sort                                            *
  *                                                                    *
  *  Prompt: Given an unsorted array of numbers which are in the range *
  *          of 0.0 to 1.0, and are uniformly distributed across the   *
  *          range, sort the numbers efficiently.                      *
  *                                                                    *
  *  Input:  Unsorted array of numbers in range of 0.0 to 1.0          *
  *  Output: A sorted array                                            *
  *                                                                    *
  *  Example: input = [0.897, 0.565, 0.656, 0.1234, 0.665, 0.3434]     *
  *           output = [0.1234, 0.3434, 0.565, 0.656, 0.665, 0.897]    *
  *                                                                    *
  *  What are the time and auxilliary space complexity?                *
  *                                                                    *
  **********************************************************************/

 /**********************************************************************
  *  Problem 2: Kth Smallest Element in a Range                        *
  *                                                                    *
  *  Prompt: Given an unsorted array of whole integers in the range    *
  *          1000 to 9000, find the Kth smallest element in linear time*
  *          The array can have duplicates.                            *
  *                                                                    *
  *  Input:  Unsorted array of whole integers in range of 1000 to 9000 *
  *          Kth smallest element you want to find                     *
  *                                                                    *
  *  Output: Kth smalest element in the range                          *
  *                                                                    *
  *  Example: array = [1984, 1337, 9000, 8304, 5150, 9000, 8304], k=5  *
  *           output = 8304                                            *
  *                                                                    *
  *  What are the time and auxilliary space complexity?                *
  *                                                                    *
  **********************************************************************/


var countSort = function(input, max){
  var tempArray = Array(max + 1).fill(0);
  // var countArray = [];
  var sortedArray = [];
  // create an array where the numbers
  // shows the number of occurrence in the array
  for (var i = 0; i < input.length; i++){
    tempArray[input[i]] += 1;
  }

  // count and add them up to the countArray
  for(var j = 1; j < tempArray.length; j++){
    tempArray[j] += tempArray[j - 1];
  }

  // now sort the array using the bucket and counters
  for (var x = tempArray.length + 1; x >= 0; x--){
    var indexToInsert = tempArray[input[x]] - 1;
    sortedArray[indexToInsert] = input[x];
    tempArray[input[x]] -= 1;
  }

  return sortedArray;
}
// var array = [5,1,4,3,3,2,4,1,6,7];
// console.log(countSort(array, 7));

var insertionSort = function(input){
  for (var j = 1; j < input.length; j++){
    var temp = input[j];
    var i = j - 1;

    while(i >= 0 && input[i] > temp){
      input[i + 1] = input[i]
      i--;
    }
    input[i + 1] = temp;
  }
  return input;
}
// console.log(insertionSort([6,2,9,1,0,3]));

var bucketSort = function(input){

  var placeIntoBuckets = function(pullFrom, LowerRange, UpperRange){
    var buckets = Array(10).fill([]);
    var division = (UpperRange - LowerRange) / 10;

    pullFrom.forEach(function(number){
      buckets[Math.floor(number / division)].push(number);
    });

    buckets.forEach(function(bucket){
      input = insertionSort(input);
    });
  }
  placeIntoBuckets(input, 0, 10000);
  return input;
}
// console.log(bucketSort([340, 565, 656, 1234, 665, 3434]));

var kthSmallest = function(input, k){
  // use bucket sort to sort the array first
  var sortedArray = bucketSort(input);

  // then loop take the index of k - 1 from the array
  if (k >= input.length) {
    console.log('the index is out of the scope');
  } else {
    var result = sortedArray[k - 1];
    return result;
  }
}

console.log(kthSmallest([1,6,2,9,0,10,23], 20));

////////////////////////////////////////////////////////////
///////////////  DO NOT TOUCH TEST BELOW!!!  ///////////////
////////////////////////////////////////////////////////////

var expect = require('chai').expect;

describe('bucketSort', function(){
  describe('run on example input:', function(){
    it('should return the example output', function(){
      var test = bucketSort([0.897, 0.565, 0.656, 0.1234, 0.665, 0.3434]);
      var answer = [0.1234, 0.3434, 0.565, 0.656, 0.665, 0.897];

      expect(test).to.eql(answer);
    });
  });

  describe('run on empty array', function(){
    it('should return an empty array', function(){
      var test = bucketSort([]);
      var answer = [];

      expect(test).to.eql(answer);
    })
  })

  describe('run on large array', function(){
    it('should return a sorted array', function(){
      var testInput = [];
      var i = 10000;
      while (i--){
        testInput.push(Math.floor(Math.random() * 1000))
      }

      var test = bucketSort(testInput);
      var answer = testInput.sort(function(a,b){return a-b});

      expect(test).to.eql(answer);
    })
  })
});


describe('kthSmallest', function(){
  describe('run on example input', function(){
    it('should return the example output', function(){
      var test = kthSmallest([1984, 1337, 9000, 8304, 5150, 9000, 8304], 5);
      var answer = 8304;

      expect(test).to.eql(answer);
    });
  });

  describe('run on [7, 10, 4, 3, 20, 15] and k=3', function(){
    it('should return 7', function(){
      var test = kthSmallest([7, 10, 4, 3, 20, 15], 3);
      var answer = 7;

      expect(test).to.eql(answer);
    });
  });

  describe('run on [7, 10, 4, 3, 20, 15] and k=4', function(){
    it('should return 10', function(){
      var test = kthSmallest([7, 10, 4, 3, 20, 15], 4);
      var answer = 10;

      expect(test).to.eql(answer);
    });
  });
})
