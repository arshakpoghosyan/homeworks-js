let arr = ['user', 'admin', 'admin', 'user', 'admin', 'user', 'user', 'user', 'user', 'admin', 'admin', 'user']
let admins = arr.filter(function(item){
   return item==='admin';
});
alert(admins)