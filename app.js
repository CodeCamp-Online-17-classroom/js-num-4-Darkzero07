let num;
function fixNum(num) {
  let txt = num.toString();
  if (txt.indexOf(".") < 0) {
    return num.toFixed(2);
  } else {
    let number = parseFloat(txt.slice(0, txt.indexOf(".") + 3));
    return number.toFixed(2);
  }
}

console.log(fixNum(10));
console.log(fixNum(5.1));
console.log(fixNum(3.1289));
console.log(fixNum(7.88888));
