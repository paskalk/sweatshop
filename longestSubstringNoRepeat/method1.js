var lengthOfLongestSubstring = function(s) {
    let count = 1;
    let maximum = 0;
    
    if(s.length === 1){
        maximum = 1;
    }
    let i = 1;
    while (i < s.length){
        console.log(s[i]);
        count =  count + 1;
        console.log(count);
        i++;
        
        if(s[i] === s[i-1]){
            count = 0;
            continue;
        }
        
        if (count > maximum){
            maximum = count;
        }
        
    }
    
    return maximum;
};