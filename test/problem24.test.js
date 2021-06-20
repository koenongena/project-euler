const {solution} = require("../src/problem24.js");
const R = require('ramda');
const {rangeInclusive} = require("../src/math.js");

it('should return ', function () {
    const range = rangeInclusive(0, 2);

    expect(solution(1, range)).toEqual('012')
    expect(solution(2, range)).toEqual('021')
    expect(solution(3, range)).toEqual('102')
    expect(solution(4, range)).toEqual('120')
});