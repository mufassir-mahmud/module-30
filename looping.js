const numbers = [2,4,6,8];
for(const num of numbers){
    console.log(num);
}

const nobab = 'Siraj Ud Doula';
for(const char of nobab){
    console.log(char);
}
const glass = {
    name: 'Water Bottle',
    color: 'Blue',
    price: 250,
    isCleaned: true
}
for( const key in glass){
    const value = glass[key]
    console.log(key,value);
}

const keys = Object.keys(glass);
console.log(keys);
for(const key of keys){
    const value = glass[key]
    console.log(key,value);
}
