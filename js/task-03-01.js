// Задача 3 - 1
// CRUD для свойств объекта
// С - create(создать)
// R - read(читать)
// U - update(обновить)
// D - delete (удалить)
// Напиши скрипт, который, для объекта user, последовательно:

// 1 добавляет поле 'mood' со значением 'happy'
// 2 добавляет поле 'full time' со значением true
// 3 заменяет значение 'hobby' на 'skydiving'
// 4 заменяет значение 'premium' на false
// 5 в переменную message записывает содержимое объекта user:
// 5.1 для переменной keys присваивает массив свойств объекта, используя метод Object.keys()
// 5.2 с помощью оператора for...of
// 5.3 в формате ключ: значение
// 5.4 c переносом строки('\n')

let message = "";
const user = {
  age: 20,
  hobby: "html",
  name: "Mango",
  premium: true,
};

//Write code under this line
console.log("//Оригинальный объект//");
console.log(user);
console.table(user);

// 1 добавляет поле 'mood' со значением 'happy'
user.mood = "happy";

console.table("");
console.table("//1 добавляет поле 'mood' со значением 'happy'//");
console.table(user);

// 2 добавляет поле 'full time' со значением true
user["full time"] = true;

console.table("");
console.table("//2 добавляет поле 'full time' со значением true//");
console.table(user);

// 3 заменяет значение 'hobby' на 'skydiving'
user.hobby = "skydiving";

console.table("");
console.table("// 3 заменяет значение 'hobby' на 'skydiving'//");
console.table(user);

// 4 заменяет значение 'premium' на false
user.premium = false;

console.table("");
console.table("// 4 заменяет значение 'premium' на false//");
console.table(user);

// 5 в переменную message записывает содержимое объекта user:
// 5.1 для переменной keys присваивает массив свойств объекта, используя метод Object.keys()
// 5.2 с помощью оператора for...of
// 5.3 в формате ключ: значение
// 5.4 c переносом строки('\n')

const keys = Object.keys(user);
// Write code under this line
console.table("");
console.table("// 5 в переменную message записывает содержимое объекта user//");
console.log(keys);

for (let key of keys) {
  message += `${key}: ${user[key]}\n`;
}

console.log(message);

//console.log(message);
/*
'age : 20
hobby : skydiving
name : Mango
premium : false
mood : happy
"full time" : true
' */
