var today = new Date();
var day = today.getDate();
var month= today.getMonth()+1;
var year = today.getUTCFullYear();


month= (month < 10) ? '0'+month : month;

console.log(`${day}-${month}-${year}`);
console.log(`${month}-${day}-${year}`);
console.log(`${day}-${month}-${year}`);
