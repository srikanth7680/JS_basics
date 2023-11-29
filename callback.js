const checkEvenOdd = function(n)
{
  return n%2 == 0 ? 'Even':'Odd';
}

function numberMapper(fn)
{
  const array = [2,3,4,5];
  const map ={};
  for(let n of array)
  {
    map[n] = fn(n)
  }
  return map;
}
numberMapper(checkEvenOdd)

///
const lowercase = function(str)
{
  return str.toLowerCase();
}

const capitalize = function(str)
{
  return str[0].toLowerCase() + str.slice(1);
}
const pluralize = function(str)
{
  return '${str}s'
}
function manipulate(str,fn)
{
  return fn(str);
}
console.log(manipulate("i love javascript",lowercase))
console.log(manipulate("i love javascript",pluralize))
console.log(manipulate("i love javascript",capitalize))



