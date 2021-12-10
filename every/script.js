function every(array, func) {
    for(let i = 0; i < array.length; i++) {
      if (func(array[i])) {
          return true;
        }
      else
          return false;
      }
  }
  
  function even(num) {
      if (num % 2 == 0 && num % 2 !=1) {
        return true;
    }
      else
        return false;
    }
  alert(every([1, 2, 6, 8], even));