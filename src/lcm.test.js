const {lcm} = require("./math");

it('should calculate the smallest common', function () {
    expect(lcm(24, 300)).toEqual(600);
});