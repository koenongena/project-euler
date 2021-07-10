import {isPanDigitalProduct} from "../src/problem32";

it('should know when a multiplication is pandigital', function () {
    expect(isPanDigitalProduct(39, 186)).toBeTruthy();
});

it('should know when a multiplication is NOT pandigital', function () {
    expect(isPanDigitalProduct(39, 187)).toBeFalsy();
});

it('should ', function () {
    
}); 
