import {unitFractionLengthOfRecurringCycle} from "../src/problem26";

it('should return recurring 0 of 0.5', function () {
    expect(unitFractionLengthOfRecurringCycle(2)).toEqual(0);
    expect(unitFractionLengthOfRecurringCycle(3)).toEqual(1);
    expect(unitFractionLengthOfRecurringCycle(7)).toEqual(6);
    expect(unitFractionLengthOfRecurringCycle(17)).toEqual(16);
    expect(unitFractionLengthOfRecurringCycle(29)).toEqual(28);
});