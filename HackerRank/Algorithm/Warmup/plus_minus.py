#!/bin/python

import sys


n = int(raw_input().strip())
arr = map(int,raw_input().strip().split(' '))

positive = 0
negative = 0
zeros = 0
length = len(arr)

for number in arr:
    if number >= 1:
        positive += 1
    elif number < 0:
        negative += 1
    else:
        zeros += 1
#print(positive, negative, zeros, length)

print float(positive) / length
print float(negative) / length
print float(zeros) / length







