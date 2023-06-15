/* Javascript */
let a = 40;
let b = 20;

let aux = a;
a = b;
b = aux;

console.log(a);
console.log(b);

/* Destructuring */
let x = 20;
let y = 40;
[x, y] = [y, x];

console.log(x);
console.log(y);

/* Javascript */
let person = {
    name: 'John',
    lastname: 'Doe',
    saludo: function () { }
}

console.log(person.name);
console.log(person["name"]);
console.log(person.saludo());
/* Destructuring */
let { name, lastname } = person;
console.log(name);
console.log(lastname);


let nombres = ["Hugo", "Paco", "Luis"];
let [n1, n2, n3] = nombres; // Hugo, Paco, Luis
let [, , m3] = nombres; // Luis
console.log(n1);
console.log(m3);

let students = [
    { name: 'Hugo', room: 1 },
    { name: 'Donald', room: 2 },
    { name: 'Mickey', room: 2 },
    { name: 'Paco', room: 3 },
    { name: 'Luis', room: 5 },
]

/* Destructuring */
students.forEach(({ name, room }) => {
    console.log(`Student: ${name}, Room: ${room}`);
})

students.forEach((student) => {
    console.log(`Student: ${student.name}, Room: ${student.room}`);
})

function registro({ name, lastname, address, age, phone }) {

}

let [,,{ room}] = students;
console.log(room);

/* Spread Operator o Rest */
function calcularPromedio(name, clase, ...notas){
    let promedio = notas.reduce((total, nota) => total + nota,0) / notas.length;
    return `${name}, de la ${clase} tiene un promedio de: ${promedio} puntos.`;
}

console.log(calcularPromedio('John Doe', 'Clase 2-B', 12, 34, 10, 30, 30, 20));
console.log(calcularPromedio('Jane Doe', 'Clase 1-C', 20, 14, 30, 10, 18));


let namesStudents = students.reduce((names, {name}) => names.concat({name}), [])
console.log(namesStudents);
