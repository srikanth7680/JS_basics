///---Timeout means single time
var x = 10
setTimeout(function() {
  console.log(x);
},2*1000)

//////---Interval means repitation 
var y = 10;
setInterval(function() {
  console.log("inside x=",y++);
},2*1000)
console.log("outside x=",y);

///Destroy the timer 
var y = 10;
const interval = setInterval(function() {
  console.log("inside y=",y++);
  if(y>15)
  {
    clearInterval(interval)
  }
},2*1000)
console.log("outside y=",y);
