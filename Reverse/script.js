function reverseNumber() {
      const number = document.getElementById("number")
      num = number.value
      num = num + "";
      var result = num.split("").reverse().join("");
      document.getElementById("result").innerHTML = result;
  }