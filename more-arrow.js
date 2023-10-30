const getAge = (person) => student.age;
const student = {name: 'Mufassir', age:21};
const age = getAge(student)
console.log(age);

const getThird = (numbers) => numbers[2];
const third = getThird([11,22,33,44,55,66])
console.log(third);


const getPi = () => Math.PI
console.log(getPi());

const doMath = (x,y,z) =>{
    const sum = x+y+z;
    const mult = x*y*z;
    const result = sum+mult;
    return result
}
const total = doMath(1,1,1);
console.log(total);