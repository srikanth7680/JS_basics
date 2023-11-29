///change function scope
// 1. Bind - change function scope return a new function with updated scope
   // Ex: 
        //  1.1 const newGetName = get_name.bind(obj);newGetName();
        //  1.2 const newGetName_1 = get_name.bind(obj. 'Hello'); newGetName_1("Mr.");
// 2. call - execute a function with the new scope  with "," separated arguments
  //  Ex: get_name.call(obj,"hello","Mr.")
// 3. apply - execute a function with the new scope  with array of arguments
  // Ex: get_name.apply(obj,['Hello','Mr.'])

const get_name = function(greetings,salutation)
{
  return greetings+ " "+salutation + " " +this.name;
}
get_name();
const obj = {name:'Jordon'}
get_name.call(obj,"hello","Mr.")

