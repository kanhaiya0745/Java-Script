// 1.  ways to print in JavaScript
//console.log("hello world");
// alert("This is not safe");
//document.write("This is docoment to write")


// 2 javascript console api
/*
console.log("hello world", 4+6, "another log");
console.warn("This is warning")
console.error("This is an error")
*/

//  3 JavaScript Variables
/*
var number1 = 34;
var number2 = 56;
console.log(number1+number2);
*/

// 4. Data types in JavaScript;

var num1 = 455;
var num2 = 89;

// String
var str1 = "This is a string";
var str2 = 'This is also string'

// Objects
var marks = {
    ravi: 34,
    Shubham: 78,
    kanhaiya: 99.9777

}
//console.log(marks);

// Booleans
var a = true;
var b = false;

// console.log(a,b);

//var und = undefined;
var und;
//console.log(und);

var n = null;            //The basic diff b/w undefined and null is undefined means osko bana ko chod diya gya h
// null hum isko kis wajh se null point karwa rahe h soach samj ke;


/*
At a very high level, there are two types of data types in JavaScript
1. Primitive data types: undefined, null, number, string, boolean, symbol
2. Reference data types: Arrays and Objects
*/

var arr = [1, 2, "bablue", 4, 5]
//console.log(arr);  // to print index of single line console.log(arr[0])

// Operators in JavaScript

// Arthmetic Operators

var a = 100;
var b = 10;

//  console.log("The value of a+b",a+b);
//  console.log("The value of a+b",a-b);
//  console.log("The value of a+b",a*b);
//  console.log("The value of a+b",a/b);


// Assignment Operators

var c = b;

//  c += 2;
//  c -= 2;
//  c *= 2;
//  c /= 2;

//console.log(c)

// comparison Opearators
var x = 34;
var y = 56;


//  console.log(x==y);
//  console.log(x>=y);
//  console.log(x<=y);
//  console.log(x>y);
//  console.log(x<y)

// Logical Operators

// Logical and

//  console.log(true && true)
//  console.log(true && false)
//  console.log(false && true)
//  console.log(false && false)

// Logical or
// Logical or
// console.log(true || true)
// console.log(true || false)
// console.log(false || true)
// console.log(false || false)

// Logical not
// console.log(!false);
// console.log(!true);

function avg(a, b) {
    c = (a + b) / 2;
    return c;
}

// DRY = Do not repeat yourself

c1 = avg(4, 6)
c2 = avg(14, 16)

//console.log(c1, c2);

// If else ladder means agar aapko ek hi ladder yaa statment me multiple condition check krna ho to if else ladder ka use kar sakte ho.


// Conditionals in JavaScript
/*
var age = 41;
// Single if statement
if(age > 18){
    console.log('You can drink rasna water');
}
// if - else statement
// if(age > 18){
//     console.log('You can drink rasna water');
// }
// else{
//     console.log('You cannot drink rasna water');
// }

age = 25;
// if-else Ladder
if(age > 32){
    console.log("You are not a kid");
}
else if(age >26){
    console.log("Bachhe nahi rahe");
}
else if(age >22){
    console.log("Yes Bachhe nahi rahe");
}
else if(age >18){
    console.log("18 Bachhe nahi rahe");
}
else{
    console.log("Bachhe rahe");
}
console.log("End of ladder");
*/

/* Writing a Function  it will take your age and it will show whether you are able to drink rasana water or not */

function calculatingAge(age) {
    if (age > 18) {
        console.log("You can drink rasana water")

    }

    else if (age <= 18 && age <= 16) {
        console.log("You can drink only 1 glass of Rasana water");
    }

    else {
        console.log("You can't drink Rasana water");
    }
}

//console.log(calculatingAge(22));
var arr = [1, 2, 3, 4, 5, 6, 7];

for (var i = 0; i < arr.length; i++) {
    if (i == 2) {
        // break;
        continue;
    }
    //console.log(arr[i]);
}

// By using forEach loop

arr.forEach(function (elment) {
    //console.log(elment);
})

