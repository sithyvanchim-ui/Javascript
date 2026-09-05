const numbers=[1,2,3,4,5];

const evenNumber=numbers.filter(num=> {
    return typeof num === 'number' && num  % 2 === 0;
});
console.log(evenNumber);
