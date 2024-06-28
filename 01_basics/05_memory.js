//stack(primitive copy ) heap(non primitive referenced)

let myYTName="jbdotcom"
let anothername=myYTName
anothername="chaiaurcode"

console.log(myYTName);
console.log(anothername);

//objects ,non primitive inside heaps

let userOne={
    email:"user@google.com" ,
    upi:"user@ybl"
}

let userTwo=userOne
userTwo.email="hitesh@google.com"
console.log(userOne.email);
console.log(userTwo.email);