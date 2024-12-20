// //strings 
//         //0123456789 
// let str = " Javascript "
//            //-4-3-2-1
//  let strn = " Js is good for development Js"

//  console.log(str.length)
//  console.log(str.charAt(3))
//  console.log(str.charCodeAt(3))
//  console.log(str.toLowerCase())
//  console.log(str.toUpperCase())
//  console.log(str.concat(" is king"))
//  console.log(str.trim())
//  console.log(strn.includes("Good"))
//  console.log(strn.replaceAll("Js","C++"))
//  console.log(strn.split(" "))
//  console.log(strn.slice(0,4))

//  //arr

//  var arr =[1,2,3,4,5]
//  const brr = [...arr]
//  //brr =[1,4,56,7]
//  brr.pop()
//  brr.push(5,6)
//  brr.unshift(0)
//  brr.shift()
//  console.log(brr)
//  console.log(arr) 

//  console.log(arr.toString())
//  console.log(arr.join(" "))
//  console.log(arr.concat(brr))

 //splice and slice 
 
//  console.log(arr.slice(0,2))
//  console.log(arr)

// let count =0
// arr.forEach((n)=>{
//     count++
// })
    
// console.log(count)


// let doubled = arr.map((n)=>{
//     return n*n;
// })
// console.log(doubled)

// let sum = arr.reduce((total,curr)=>{
//     return total+curr;
// })
// console.log(sum)

// console.log( arr.filter((n)=>n>2))

// const person = {
//     "FirstName":"Suyash",
//     "LastName":"Gupta",
//     "Phno":7080249355,
//     "SayHello":function(){console.log("Hii i am suyash")},
//     "eat":()=>{console.log("I like to eat indian food")}
// }
//  console.log(person.FirstName)
//  for (var key in person){
//     // console.log(person[key])
//     //console.log(key + person[key])
//     console.log(`${key} : ${person[key]}`)
//  }

 //function statment
//  a()

//  function a(){
//     console.log(" hiii i am a");
//  }


 //function Exp
//  //b()

//  var b = function (){
//     console.log("b")
//  }
//  //b()

//  //function(){}
//  //xyz()
//  var avg = function(param1,param2){
//     let sum =  param1+param2
//     console.log(sum) 
//     return function(){
//         return sum/2
//       }
//  }

 //console.log(avg(4)(10))

 //callbacks
  //fetch
 //promises

 //async await 
 

//  console.log("hiiii1")
//  setTimeout(function(){
//     console.log("Hiii2")
//  },5000)
//  console.log("Hiii3")





 //fetch

//  var ans  = fetch(`https://randomuser.me/api/`)
//  .then(response=>response.json())
//  .then(data =>console.log(data))
//  .catch(err => console.log(err))


 //promises 

//  var promise = new Promise((resolve , reject)=>{
//     if(false){
//     resolve("Success")
//     }else{
//        reject("err")
//     }

//  })

//  promise.then((result)=>{
//     console.log("bro it is here ",result)
//  }).catch((err)=>{
//     console.log("bro err happened",err)
//  })
// console.log(promise)


//async await 

async function user(){
    var ans  =await fetch(`https://randomuser.me/api/`)
    let data = await ans.json()
    console.log(data)
  
}

user()