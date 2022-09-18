function rot13(str) {
  let result = "";
  for (let i = 0; i < str.length; i++){
    if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90){
      if (str.charCodeAt(i) + 13 > 90){
        result += String.fromCharCode(str.charCodeAt(i)-13);
      }
      else {
        result += String.fromCharCode(str.charCodeAt(i)+13);
      }
    }
    else {
      result += str[i];
    }
  }
  return result;
}
// Change the inputs below to test
console.log(rot13("SERR PBQR PNZC"));