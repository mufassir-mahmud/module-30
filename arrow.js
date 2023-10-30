function add(a,b){
return a+b
}
const sum = add(5,10)
console.log(sum);

const add2 = function (a,b){
    return a+b;
}
const sum2 = add2(1,10)
console.log(sum2);

// const add3 = (a,b) => a +b;
// const sum3 = add3(4,4);
// console.log(sum3);

const add3 = (a,b) => a+b;
const sum3 = add3(5,5);
console.log(sum3);

const add4 = (num1,num2,num3,num4,num5) => num1+num2+num3+num4+num5;
const sum4 = add4(1,2,3,4,5);
console.log(sum4);