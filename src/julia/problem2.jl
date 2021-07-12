#=
problem2:
- Julia version: 
- Author: koen
- Date: 2021-07-04
=#

function fibonacci_sequence(max, history = [1, 2])
    next = history[end] + history[end-1]
    return next > max ? history : fibonacci_sequence(max, vcat(history, next))
end

print(sum(filter(iseven, fibonacci_sequence(4_000_000))))