let lengthOfLastWord = function(s) {
    let count = 0;
    // Start from the last character
    for (let i = s.length - 1; i >= 0; i--) {
        // Ignore spaces at the end
        if (s[i] === ' ') {
            if (count > 0) {
                break;
            }
        } 
        else {
            count++;
        }
    }
    return count;
};