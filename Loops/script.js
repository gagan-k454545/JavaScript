//loops are used to executea piece of code again and again

for(let i=0;i<100;i++){
    console.log(i);
    if(i==50){
continue
    }
     
}

console.log("loop ended");

//calculat sum of first n natural numbers
let n=5;
let sum=0;  
for(let i=1;i<=n;i++){
    sum+=i;  //sum=sum+i
}
console.log("sum of first n natural numbers is "+sum);

//infinite loop
// for(let i=1;i<=n;){
//     console.log(i);
// }

//while loop
let j=1;
while(j<=n){
    console.log(j);
    j++;
}

//do while loop
let k=1;
do{
    console.log(k);
    k++;
}while(k<=n);


//for of loop
//FOR(VALUE OF STRINGVARIABLE/ARRAYVARIABLE){
    //code to be executed
//}
let str="hello";
for(let i of str){
    console.log(i);
}



//for in loop
//FOR(KEY IN OBJECTVARIABLE){
    //code to be executed
//}
let obj={
    name:"john",
    age:30,
    city:"new york"
};
for(let key in obj){
    console.log('key' ,key,"value ",obj[key]);
}

//1 pracice questions
//print all even numbers from 1 to 100
for(let i=2;i<=100;i+=2){
    console.log(i);
}
//2 practive
//gusee the random number
let c=1;
let gameNum=55;
let input
do{
 input=parseInt(prompt("Enter the no"));
if(input>gameNum){
    console.log("enter the less no ",c);
}else if(input<gameNum){
    console.log("enter the greateer no",c);
}
else if(input===gameNum){
    console.log("yor guess is prefet ",c,"attemp ")
}
c++;
}while(input!=gameNum);

