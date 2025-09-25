//string is a sequence of character used to represent text


//create string
let str='Gagan is my name'

//strin lenmgth

console.log(str.length);

//string indices 

console.log(str[0]+str[1])

//Template literals
let name='Gagan'
let greeting=`My name is ${name}`
console.log(greeting);

let obj={
    item:'ink',
    price:203
}
console.log(`The item is ${obj.item} and money is ${obj.price}`);


//Templet literals in js
//way to have embedded expriessions in string
//use backticks ` writ text in between

let a=10
let b=20
console.log(`The sum of ${a} and ${b} is ${a+b}`);

//string interpolation
//to create stiring by doing substiturion of placeholder
//`string text ${expression} string text`

//escape character
console.log('This is first line\n This is second line\n This is third line \t tab space');

let str1='Gag\tan'
console.log(str1.length);

//String methods in js 
//These are built in funciton to manipulate string

//str.toUpperCase()
//str.toLowerCase()
//str.trim() //remove whitespace from both side of string


let string='This is my string'
console.log(string.toUpperCase());//oringina string not changed it is new string
console.log(string.toLowerCase());   
console.log(string.trim());
console.log(string);
//string are inmutable in javascript

string ='new string'
string=string.toUpperCase()
console.log(string);

str.slice()//extract part of string and return new string
//str.slice(startIndex,endIndex) endIndex is not included
let newStr='Apple, Banana, Mango'
let fruit=newStr.slice(7,13)
console.log(fruit);
str.concat()//join two or more string
let firstName='Gagan'
let lastName='K'
let fullName=firstName.concat(' ',lastName)
console.log(fullName);

str.replace()//replace a part of string with another string 
//str.replace(oldSubstr,newSubstr)
let message='I love JavaScript'
let newMessage=message.replace('JavaScript','JS')
console.log(newMessage);
//str.caharAt()//return character at specified index
let char=message.charAt(2)
console.log(char);


str.indexOf()//return index of first occurence of specified value
//str.indexOf(substr,startIndex)
let index=message.indexOf('love')
console.log(index);

//take the input and perfomr some operation


let input='Gagan'//prompt('Enter your name')

console.log(`@${input}${input.length}`);