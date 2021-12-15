function every(array, func) {
  for (let i = 0; i < array.length; i++) {    
    if (!func(array[i])) {
      return false;
    } else if ((i == array.length-1) && func(array[i])) {
      return true;
    }
  }
}

function even(num) {
  if (num % 2 != 0) {
    return false;
  } else {
    return true;
  }
}
let arr = [2, 1, 4, 8];
alert(every(arr, even));