// Method 1
// var intToRoman = function(num) {
//     let arr = num.toString().split('');
    
//     let numerals = '';

//     let posn = 1;console.log(arr);
//     while (arr.length){
//         let current = arr.pop();
//         let romStr = getStr(current, posn);
//         numerals = romStr + numerals;
//         posn++;
//     }
//     return numerals;
    
// };


var getStr = (val, idx) => {

    let str = '';
    switch (parseInt(val)){
        case 0:
            str = '';
            break;
        case 1:
            switch (idx) {
                case 1:
                    str = 'I';
                    break;
                case 2:
                    str = 'X';
                    break;
                case 3:
                    str = 'C';
                    break;
                case 4:
                    str = 'M';
                    break;
            
                default:
                    break;
            }
            break;
        case 2:
            str = 'II';
            break;
        case 3:
            str = 'III';
            break;
        case 4:
            switch (idx) {
                case 1:
                    str = 'IV';
                    break;
                case 2:
                    str = 'XL';
                    break;
                case 3:
                    str = 'CD';
                    break;
            
                default:
                    break;
            }
            break;
        case 5:
            switch (idx) {
                case 1:
                    str = 'V';
                    break;
                case 2:
                    str = 'L';
                    break;
                case 3:
                    str = 'D';
                    break;
            
                default:
                    break;
            }
            break;
        case 6:
            str = 'VI';
            break;
        case 7:
            str = 'VII';
            break;
        case 8:
            str = 'VIII';
            break;
        case 9:
            switch (idx) {
                case 1:
                    str = 'IX';
                    break;
                case 2:
                    str = 'XC';
                    break;
                case 3:
                    str = 'CM';
                    break;
            
                default:
                    break;
            }
            break;
        case 10:
            switch (idx) {
                case 1:
                    str = 'IV';
                    break;
                case 2:
                    str = 'XL';
                    break;
                case 3:
                    str = 'CD';
                    break;
            
                default:
                    break;
            }
            break;

        default:
            break;  
    }
    return str;
}


console.log('I', intToRoman(1));
console.log('X', intToRoman(10));
console.log('C', intToRoman(100));
console.log('M', intToRoman(1000));
console.log('IV', intToRoman(400));
console.log('VIII', intToRoman(8));