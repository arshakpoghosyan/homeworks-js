let arr = [150, 400, 200, 50, 300, 320, 500]
let sum = arr.reduce(function(el, el1){
    return el + el1;
});
alert(sum);