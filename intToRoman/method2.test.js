const intToRoman = require('./method2');

test('Equals to I', ()=>{
    expect(intToRoman(1)).toBe('I');
});

test('Equals to M', ()=>{
    expect(intToRoman(1000)).toBe('M');
});

test('Equals to XL', ()=>{
    expect(intToRoman(40)).toEqual('XL');
});

test('Equals to 1824', ()=>{
    expect(intToRoman(1824)).toBe('MDCCCXXIV');
});

