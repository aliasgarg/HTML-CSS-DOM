// // // let id=15438;
// // // let anotherid = id;
// // // anotherid = 456321
// // // console.log(anotherid)
// // // console.log(id)


// // let userone = {
// //     email: "user@gamil.com"
    
// // }

// // let userTwo = userone

// // userTwo.email = "usertwo@gmail.com";


// // console.log(userone.email);
// // console.log(userTwo.email);


// // let myName = "vishal";
// // let age = 22
// // console.log(`my name is ${myName} and my age is ${age}`); 



// // console.log(gameName)
// // console.log(typeof gameName)
// // console.log(gameName[6])
// // console.log(gameName.__proto__)

// // console.log(gameName.length)
// // console.log(gameName.toUpperCase())
// // console.log(gameName.toLowerCase())
// // console.log(gameName.charAt(4))
// // console.log(gameName.indexOf('a'))
// // const gameName = new String("vishal-garg")
// // // const newString = gameName.substring(-2, 8);
// // // console.log(newString)
// // const anotherString = gameName.slice(-1,6);
// // console.log(anotherString)
// // const newStringOne = "         vishal      garg       ";
// // // console.log(newStringOne);
// // // console.log(newStringOne.trim())
// // console.log(gameName.split('-'))
// // let number =21784.25545152845
// // console.log(Math.round(number))

// let myDate = new Date()
// console.log(myDate.toJSON())


// let myCreateDate = new Date("2024,06,11");
// console.log(myCreateDate.toDateString())

// let myTimeStamp = Date.now()
// console.log(Math.floor(myTimeStamp/1000) )


// let myArr = [1,85,9,32,7,2,3,85,12,32,85,3,1,45,6]
// console.log(myArr[7])
// myArr.pop()
// myArr.shift()
// console.log(myArr.indexOf(3))
// let newArr = myArr.join()
// // console.log(myArr)
// console.log(newArr)

// let myArr = [1,85,9,32,7,2,3,85,12,32,85,3,1,45,6]

// console.log("A ", myArr)

// let myn1 = myArr.slice(3 , 9 );
// console.log(myn1)
// console.log("B ", myArr )

// let myn2 = myArr.splice(3 , 4);
// console.log(myn2)
// console.log("C ", myArr );


//  let arr1 = ["a","b", "c", ["d", "e","f"], 1, 2, 2, 3, ["vishal"] ]

//  let anotherArr = arr1.concat(arr2);
//  console.log(anotherArr)

// let arr3 = arr1.flat(Infinity)
// console.log(arr3)

// console.log(Array.isArray(1,2,2,4))

// let score1 = [100] ;

// let score2 = [200] ;

// let score3 = [300] ;

// console.log(Array.of(score1 ,score2 ,score3));

// let score4 = score1.concat(score2, score3);

// console.log(score4);

// let score5 = [...score1, ...score2, ...score3 ];

// console.log(score5) 
// console.log(user["full name"])

// console.log(Array.from("7542780"))
// console.log(user["full name"])

// console.log(Array.from("7542780"))


// let my1 = [
//     {myObj1 : {
//         id: "v@gmail.com",
//         name: "vishal",
//         age: 22
//     }
// },
//   { myObj2 : {
//     id: "h@gmail.com",
//     name: "himanshu",
//     age: 25
// }
//   }

// ]
// console.log(my1[0].myObj1.age)

// let my1 = [
//     {myObj1 : {
//         id: "v@gmail.com",
//         name: "vishal",
//         age: 22
//     }
// },
//   { myObj2 : {
//     id: "h@gmail.com",
//     name: "himanshu",
//     age: 25
// }
//   }

// ]
// console.log(my1[0].myObj1.age)



// let user = {

//     name: "vishal",

//     age: 22,

//     email: "vishhalgarg@gmail.com",

//     location: "palwal",

//     "full name": "vishal garg",

// }

// let {location: l } = user
// console.log(l)

// function addTwoNumbers (nums1, nums2) {
//     let result = nums1 + nums2
//     return result
//     // console.log(nums1 + nums2);

// }
// let result = addTwoNumbers(5,3)
// console.log("Result", result)


// let myStr = ["a", "b", "c", "d", "e", "f", "g"]

// if(myStr[3]=="d"){
//     console.log("hai")
// }
// else{
//     console.log("nahi hai")
// }