// ARRAY: [1,6,23,8,4,8,3,7]

// 1)	Create a function that returns the sum of all elements passed in array as parameter. Function (array)=>number
// 2)	Create a function that returns sum of first and last elements of given array.
// 3)	Create a function that takes a number and return factorial of that number.
// 4)	Create a function that returns given array in reverse order. // no build in functions  
// 5)	Create a function that based on given array returns new array in pattern [a,b,c,d,e,f] -> [a+b, c+d, e+f]    [1,3,4,1,0,3] => [4,5,3] function(array)=>array
// 6)	For time of this example remove last element from the given array. Create a function that based on given array return new array in pattern [a,b,c,d,e] -> [a+b, c+d, e+e]
// 7)	Create a function the return one random element from given array. // use random function 
// 8)	Create a function that takes two parameters: array and number off attempts. Based on number of attempts choose a random number from table that many times and return lowest one.
// 9)	Create a function that takes given array. Then takes a random element, removes it from the array and pushes it to result arrays. This takes place as long as there are elements in source array. 
// 10)	Create a function that on given array will perform operation of adding or subtracting elements. Operation is to be chosen at random. And return a result.[a,b,c,d] =>(((a+-b)+-c)+-d)
// 11)	Create a function that will return the current day name in Polish. 
// 12)	Create a function that tells us how many days till Friday 
// 13)	Create a function that take two numbers and return the object with 4 fields. Result on 4 basic arithmetic operations. 

// console.log(
//     [1,6,23,8,4,8,3,7].reduce((a, b) => a + b)
//   )
//   console.log(
//     [].reduce((a, b) => a + b)
//   )

// Zad.1 

// let array = [1,6,23,8,4,8,3,7];

// console.log(
//     array.reduce((a, b) => a + b)
// )

// Zad.2

// let array = [1,6,23,8,4,8,3,7];

// function sum () {
//    console.log(array[0]+array.length-1);
// }
// sum ();

// Zad.3

// function factorialize(x) {
   
//     if (x == 0) 
//         return 1;
//     else {
//         return (x * factorialize(x - 1));
//     }
//   }
//   console.log(factorialize(4));

// Zad.4 

// let array = [1,6,23,8,4,8,3,7];

//  function reverse_array (){
 
//     for (let i=array[array.length-1]; i >= 0; i--) {
      
//      console.log(array[i]);
// }
// }
// reverse_array();

// zad.5

// let array = [1,3,4,1,0,3];

// function new_aray (){
//     let x = array[0]+array[1];
//     let y = array[2]+array[3];
//     let z = array[4]+array[5];
//     let array1 = [x, y, z];
//     console.log(array1);
// }
// new_aray();

// zad.6 

// let array = [1,3,4,1,0];


// function new_aray (){
//     let x = array[0]+array[1];
//     let y = array[2]+array[3];
//     let z = array[4]+array[4];
//     let array1 = [x, y, z];
//     console.log(array1);
// }
// new_aray();

// zad.7 

// let array = [1,3,4,1,0,3];

// function random_element(){
//     let element = array[Math.floor(Math.random() * array.length)];
//     console.log(element);

// }
// random_element();

// zad.8

// let array = [1,3,4,1,0,3];
// let attempts = 3;
// let new_array = [];
// function lowest_one () {
// for (i=1; i<=attempts; i++) {
//     let x = array[Math.floor(Math.random() * array.length)];
//     new_array.push(x);
// }
// console.log(Math.min(...new_array));
// }
// lowest_one();

// zad.9

// let array = [1,3,4,1,0,3];
// let new_array = [];

// function pusher () {
//     let array = [1,3,4,1,0,3];
//     let new_array = [];
//     while (array.length != 0)
//     {
//         let x = array[Math.floor(Math.random() * array.length)];
//         new_array.push(x);
//         array.splice(array.indexOf(x), 1)
//     }
//     console.log(new_array);
//     console.log(array);
    
// }
// pusher();

// zad.10

// 10)	Create a function that on given array will perform operation of adding or subtracting elements. 
// Operation is to be chosen at random. And return a result.[a,b,c,d] =>(((a+-b)+-c)+-d)

// let array = [1,3,4,1,0,3];

// function add_sub () {

// let arr1 = [array[0]+array[1], array[0]-array[1]];
// let x = arr1[Math.floor(Math.random() * arr1.length)];
// let arr2 = [x+array[2], x-array[2]];
// let y = arr2[Math.floor(Math.random() * arr2.length)];
// let arr3 = [y+array[3], y-array[3]];
// let z = arr3[Math.floor(Math.random()* arr3.length)];
// console.log(arr1, arr2, arr3);
// console.log(x, y, z);
// console.log("result is: ", z);
// }
// add_sub();

// zad.11
// function current_day() {
//     let week = ["poniedzialek", "wtorek", "środa", "czwartek", "piątek", "sobota", "niedziela"]

// let y = new Date(+1);
// let day = y.getUTCDay();
// console.log(week[day]);
// }
// current_day();

// zad.12

// function days_till_friday() {
//     let y = new Date();
// let day = y.getUTCDay();
// if (day <= 4){
//     console.log(4-day);
// } else if (day === 5){
//     console.log(4-day+7);
// } else if (day === 6) {
//     console.log(4-day+6);
// }
// }
// days_till_friday();

// zad.13

// function basic_op (x, y) {

//     let tab = {
//         sum: x + y,
//         sub: x - y,
//         mul: x * y,
//         div: x / y,
//     }
//     console.log(tab.sum, tab.sub, tab.mul, tab.div);
// }
// basic_op(3, 2);










