// Задача 3 - 3
// Поиск наибольшего значения среди свойств объекта
// Напиши функцию findBestEmployee(employees),
//     которая принимает объект сотрудников и возвращает имя самого продуктивного(который выполнил больше всех задач).
// Сотрудники и кол - во выполненных задач содержатся как свойства объекта в формате "имя": "кол-во задач".

const findBestEmployee = function (employees) {
  "use strict";
  // Write code under this line

  // выводим на экран вводные данные
  console.log(employees);
  console.table(employees);
  console.log("");

  // присваем переменной productivity объект значений без свойств
  const productivity = Object.values(employees);

  // выводим на экран вводные данные
  console.log(productivity);
  console.log("");

  // выводим на экран наибольшее значение
  const maxValues = Math.max(...productivity);
  console.log("максимальное значение продуктивности");
  console.log(maxValues);
  console.log("");

  // присваем переменной stuff объект свойств без значений
  const stuff = Object.keys(employees);

  // создаем пустую переменную bestEmployee
  let bestEmployee = "";

  // присваем переменной bestEmployee имя сотрудника с наибольшим значением
  for (const key of stuff) {
    console.log(key, " - ", employees[key]);
    if (employees[key] === maxValues) {
      bestEmployee = key;
    }
  }

  // выводим результат
  console.log("");
  console.log("Наиболее продуктивный сотрудник");
  return bestEmployee;
};

//
//
// Краткая запись
// const findBestEmployee = function (employees) {
//   "use strict";
//   // Write code under this line

//   console.table(employees);
//   console.log("");

//   const productivity = Object.values(employees);
//   const maxValues = Math.max(...productivity);

//   const stuff = Object.keys(employees);

//   let bestEmployee = "";

//   for (const key of stuff) {
//     if (employees[key] === maxValues) {
//       bestEmployee = key;
//     }
//   }
//   return bestEmployee;
// };

// Объекты и ожидаемый результат
const developers = {
  ann: 29,
  david: 35,
  helen: 1,
  lorence: 99,
};
console.log(findBestEmployee(developers));
// 'lorence'

const supports = {
  poly: 12,
  mango: 17,
  ajax: 4,
};
//console.log(findBestEmployee(supports));
// 'mango'

const sellers = {
  lux: 147,
  david: 21,
  kiwi: 19,
  chelsy: 38,
};
//console.log(findBestEmployee(sellers));
// 'lux'
