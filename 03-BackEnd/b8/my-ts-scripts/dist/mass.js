"use strict";
// ./mass.ts
const units = ['kg', 'hg', 'dag', 'g', 'dg', 'cg', 'mg'];
function convert2(value, fromUnit, toUnit) {
    const fromIndex = units.indexOf(fromUnit);
    const toIndex = units.indexOf(toUnit);
    const exponent = toIndex - fromIndex;
    return value * Math.pow(10, exponent);
}
console.log(convert2(15, 'g', 'kg'));
