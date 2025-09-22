//operators and conditionals statements in js




//coments in js //this is coment This part of code will not execute

/* multiple line coment
this is coment
this is coment
*/


console.log("hello world") //this is coment


//operators in js
//arithmatic operators
//+ - * / % ++ --
//modulus operator   it is reminder operator
//exponentation operator    // **
//increament
//decreament

//unari operators
//binary operators
//ternary operators
let a = 10
let b = 5
console.log(a + b) //15
console.log(a - b) //5
console.log(a * b) //50
console.log(a / b) //2 
console.log(a % b) //0 //10/5=2 reminder 0
console.log(a ** b) //100000   10 to the power 5

let c=0;  //increament
console.log(c++ + c++ + ++c); //0+1+2=3
console.log(++c + c++ + ++c); //3+3+5=11
console.log(c++ + ++c + c++);//5+7+7=19
console.log(++c + ++c + ++c);//8+9+10=27
//decreament
console.log(--c + --c + c--); //9+8+8=25
console.log(c-- + --c + c--); //8+6+6=20
console.log(--c + c-- + --c); //5+5+3=13
console.log(c-- + c-- + c--); //3+2+1=6

//assignment operators
//= += -= *= /= %= **=
let d = 10
d += 5 //d=d+5
console.log(d) //15
d -= 5 //d=d-5
console.log(d) //10
d *= 5 //d=d*5
console.log(d) //50
d /= 5 //d=d/5
console.log(d) //10
d %= 3 //d=d%3
console.log(d) //1
d **= 3 //d=d**3
console.log(d) //1
//comparison operators
//== === != !== > < >= <=
let e = 10
let f = '10'
console.log(e == f) //true  value only check
console.log(e === f) //false value and type both check
console.log(e != f) //false value only check
console.log(e !== f) //true value and type both check
console.log(e > f) //false
console.log(e < f) //false
console.log(e >= f) //true
console.log(e <= f) //true

//logical operators
//&& || !
let g = true    
let h = false
console.log(g && h) //false  both true then true otherwise false
console.log(g || h) //true  one true then true otherwise false
console.log(!g) //false  not operator
console.log(!h) //true   not operator

//conditional statements
//if else if else switch case
let age = 18    
if(age < 18){
    console.log("you are minor")
}else if(age === 18){
    console.log("you are adult")
}
else{
    console.log("you are senior citizen")
}
//switch case
let day = 3
switch(day){
    case 1:
        console.log("monday")
        break
    case 2:
        console.log("tuesday")
        break
    case 3:
        console.log("wednesday")    
        break
    case 4:
        console.log("thursday")

        break
    case 5:
        console.log("friday")
        break
    case 6:
        console.log("saturday")
        break
    case 7:
        console.log("sunday")
        break       
    default:
        console.log("invalid day")
}


//priority of operators
//1. () parentheses
//2. ** exponentiation
//3. * / % multiplication division modulus
//4. + - addition subtraction

            

