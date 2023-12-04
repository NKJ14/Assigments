/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLowerCase();
  str = str.replace(/[^a-zA-Z0-9]/g, ""); //removes any punctuation marks and spaces
  let rts = Array.from(str).reverse();

  str = Array.from(str);

  for(let i = 0;i<str.length;i++){
    if(str[i] !== rts[i]){
      return false;
    }
  }
  return true;
}

module.exports = isPalindrome;
