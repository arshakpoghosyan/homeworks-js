let forEach = function(arr,func){
    for (let i = 0; i < arr.length; i++) {
    func(arr[i]);
    }
};
let a = [5, 6, 7, 8, 9];
forEach(a, function(val){
alert(val%2==0);
});