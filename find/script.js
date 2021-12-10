function find(array, func) {
    for(let i = 0; i < array.length; i++) {
      if (func(array[i])) {
          return array[i];
        }
      }
  }
  
 function even(num) {
      if (num % 2 == 0) {
        return true;
    }
      else
        return false;
    }
  alert(find([1, 2, 3, 4], even));