// filter map reduce

// let arr=[1,2,3,4,5,6,7,8,9,10]
// let newArr=[]
// for(let i=0; i<arr.length; i++ ){
//     let rem=arr[i]%2;
//     if(rem===0){
//         // console.log(`even ${arr[i]}`)
//         newArr.push(arr[i])
//     }
// }

// console.log(newArr)
// let narr= arr.filter((val)=>{
//     return true
// })

// console.log(narr)

// let mystr = ["vishal","i","efhd",";djkfhwe","defhv","w"]

// let str = mystr.filter((val1) => {
//     return val1.length>=4

// }  )
// console.log(str)



let arr=[
    { name: "Angelina Jolie", member: true },
    { name: "Eric Jones", member: false },
    { name: "Paris Hilton", member: true },
    { name: "Kayne West", member: false },
    { name: "Bob Ziroll", member: true }
]
let a=[]
for(let i=0; i<arr.length; i++){
    let ans= arr[i].member==true
    if(ans==true){
        a.push(arr[i].name)
    }
}
console.log(a)









