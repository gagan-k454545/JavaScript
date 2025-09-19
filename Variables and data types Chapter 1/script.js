//*************************Variables in js********************
//Variables are containers for data




//*****************************Variables Rules**********************
// >variables name are case sensitvie 'a' and 'A' are different 
// >Only letters digits , underscore (-) and $ is allowde (not even spage )
// >ONLYE A LETTER UNDERSCORE(_) OR $ SHOULD BE 1ST character
// >Reservers word cannoth be vaiable name


let FullName='Gagan';
let LastName='k';
console.log(FullName,LastName);  //Gagan k
console.log(FullName+LastName); //Gagank


//>fullName --> camel case  this should be used in js
//>fullname --> xxx
//full_name  -->snakecase
//full-name -->kababcase
//FullName ---> pascal case 

isFOLLOW =true //camelcase
totalPrise =null//camelcase


//*****************let const car*************************** */\

//>var VARIABLE CAN BE REDECLARED AND UPDATED A GLOBAL SCOPE VARIABLE 
//>let variable cannot be redeclared but can be updated a block scope varibale
//>const variable cannot be redeclared or updated a block scope variable



let name ='GAGAN K';
console.log(name); //GAGAN K


var age=44;
var age=55;
console.log(age); //55

{
let age=33;
//let age=44; //error
}
//console.log(age); //error
{
    let age=15;
    age+33;
    age=69;
    console.log('age in let ',age); //55
}

{
    const pi=3.14;
    console.log(pi); //3.14
    let radius=5;
    console.log(pi*radius*radius); //78.5
}

let a;
console.log(a); //undefined
const c=null;
console.log(a); //error



//***********************Data Types in js**************************
//>Primitive Data Types
//1.Number 2.String  3.Boolean  4.Undefined  5.Null  6.Symbol 7.BigInt 
//>Non-Primitive Data Types 
//1.Object  2.Array  3.Function
//Object is a collection of key value pairs

let num=44;
console.log(typeof num); //number
let str='Gagan';
console.log(typeof str); //string
let isLoggedIn=true;
console.log(typeof isLoggedIn); //boolean
let und;
console.log(typeof und); //undefined
let n=null;
console.log(typeof n); //object (this is a bug in js)
let sym=Symbol('id');
console.log(typeof sym); //symbol
let bigInt=BigInt(1234567890123456789012345678901234567890);
console.log(typeof bigInt); //bigint

//***********key value pair                         *************** */

const student={
    name:'Gautham',
    age:21,
    ispassed:true,
    cgpa:9.6,
//key:value
};
console.log(student); //{name: 'Gautham', age: 21, ispassed: true, cgpa: 9.6}
console.log(typeof student); //object
console.log(student.name); //Gautham
console.log(student['age']); //21   
//2 ways to access the value
student.age=22; 
console.log(student.age); //22
student['cgpa']=9.8;
console.log(student.cgpa); //9.8    
if(student.ispassed==true){
    console.log('student is passed'); //student is passed
}


const student1={
    name:'Ananth',
    age:21,
    ispassed:true,
    cgpa:9.6,
//key:value
};

student1.age=+2;
console.log(student.age); //22
console.log(student.cgpa-1.6); //9.8
console.log(student1)

student1.name='Ananth hegde';
console.log(student1);


//Lets practice
//Q1 create a const object called product to store imformation show in the picture 
const product={
    image1:'url of the image ',
    name1:'parker jotter standard ct ball pen ',
    rating:4.5,
    mrp:270,
    offer:'5%',

};
console.log(product);


//*************string******************************* */

console.log('123'+1);
console.log('234'+'333');

const profile={
    username:'Karthik',
    followers:345,
    following:250,
    about:'I am a web developer',
};
console.log(profile);
console.log(typeof profile.followers);
console.log(typeof profile.about);
console.log(profile.username+' has '+profile.followers+' followers and '+profile.following+' following .About :'+profile.about);
console.log(profile)