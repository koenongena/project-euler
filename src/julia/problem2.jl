#=
problem2:
- Julia version: 
- Author: koen
- Date: 2021-07-04
=#

function fibonacci_sequence(current = [1, 2]; limit = 1_000_000)
    print(current)
    next = sum(current[end-1:end])
    return next > limit ? current  : fibonacci_sequence([current; next]; limit = limit)
end

print(sum(filter(iseven, fibonacci_sequence(;limit = 4_000_000))))