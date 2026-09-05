let student =[
    {name: "Kil", grade : 80},
    {name: "Can", grade : 85},
    {name: "Hik", grade : 60},
    {name: "Mil", grade : 55}
];
const names  =student.map(student=>student.name);
console.log(names);
const passStudents = student.filter(student => student.grade >= 80);
console.log(passStudents);