#!/bin/python

import sys


n = int(raw_input().strip())
for i in range(1, n + 1):
    each_line = ''
    number_of_space = n - i
    number_to_print = n - number_of_space
    # print number_of_space

    for i in range(1, number_of_space + 1):
        if i != 0:
            each_line += str(' ')

    print (each_line) + str(number_to_print * '#')
