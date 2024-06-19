let number = 83;
let flag = true;
let i;
for( i = 2; i<number; i++ ) {
    let rem=number%i;
    if(rem==0) {
        flag=false;
        break;
    }
}
if(flag==true) {
    console.log("prime hai");
}
else if(flag==false){
    console.log("prime nahi hai")
}
