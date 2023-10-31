const actor = {
    name: 'Ananta',
    age: 30,
    number: '01821706537',
    money: 2355892202
}

const {number, age} = actor;
// const number = actor.number;
console.log(number);

console.log(age);

function doubleThem(a,b,c){
    return [a*2, b*2,c*2]
}
const [first, second,,] = doubleThem(2,3,2);
console.log(first,second);