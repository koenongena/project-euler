#=
problem1:
- Julia version: 
- Author: koen
- Date: 2021-07-04
=#

print(sum(filter(x -> x % 3 == 0 || x % 5 == 0, 0:1000)))