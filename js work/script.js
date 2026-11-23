const MyName = "Максим";
const age = 18;
const city = "Bishkek";
const fullName = MyName + " City: " + city;

//Первое задание

const student = "false";
const isCorrect = student === "true";

console.log(fullName);
console.log("");


console.log(typeof MyName);
console.log(typeof age);
console.log(typeof city);
console.log(isCorrect);

//Второе задание

const a = 98;
const b = 12;

console.log(`Сложение: ${a + b}`);
console.log(`Вычитание: ${a - b}`);
console.log(`Умножение: ${a * b}`);
console.log(`Деление: ${a / b}`);

// 3 задание

const product = "Мышка";
const price = 800;
const quantity = 3;
const delivery = 200;

const total = price * quantity;
const dost = delivery + 0;
const all = total + dost;

console.log(`Стоимость: ${total} сом`);
console.log(`Доставка: ${dost}`)
console.log(`Итого: ${all}`)

//4 задание

const Age = 17;
const isRegister = true;

console.log(Age >= 18 || isRegister);
console.log(Age >= 18);
console.log(Age == "17");
console.log(Age === "17")



const score = 85;
const attendance = 90;
const isBlocked = false;

console.log(score <= attendance || isBlocked);
console.log(isBlocked <= attendance);
console.log(`Все разрешено: ${true}`);

