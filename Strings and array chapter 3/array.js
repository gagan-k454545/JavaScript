//array is the collection of items or elements
//array is the data structure
//array is the object
//array is the reference type

let a = [1, 2, 3, 4, 51, 1, 2, 3, 4, 45, 2, 1, 1, 0, 0];

let school = ["school1", "school2", "school3", "school4"];

let info = ["name", "age", 23, true, undefined, null, [1, 2, 3]];

console.log(a);
console.log(school);
console.log(info);



console.log(typeof info[6]); //object
console.log(Array.isArray(info)); //true


let obj = {
    st1: [1, 2, 3],
    st2: [4, 5, 6],
    st3: [7, 8, 9]
}
console.log(obj);
console.log(obj.st1[0]);

a.sort();
console.log(a);
a.reverse();
console.log(a);
console.log(a.length);
console.log(a[3]);

//array methods
//1.push() 2.pop() 3.shift() 4.unshift() 5.splice() 6.slice() 7.indexOf() 8.includes() 9.join() 10.concat()
//11.forEach() 12.map() 13.filter() 14.reduce() 15.find() 16.findIndex() 17.every() 18.some() 19.sort() 20.reverse()

a.push(100);
console.log(a);
a.pop();
console.log(a);
a.shift();
console.log(a);
a.unshift(200);
console.log(a);
a.splice(2, 3); //from index 2 delete 3 elements
console.log(a);
let b = a.slice(2, 5); //from index 2 to index 5
console.log(b);
console.log(a.indexOf(51));
console.log(a.includes(51));
let c = a.join("-");
console.log(c);
let d = [1000, 2000, 3000];
let e = a.concat(d);
console.log(e);
a.forEach((element) => {
    console.log(element);
});
let f = a.map((element) => {
    return element * 2;
});
console.log(f);
let g = a.filter((element) => {
    return element > 10;
});
console.log(g);
let h = a.reduce((acc, element) => {
    return acc + element;
}, 0);
console.log(h);
let i = a.find((element) => {
    return element > 10;
});
console.log(i);
let j = a.findIndex((element) => {
    return element > 10;
});
console.log(j);
let k = a.every((element) => {
    return element > 0;
});
console.log(k);
let m = a.some((element) => {
    return element > 50;
});
console.log(m);
a.sort();
console.log(a);
a.reverse();
console.log(a);


let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

arr1[4] = 50; //update
console.log(arr1);

let str = 'helloworld';
str[0] = 'H'; //not update
console.log(str);

//string is immutable
//array is mutable can be changed

arr1[5] = 50;
for (let l in arr1) {
    if (l == 7) {
        console.log('thala for a resone')
    }
    console.log(l); //index
}
console.log(arr1);



let fib = 10;
let fib1 = 0, fib2 = 1, fib3 = 0;

for (let i = 0; i < fib; i++) {
    console.log(fib3);
    fib3 = fib1 + fib2;
    fib1 = fib2;
    fib2 = fib3;
}
console.log('fibonacci series');

for (a of arr1) {
    console.log(arr1); //element
}

let city = ['chennai', 'banglore', 'hyderabad', 'pune', 'mumbai'];
city[0] = 'delhi';
for (let n in city) {
    console.log(city[n]); //index
}
for (let o of city) {
    console.log(o); //element
}
console.log('cities');

//practicejs 
let new1 = 0
let newArr = [85, 97, 44, 37, 76, 60]
for (let p of newArr) {
    new1 = new1 + p;


} new1 = new1 / newArr.length;
console.log(new1);

//offer is 10 persent print actuall offer prise
let itemPrise = [100, 200, 300, 400, 500];
for (let i = 0; i < itemPrise.length; i++) {
    let offer = itemPrise[i] - (itemPrise[i] * 10 / 100);
    console.log(offer);
}

//array methods 
//push pop tostring
let arr2 = [1, 2, 3, 4, 5];
arr2.push(6);   //changes original array
console.log(arr2);
arr2.pop();//changes original array
console.log(arr2);
let arrStr = arr2.toString();
console.log(arrStr);
console.log(typeof arrStr);
console.log(arr2); //original array not changed
console.log(arrStr);


let vegitable=['carrot','beans','potato','ladyfinger']
vegitable.push('apple','banana','pannere')
console.log(vegitable);
vegitable.pop('beans')
console.log(vegitable);
let popfunc=vegitable.pop()
console.log(popfunc);

let arrr1=[1,2,3,4,5]
let arrr2=[6,7,8,9,10]
console.log(arrr2.concat(arrr1));

//unshift() add element at the beginning of array


arrr1.shift(5)
console.log(arrr1);

//slice()//extract part of array and return new array

let newarr1=[1,2,3,4,5,6,7,8,9]

console.log(newarr1.slice(1,3));//end index not included


//splice() add or remove element from array
//start index,number of element to be removed,element to be added
newarr1.splice(2,3)  //splice(strtindex,deletcount,newel1,newel2,...)
console.log(newarr1);


console.log(newarr1)  // splice change original array


//element add
newarr1.splice(2,0,10,20)
console.log(newarr1);


//splice with example

let newarray1=[1,2,3,4,5,6,7,8,9]

newarr1.splice(2,0,1000)
console.log(newarray1);

//slice vs splice
//slice does not change original array
//splice changes original array
let newarray2=[1,2,3,4,5,6,7,8,9]
let newarray3=newarray2.slice(2,5)
console.log(newarray3);
console.log(newarray2); //original array not changed    
newarray2.splice(2,3)
console.log(newarray2); //original array changed


