let user={
    name:"Vaon",
    age: 18,
    email:"Sithyvaon.chim@Student.cadt.edu.kh"

};

console.log("email" in user);
for (const key in user){
    console.log(key,user[key]);
}