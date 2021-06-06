import {alphabeticalValue} from "../src/words";

it('should score COLIN as 53', function () {
    expect(alphabeticalValue("COLIN")).toEqual(53);
});