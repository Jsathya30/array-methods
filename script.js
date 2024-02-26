// Array in-build methods                                                                                                                                                                                                                  
//1. concat(): 
let girls=["stella", "Mary"]
let boys=["William","Robert"]

 const y=girls.concat(boys);
 console.log(y);
 console.log(girls);
 console.log(boys); 
 const student=y.concat(girls,boys);
 console.log(student);
 
 //2. length:
 //-returns the size of the array.starts from 1,2,3...
 //syntax:array name.length
 //eg:
 let animals=["dog","cat","cow","lion"];
 let size=animals.length;
 console.log(size);
 
 //3. pop():- removes the last element from an array
 //syntax:array.pop()
 //eg:
 let birds=["cock","crow","kivi","eagle"];
 let t=birds.pop();
 console.log(t);
 console.log(birds);
 
 //4.push():- Add a new elelment to an array at the end, returns the new array and modifies the existing array
 //syntax:array.push("data")
 //eg:
 let birds1=["cock","crow","kivi","eagle"];
 birds1.push("peacock");
console.log(birds1);

//5.shift():- It removes the frist element from an array
 //syntax:array.shift()
 //eg:
 let pets=["dog","cat","rabbit","elephant"];
 let b=pets.shift();
 console.log(pets);
 console.log(b);
 
 //6.unshift:- Add a new element to an array at the beginning
 //syntax:array.unshift("data")
 //eg:
 let pets1=["dog","cat","rabbit","elephant"];
 pets1.unshift("squirrel");
 console.log(pets1);
 
 //7.includes:- It returns the boolean vlaue(true/false)
 //syntax:array.includes("data")
 //eg:
 let pets2=["dog","cat","rabbit","elephant"]; 
 let check=pets2.includes("eagle");
 console.log(check);
 
 //8. indexof:- It returns the position of an array element(returns index value)
 //syntax:array.indexOf("data")
 //eg:
 let pet3=["dog","cat","rabbit","elephant"]; 
 let index=pet3.indexOf("rabbit");
 console.log(index);
 
 //9.join:- Joins all array elements into a String
 //syntax:array.join()
 //eg:
 let pet4=["dog","cat","rabbit","elephant"]; 
 let j=pet4.join("/");
 console.log(j);
 
 //10.splice():- adds a new items to an array. change original array.
 
 //eg:
 let pet5=["dog","cat","rabbit","elephant"]; 
 pet5.splice(2,1,"cow","goat");
 console.log(pet5);
 
 //11.slice():-It slices out a piece of an array and returns into a new array.
 
 //eg:
 let pet6=["dog","cat","rabbit","elephant"];
 let s=pet6.slice(2);
 console.log(s);
 console.log(pet6);
 let s1=pet6.slice(1,2);
 console.log(s1);
 
 