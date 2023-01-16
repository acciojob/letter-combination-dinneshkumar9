function letterCombinations(input_digit) {
  //Complete the function
	if (!input_digit) return [];
  
    const digitToLetters = {
        '2': ['a', 'b', 'c'],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'],
        '9': ['w', 'x', 'y', 'z'],
        '0': ['0'],
        '1': ['1']
    };
  
    let combinations = [];
  
    function backtrack(currentCombination, nextDigits) {
        if (nextDigits.length === 0) {
            combinations.push(currentCombination);
            return;
        }
      
        const letters = digitToLetters[nextDigits[0]];
        for (let i = 0; i < letters.length; i++) {
            backtrack(currentCombination + letters[i], nextDigits.slice(1));
        }
    }
  
    backtrack('', input_digit);
    return combinations.sort();

}

module.exports = letterCombinations;
