//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
//• Tests for equality and inequality with strings

//• Tests using the lower case function

//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

//• Tests using "and" and "or" operators

//• Test whether an item is in a array

//• Test whether an item is not in a array
let fName: string = "Fatima";
let lName: string = "Siddique";
// testing for equality and inequality
console.log(`First name is ${fName} and last name is ${lName}.
now comparing 1: equality and 2: inequality. 
1: ${fName == lName}
2: ${fName != lName}
`);
// changing to lowercase
console.log("changing the strings to lowercase");
console.log(fName.toLowerCase());
console.log(lName.toLowerCase());

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log("Dealing with numbers:");

let numx1: number = 5;
let numx2: number = 10;

console.log(`1: ${numx1 == numx2}
2: ${numx1 != numx2}
3: ${numx1 > numx2}
4: ${numx1 < numx2}
5: ${numx1 >= numx2}
6: ${numx1 <= numx2}
`);

// testing AND OR operator

console.log("Dealing with AND OR operator:");
console.log(`1: ${numx1 == numx2 && numx1 > numx2}
2: ${numx1 == numx2 && numx1 < numx2}
3: ${numx1 == numx2 && numx1 >= numx2}
4: ${numx1 == numx2 && numx1 <= numx2}
`);

//Test whether an item is  not in an array;
let anArray = ["One", "Two", "Three", "Four"];
console.log(anArray["Five"]);