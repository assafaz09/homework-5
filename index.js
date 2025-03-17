// question 1:
 function checkID(){
     let id = prompt("whats your id?");
     if (id && id.length === 9 && ! isNaN(id) ) {
        alert ("thank u");
     }else{
         alert("no");
     }
 }
 
 
 
// function checkID() {
//     let id = prompt('id')

//     while (!id || id.length !==9 || isNaN(id)) {
//         id = prompt('again');
//     }

//     alert('yes');

// }




// checkID();

// question2:
function primeNumber (num) {
    if (num < 2 ) return false;
    for (let index = 2; index <= Math.sqrt(num); index++) {
        if (num % index ===0) return false 
    }
    return true
}
console.log(primeNumber(2));  // true
console.log(primeNumber(7));  // true
console.log(primeNumber(10)); // false
console.log(primeNumber(29)); // true



function addSpaceBeforeUppercase(str){
let result = "";

for (let index = 0; index < str.length; index++) {
        if (str[index]===str[index].toUpperCase() && str[index]!==" "){
    result += " "
}
result += str[index]
}
return result
}

console.log(addSpaceBeforeUppercase("HelloWorld"));   
console.log(addSpaceBeforeUppercase("JavaScriptIsFun")); 
console.log(addSpaceBeforeUppercase("ThisIsATest"));