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
#  *  What are the time and auxilliary space complexity?                *
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
#   *  What are the time and auxilliary space complexity?    *
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
#   *  What are the time and auxilliary space complexity?    *
#   *                                                        *
#   **********************************************************/

def insertionSort(input):
  for index in range(1,len(input)):

    currentvalue = input[index]
    position = index

    while position>0 and input[position-1]>currentvalue:
       input[position]=input[position-1]
       position = position-1

    input[position]=currentvalue

def selectionSort(input):
  for nums in range(len(input)-1,0,-1):
    positionOfMax=0
    for location in range(1,nums+1):
      if input[location]>input[positionOfMax]:
      positionOfMax = location

  temp = input[nums]
  input[nums] = input[positionOfMax]
  input[positionOfMax] = temp

def bubbleSort(input):
  for num in range(len(input)-1,0,-1):
    for i in range(num):
      if input[i]>input[i+1]:
        temp = input[i]
        input[i] = input[i+1]
        input[i+1] = temp

