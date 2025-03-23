console.log(1 > 2);
// This compares if 1 is greater than 2. The output is false.

console.log(1 < 2);
// This compares if 1 is less than 2. The output is true.

console.log(1 == 2);
// This checks if 1 is loosely equal to 2 (without type coercion). The output is false.

console.log(1 != 2);
// This checks if 1 is not loosely equal to 2. The output is true.

console.log(1 >= 2);
// This checks if 1 is greater than or equal to 2. The output is false.

console.log(1 <= 2);
// This checks if 1 is less than or equal to 2. The output is true.

console.log("2" > 1);
// This compares if the string "2" is greater than the number 1. The string "2" is converted to the number 2, so the output is true.

console.log("2" < 1);
// This compares if the string "2" is less than the number 1. The string "2" is converted to the number 2, so the output is false.

console.log("dsfjd" < 2);
// This compares if the string "dsfjd" is less than the number 2. The string "dsfjd" is converted to NaN, and any comparison with NaN is false, so the output is false.

// do not compare two different types of data types as it will create a mess in the code

console.log(null > 0);
// This compares if null is greater than 0. null is converted to 0, so the comparison is 0 > 0, which is false.

console.log(null < 0);
// This compares if null is less than 0. null is converted to 0, so the comparison is 0 < 0, which is false.

console.log(null == 0);
// This checks if null is loosely equal to 0. null is only loosely equal to undefined, so the output is false.

console.log(undefined == 0);
// This checks if undefined is loosely equal to 0. undefined is only loosely equal to null, so the output is false.
console.log(undefined > 0);
// This compares if undefined is greater than 0. undefined is converted to NaN, and any comparison with NaN is false, so the output is false.

console.log(undefined < 0);
// This compares if undefined is less than 0. undefined is converted to NaN, and any comparison with NaN is false, so the output is false.

// ===
console.log("2" === 2);
// This checks if the string "2" is strictly equal to the number 2. Since they are of different types, the output is false.