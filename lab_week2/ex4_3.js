//for of
const fruits = ["apple", "banana", "mango", "durian"];
for(const c of fruits){
    console.log(c);
}
//for in
const student = { name: "Louis", age: 16, major: "Computer Science" };
for(const key in student){
    console.log(key,student[key]);
}