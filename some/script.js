function some(array, func) {
  for (let i = 0; i < array.length; i++) {    
    if (func(array[i])) {
      return true;
    } else if ((i == array.length-1) && (!func(array[i]))) {
      return false;
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
let arr = [8, 5, 3, 2];
alert(some(arr, even));