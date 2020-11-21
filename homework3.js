// 1) Create an iffe that returns an object with 
// fields: function setValue(), function showValue() and function reverseValue(). 
// Calling functions either logs the value or reverse it in an object. 
// If value was not provided yet or is empty showValue function 
// is to return information about that. Value can be type string or number. 
// reverseValue():  If number do (*(-1)), if string reverse it.  Closure pattern.


// (function iife (value) {
    
//     let setValue = value;
    
    
//     if (value === null || value === undefined || value == 0) {
//         let showValue = "value was not provided or is empty";
//         console.log(showValue);
        
//     } else {
//         showValue = value;
//         if (isNaN(value)) {
//             function reverseString(str) {
//                 var newString = "";
//                 for (var i = str.length - 1; i >= 0; i--) {
//                     newString += str[i];
//                 }
//                 return newString;
//             }
//             reverseValue = reverseString(value);    

//         } else {
            
//             reverseValue = value * (-1);
//         }
//         let obj = {
//             getsetValue: setValue, 
//             getshowValue: showValue,
//             getreverseValue: reverseValue,

//         }
//         console.log(obj);
//     }
//     }) ();

    // zad.3 

//     3) Create an array (by hand) of objects and call sum() function in context of each one of them. 
// Sum function is to come from this object  BaseObject = { x,y, sum: function (){ return this.x+this.y}} 

// Example array: [{x:2,y:3},{x:-1,x:6,{x:0,x:8},…..]

// let array = [{x:2,y:3},{x:-1,y:6},{x:0,y:8}];

// for (let i=0; i < array.length; i++) {

//     let {x, y} = array[i];

//     let obj = {

//         x,
//         y,        
//         sum: function () {
//         return this.x+this.y;
//         }
    
//     }
// console.log(obj.sum());
// }

// zad.4 

// Given an array of objects, for each object call operation() function in context of next object. 
// If object is last, got back to start of the array for operation function. In loop;

// let array = [
//     {
//         x: 1,
//         y: 'object one value',
//         operation: function (){
//             return 'object one prefix' + this.x + this.y;
//         } 
//     },
//     {
//         x: 2,
//         y: 'object two value',
//         operation: function() {
//             return 'object two prefix' + this.x + this.y;
//         } 
//     },
//     {
//         x: 3,
//         y: 'object three value',
//         operation: function() {
//             return 'object three prefix' + this.x + this.y;
//         }
//     },
// ]

// for (let i = 0; i < array.length; i++) {
 
//     if (i === array.length-1) {
//         console.log(array[i].operation.call(array[i-(array.length-1)]));
//     } else {
//         console.log(array[i].operation.call(array[i+1]));
//     }

// }







    
    

