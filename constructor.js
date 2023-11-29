function person()
{
  this.name = "John"
  var x = 10
}
const p1 = new person()
console.log(p1)


//
function person()
{
  this.name = "John"
  this.name = function() {
    return this.name;
  }
  
}
const p2 = new person()
console.log(p2)
console.log(p2.hasOwnProperty('name'))

///
//window.name = "srikanth";
function person()
{
  this.name = "john"
  this.getName = function()
  {
    return this.name
  }
  this.getArrowName = () => this.name ///Arrow Function
}
const getYourName = p1.getName
console.log(getYourName)
console.log(getYourName())
console.log(p1.getArrowName())//john
const getYourArrowName = p1.getArrowName
console.log(getYourArrowName())//john

//
const p = {
  name1:"john",
  getName: function(){
    return this.name
  },
  getArrowName: () => this.name
}
console.log(p);
console.log(p.getArrowName());