const ac = 0;
//ac++;

//ac = ac+1;
let j = 0;

// while(j<arr.length){
//     //console.log(arr[j]);
//     j++;
// }

// do{
//     console.log(arr[j]);
//     j++;
// }while(j<arr.length);

let myArr = ["Fan", "Camera", 34, null, true];

// Array Mehtods
//console.log(myArr.length)

//myArr.pop();  // it is removing the last element
//console.log(myArr)

//myArr.push("kanhaiya") // it will push the element into the last
//console.log(myArr)

// String Methods in JavaScript

// console.log(myLovelyString.length)
// console.log(myLovelyString.indexOf("good"))
// console.log(myLovelyString.lastIndexOf("good"))

// console.log(myLovelyString.slice(1,4))

// var d = myLovelyString.replace("Harry", "Rohan");
// d = d.replace("good", "bad");
// console.log(d, myLovelyString)


let myDate = new Date();
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());
// console.log(myDate.getMinutes());
// console.log(myDate.getHours());

// DOM Manipulation (docoment object model)

let elem = document.getElementById('click');
console.log(elem);

let elemClass = document.getElementsByClassName("container")
console.log(elemClass);

//  elemClass[0].style.background = "yellow";

elemClass[0].classList.add("bg-primary")
// elemClass[0].classList.add("text-success")
// elemClass[0].classList.add("text-success") // (When you have to remove the text color[only .remove have changes]);



// // console.log(elem.innerHTML);
// // console.log(elem.innerText);

// console.log(elemClass[0].innerHTML);
// console.log(elemClass[0].innerText);

tn = document.getElementsByTagName('div')
// console.log(tn)
createdElement = document.createElement('p');
createdElement.innerText = "This is a created para";
tn[0].appendChild(createdElement);
createdElement2 = document.createElement('b');
createdElement2.innerText = "This is a created bold";
tn[0].replaceChild(createdElement2, createdElement);

// removeChild(element); ---> removes an element

// selecting using query;
// sel = document.querySelector('.container')
// console.log(sel)
// sel = document.querySelectorAll('.container')
// console.log(sel)

function clicked() {
   // console.log('The button was clicked')
}
window.onload = function () {
    //console.log('The document was loaded')
}


// Events in JavaScript

// firstContainer.addEventListener('click', function(){
//     document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked</b>"
//     console.log("Clicked on Container")
// })

// firstContainer.addEventListener('mouseover', function(){
//     console.log("Mouse on Container")
// })

// firstContainer.addEventListener('mouseout', function(){
//     console.log("Mouse out of Container");
// })

// let prevHTML = document.querySelectorAll('.container')[1].innerHTML;
// firstContainer.addEventListener('mouseup', function(){
//     document.querySelectorAll('.container')[1].innerHTML = prevHTML;
//     console.log("Mouse up when clicked on Container");
// })

// firstContainer.addEventListener('mousedown', function(){
//     document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked</b>"
//     console.log("Mouse down when clicked on Container");
// })


// Arrow Functions
// function summ(a, b){
//     return a+b;
// }
summ = (a,b)=>{
    return a+b;
}

logKaro = ()=>{
    document.querySelectorAll('.container')[1].innerHTML = "<b> Set interval fired</b>"
   // console.log("I am your log")
}

// SetTimeout and setintervsal
//setTimeout(logKaro,2000)

//setInterval(logKaro,2000)

// use clearInterval(clr)/clearTimeout(clr) to cancel setInterval/setTimeout

// JavaScript localStorage
// localStorage.setItem('name', 'harry') 
// localStorage 
// localStorage.getItem('name')
// localStorage.removeItem('name')
// localStorage.clear();

// Json 
// obj = {name: "harry", length: 1, a: {this: 'tha"t'}}
// jso = JSON.stringify(obj);
// console.log(typeof jso)
// console.log(jso)
// parsed = JSON.parse(`{"name":"harry","length":1,"a":{"this":"that"}}`)
// console.log(parsed);

// Template literals - Backticks
a = 34;
console.log(`this is my ${a}`)

