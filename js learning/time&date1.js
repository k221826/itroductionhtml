var today = new Date();
var day = today.getDay();
var daylist=['Sunday','Monday','Tuesday','Wenesday','Thursday','Fryday','Saturday',]
var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();
var prepand = (hour >= 12) ? " PM " : " AM ";
hour = (hour >= 12) ? hour-12 : hour;
console.log(`Today is: ${daylist[day]}.`);
console.log(`Current Time: ${hour}${prepand}:${minute}:${second}`)