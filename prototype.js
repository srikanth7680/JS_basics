// //when to add property  / method at prototype level ?
// ---- If we want the property  / method create only once. And use by all other future instances 
// ex:
// function person(){
//   this.name = "John";
//   this.getName = function() {
//     return this.name;
//   }
// }
// p1 = new person(); // {name: "John",getName: f}
// Note: :"name" is an own property.But "getName" is attached to prototype level
// p1.getName(); //execute properly level method

// //When to add property / method at instance level ??
// ----If we want the property  / method create only  multiple times 

// Ex:  
// function person(){
//   this.name = "John";
//   this.getName = function(){
//     return this.name;
//   }
// }

// p1 = new person();//{name:"john",getName: f}
// NOte: "name" and "getName" is an own property
// p1.getName(); // execute the instance level method

//IF YOU WANT TO CREATE A OWN FUNCTION

// Array.prototype.myReduce = function (callback,intialization) {
//   let sum = intialValue;
//   const thisArray = this;
//   for (let value of thisArray){
//     sum = callback(sum, value)
//   }
//   return sum;
// }

// f ( callback,intialization){
//   let sum = intialValue;
//   const thisArray = this;
//   for(let value of thisArray){
//     sum = callback(sum,value)
//   }
//   return sum;
// }

// a = new Array(4,5,6)

// a.myReduce((acc,v)=> acc+v,0)