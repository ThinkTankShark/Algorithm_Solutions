#!/bin/ruby

n = gets.strip.to_i


def main(n)
  sum = fac(n);
  p sum;
end

def fac(n)
    if (n <= 1)
      return 1;
    else
      return n *  fac(n - 1);
    end
end

main(n)
