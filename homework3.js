// 1) Create an iffe that returns an object with 
// fields: function setValue(), function showValue() and function reverseValue(). 
// Calling functions either logs the value or reverse it in an object. 
// If value was not provided yet or is empty showValue function 
// is to return information about that. Value can be type string or number. 
// reverseValue():  If number do (*(-1)), if string reverse it.  Closure pattern.


(function iife (value) {
    
    let setValue = value;
    
    
    if (value === null || value === undefined || value == 0) {
        let showValue = "value was not provided or is empty";
        console.log(showValue);
        
    } else {
        showValue = value;
        if (isNaN(value)) {
            function reverseString(str) {
                var newString = "";
                for (var i = str.length - 1; i >= 0; i--) {
                    newString += str[i];
                }
                return newString;
            }
            reverseValue = reverseString(value);    

        } else {
            
            reverseValue = value * (-1);
        }
        let obj = {
            getsetValue: setValue, 
            getshowValue: showValue,
            getreverseValue: reverseValue,

        }
        console.log(obj);
    }
    }) ();




    
    

