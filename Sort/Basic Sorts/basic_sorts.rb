 # /**********************************************************************
 #  *                          Homework III                              *
 #  *                                                                    *
 #  *  Problem: Insertion Sort                                           *
 #  *                                                                    *
 #  *  Prompt: Given an unsorted array of numbers,                       *
 #  *          return a sorted array using insertion sort.               *
 #  *                                                                    *
 #  *  Input:  An unsorted array                                         *
 #  *  Output: A sorted array                                            *
 #  *                                                                    *
 #  *  Example: input = [3,9,1,4,7] , output = [1,3,4,7,9]               *
 #  *                                                                    *
 #  *  What are the time and auxiliary space complexity?                *
 #  *                                                                    *
 #  **********************************************************************/

 #  /**********************************************************
 #   *                                                        *
 #   *  Problem: Selection Sort                               *
 #   *                                                        *
 #   *  Prompt: Given an unsorted array of numbers,           *
 #   *          return a sorted array using insertion sort.   *
 #   *                                                        *
 #   *  Input: An unsorted array                              *
 #   *  Output: A sorted array                                *
 #   *                                                        *
 #   *  Example: input = [8,3,2,10] output = [2,3,8,10]       *
 #   *                                                        *
 #   *  What are the time and auxiliary space complexity?    *
 #   *  What is the best case time complexity?                *
 #   *                                                        *
 #   **********************************************************/

 #  /**********************************************************
 #   *                                                        *
 #   *  Problem: Bubble Sort                                  *
 #   *                                                        *
 #   *  Prompt: Given an unsorted array of numbers,           *
 #   *          return a sorted array using bubble sort.      *
 #   *                                                        *
 #   *  Input: An unsorted array                              *
 #   *  Output: A sorted array                                *
 #   *                                                        *
 #   *  Example: input = [8,3,2,10] output = [2,3,8,10]       *
 #   *                                                        *
 #   *  What are the time and auxiliary space complexity?     *
 #   *      T: O(n^2) Omega(n^2)  S: O(1)                     *
 #   **********************************************************/
# array = [8,3,2,10,0]
def insertionSort(input)
  for j in 1..input.length - 1
    temp = input[j]
    i = j - 1

    while i >= 0 && input[i] > temp
      input[i + 1] = input[i]
      i -= 1
    end
    input[i + 1] = temp
  end
  return input
end
# p insertionSort(array)

# array = [8,3,2,10,0,-1,-2,-1]
def swap(array, first_index, second_index)
 temp = array[first_index]
 array[first_index] = array[second_index]
 array[second_index] = temp
end

def find_min_index(array, start_index)
  min_index = start_index
  min_value = array[start_index]

  for number in start_index + 1..array.length - 1
    if array[number] < min_value
      min_index = number
      min_value = array[number]
      # p min_value
    end
  end
  return min_index
end

def selectionSort(input)
  for index in 0..input.length - 1
    min = find_min_index(input, index)
    swap(input, index, min)
  end
  return input
end

# # array = [8,3,2,10,0,-1,-2,-1]
def bubbleSort(input)
  swap = true
  while swap == true
    swap = false
    for index in 0..input.length - 2
      # p index
      if input[index] > input[index + 1]
        swap(input, index, index + 1)
        swap = true
      end
    end
  end
  return input
end
# p bubbleSort(array)

# //////////////////////////////////////////////////////////
# ///////////////  DO NOT TOUCH TEST BELOW!!!  /////////////
# //////////////////////////////////////////////////////////

require 'test/unit'

class InsertionSortTest < Test::Unit::TestCase
  def test_insertionSort_should_handle_example_case
    test = insertionSort([3,9,1,4,7])
    answer = [1,3,4,7,9]

    assert_equal(answer, test);
  end

  def test_insertionSort_should_handle_empty_input
    test = insertionSort([])
    answer = []

    assert_equal(answer, test);
  end

  def test_insertionSort_should_handle_large_input
    testInput = []
    $i = 1000000

    while $i > 0
      toPush = Random.rand(1000000)
      testInput.push(toPush)
      $i = $i - 1
    end

    test = insertionSort(testInput)
    assert_equal(testInput.sort, test)
  end
end

class SelectionSortTest < Test::Unit::TestCase
  def test_selectionSort_should_handle_example_case
    test = selectionSort([8,3,2,10])
    answer = [2,3,8,10]

    assert_equal(answer, test);
  end

  def test_selectionSort_should_handle_empty_input
    test = selectionSort([])
    answer = []

    assert_equal(answer, test);
  end

  def test_selectionSort_should_handle_large_input
    testInput = []
    $i = 1000000

    while $i > 0
      toPush = Random.rand(1000000)
      testInput.push(toPush)
      $i = $i - 1
    end

    test = selectionSort(testInput)
    assert_equal(testInput.sort, test)
  end

end

class BubbleSortTest < Test::Unit::TestCase
  def test_bubbleSort_should_handle_example_case
    test = bubbleSort([8,3,2,10])
    answer = [2,3,8,10]

    assert_equal(answer, test);
  end

  def test_bubbleSort_should_handle_empty_input
    test = bubbleSort([])
    answer = []

    assert_equal(answer, test);
  end

  def test_bubbleSort_should_handle_large_input
    testInput = []
    $i = 1000000

    while $i > 0
      toPush = Random.rand(1000000)
      testInput.push(toPush)
      $i = $i - 1
    end

    test = bubbleSort(testInput)
    assert_equal(testInput.sort, test)
  end
end
