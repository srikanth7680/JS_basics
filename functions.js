/*var x = 10;
function getx(x)
{
  return Window.x+2;
}
console.log(getx(2));

function add(){
  console.log("arguments = ",args)
  console.log("Types of Arguments")
  var args = Array.from(arguments)
  console.log("args = ",args)
}
add(2,3,5)*/

function add(x)
{
  return function(y)
  {
    return x+y;
  }
}
console.log(add(2,3));
