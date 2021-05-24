console.log('비구조할당문');

let arr = [1,2,3,4,5,6,7,8,9];
/*
let a = arr[0];
let b = arr[1];
let c = arr[2];
*/
let [a,b,c, ...last] = arr;
console.log(a);
console.log(b);
console.log(c);
console.log(last);





let obj = {a:10,b:20,c:30,d:40};
let {a:a2, ...last2} = obj;

console.log(a2);
console.log(last2);

let {a:name,b:age,c:key,d:weight} = obj;
console.log(name)
console.log(age)
console.log(key)
console.log(weight)

let arr2 = [1,2,3]
let copy =  arr2;          //앑은복사
let copy2 = [...arr2];     //깊은복사

arr2[0] = 'ingoo';

console.log(copy);
console.log(copy2);