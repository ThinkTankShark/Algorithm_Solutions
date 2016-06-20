"""Implement a function recursivly to get the desired
Fibonacci sequence value.
Your code should have the same input/output as the
iterative code in the instructions."""

def get_fib(position):

    fib = [0, 1]
    def recursion(num):
        if num >= position:
            return
        else:
            first = len(fib) - 1
            second = len(fib) - 2
            to_insert = fib[first] + fib[second]

            fib.append(to_insert)
            recursion(num + 1)
    recursion(1)
    return fib[position]

# Test cases
print get_fib(9)
print get_fib(11)
print get_fib(0)
