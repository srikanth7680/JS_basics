a = {k:1,k1:""}
console.log(!!a.k, !!a.k1)
console.log(a.hasOwnProperty('k'),a.hasOwnProperty('k1'))
console.log(a.toString())

console.log(Object.keys(a))  /* getting all keys of the objects*/
console.log(Object.values(a))  /* getting all values of the objects*/
console.log(Object.entries(a)) /* getting all keys and values of the objects*/
console.log(JSON.stringify(a)) /* convert object to string*/
console.log(JSON.parse('{"k":1,"k1":""}')) /* convert string  to object*/
console.log("Before delete =",a);
delete a.k1;                      /* deleting the object*/
console.log("After delete =",a);

x = {y:2};
a = {k:1,k2: x};

b = Object.assign({},a);
console.log("Before k changes: ",a,b);
b.k=12
console.log("After k changes: ", a,b); 
/* ES5 approach*/
a = {k:1}
b = {k1:2}
c = Object.assign(a,b)
console.log(c)

a = {k:1}
b = {k1:2}
c = Object.assign({},a,b);
console.log(c);

a = {k:1};
b = Object.create(a);
console.log(b);