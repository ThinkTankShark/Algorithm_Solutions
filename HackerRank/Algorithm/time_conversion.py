#!/bin/python

import sys
import re

time = raw_input().strip()
time_arr = time.split(':')

if 'PM' in time and time_arr[0] != '12':
    time_arr[0] = str(int(time_arr[0]) + 12)
elif 'AM' in time and time_arr[0] == '12':
    time_arr[0] = '00'

time_arr[2] = time_arr[2][0:2]
new_time = time_arr[0] + ':' + time_arr[1] + ':' + time_arr[2]
print new_time
