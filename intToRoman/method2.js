var intToRoman = function(num) {
    const numMap = {
        1000:'M', 900:'CM', 500 : 'D', 400 : 'CD', 100 : 'C',  90 : 'XC', 50 : 'L', 40 : 'XL', 10 : 'X', 9 : 'IX', 5 : 'V',  4 : 'IV',  1 : 'I'
    };
    
    const keys = Object.keys(numMap).map(Number).reverse();

    let numerals = '';
    
    for (let item of keys){
        let digitRepeats = Math.floor(num/item);
        numerals += numMap[item].repeat(digitRepeats);
        num = num % item;        
    }
    
    return numerals;
};

module.exports = intToRoman;
// console.log('I', intToRoman(1));
// console.log('X', intToRoman(10));
// console.log('C', intToRoman(100));
// console.log('M', intToRoman(1000));
// console.log('CD', intToRoman(400));
// console.log('VIII', intToRoman(8));
// console.log('MDCCCXXIV', intToRoman(1824));