const glass = {
    name: 'Water Bottle',
    color: 'Blue',
    price: 250,
    isCleaned: true
}

console.log(glass);

// const keys = Object.keys(glass);
// console.log(keys);
// const values = Object.values(glass)
// console.log(values);

// const entries = Object.entries(glass);
// console.log(entries);
// delete glass.isCleaned;
// console.log(glass);

const {isCleaned, ...shortGlass} = glass;
console.log(shortGlass);

// Object.freeze(glass);
// glass.source = 'Bangladesh';
// glass.price = 500;
// console.log(glass);
Object.seal(glass);
glass.source = 'Bangladesh';
glass.price = 500;
console.log(glass);