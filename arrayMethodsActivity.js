let arr1 = ["Cecile", "Lone"];
let arr2 = ["Emil", "Tobias", "Linus"];
let combinedArr = arr1.concat(arr2);
console.log(combinedArr);  // Output: ["Cecile", "Lone", "Emil", "Tobias", "Linus"]

let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");
console.log(fruits);  // Output: ["Banana", "Orange", "Apple", "Mango", "Kiwi"]

let array1 = [1, 2, 3];
array1.unshift(4, 5);
console.log(array1);  // Output: [4, 5, 1, 2, 3]

fruits.pop();
console.log(fruits);  // Output: ["Banana", "Orange", "Apple", "Mango"]

let array2 = [1, 2, 3];
array2.shift();
console.log(array2);  // Output: [2, 3]

fruits.sort();
console.log(fruits);  // Output: ["Apple", "Banana", "Mango", "Orange"]

let slicedFruits = fruits.slice(1, 3);
console.log(slicedFruits);  // Output: ["Banana", "Mango"]

let months = ["January", "March", "April", "June"];
months.splice(1, 0, "February");  // Insert "February" at index 1
console.log(months);  // Output: ["January", "February", "March", "April", "June"]

months.splice(4, 1, "May");  // Replace "June" with "May"
console.log(months);  // Output: ["January", "February", "March", "April", "May"]