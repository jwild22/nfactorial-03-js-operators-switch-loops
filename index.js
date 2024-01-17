// Создайте объект user. Узнайте у user-a его имя, возраст, является ли он мужчиной или женщиной. Запишите все в объект. И выведите в консоли.
let user = {
  name: prompt("What's your name?"),
  age: prompt("What's your age?"),
  gender: prompt('What is your gender?'),
};

console.log(user);

// Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert.
if (user.age < 18) {
  alert("You're too young!");
} else {
  alert('You are old enough!');
}

// Перепишите этот блок кода с использованием оператора switch.
let a = +prompt('a?', '');
console.log(a); // string
a = +a;
console.log(a); // number

switch (a) {
  case 0:
    alert(0);
    break;
  case 1:
    alert(1);
    break;
  case 2 || 3:
    alert('2,3');
    break;
  default:
    break;
}

// Посчитайте сумму всех четных чисел в промежутке 1-100. Выведите в консоль.
let sum = 0;
for (let i = 2; i <= 100; i += 2) {
  sum += i;
}
console.log(sum);

// Перепишите цикл for на while.
let i = 0;
while (i < 3) {
  alert(`number ${i}!`);
  i++;
}
