function some(array, func) {
    for(let i = 0; i < array.length; i++) {
      if (func(array[i])) {
          return true;
        }
      else{
          return false;
      }      
    }
  }
  
  function even(num) {
      if (num % 2 == 1 && num % 2 != 0){
        return false;
      }
      else{
        return true;
      }
  }
      
  alert(some([5, 9, 7, 1], even));