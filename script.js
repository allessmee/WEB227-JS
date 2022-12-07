"use strict";
// console.log("Третий скрипт");

/* Блочный комментарий */

// let message; // let, const, var
// message = "Hello";
// console.log(message);

// let a = 10; // инициализация
// a = 3.5;
// console.log(a);

// let b, c;
// b = "Строка"

// a = 5;
// console.log(a);

// let name_New$ = '';

// const week = 7;
// week = 9;

// let a = 10;
// console.log(a);
// console.log(typeof a);
// console.log(typeof (a));
// a = 3.5;
// console.log(a);
// console.log(typeof (a));

// let str1 = "Двойные кавычки";
// let str2 = 'Одинарные кавычки';
// let str3 = `Обратные кавычки ${str1}`;

// console.log(str1);
// console.log(str2);
// console.log(str3);

// let firstName = "Sergey";
// alert(`Hello, ${firstName}`);

// let name1 = prompt("Имя:")
// let surname = prompt("Фамилия:");
// let city = prompt("Город проживания:");
// let age = prompt("Возраст:");
//  alert("***Данные для входа***\nИмя: " + name1 + "\nФамилия:"+ surname +"\nГород проживания:" + city +"\nВозраст:" + age)
//  let alright = confirm("Всё верно?");
//  if (alright){
//     alert("Благодарим за предоставленную информацию!")
//  }
//  else{

//  }

//+ "\nГород проживания" + sity +"\nВозраст:" + age);
// let a = 365;
// let b = "Земля";
// let c = `7 млрд.`;
// let d = "Солнца";
// alert(`Мы живем на планете ${b} она делает один оборот вокруг ${d} за ${a} дней. Население нашей планеты составляет примерно ${c} человек`)

// boolean - логический тип данных

// let a = true;
// console.log(a)
// let b = false;
// console.log(b);
// console.log(typeof (b));

// let res = confirm("Знаете HTML?");
// // alert(res);
// if (res) {
//     alert("Пора учить JavaScript")
// }
// else {
//     alert("Нужно выучить!");
// }

// let st1 = "Hello";
// let st2 = "World";
// console.log(st1 + " " + st2); // Конкатенация строк

// let c = 23;
// let d = "6";
// console.log(c + d);

// let login = prompt("Login", "admin");
// let password = prompt("Password","123456");
// alert("***Данные для входа***\nВаш логин: " + login + "\nВаш пароль:"+ password);

// alert("6 - 2 = " + ("6" - "2"));

// let a = parseInt(prompt("Введите первое число"));
// let b = +prompt("Введите второе число");
// // console.log(typeof(a));
// alert("Сумма:" + (a + b));

// console.log(parseInt("21.84"));
// console.log(parseFloat("21.84123"));
// console.log(parseFloat("21.84123").toFixed(2));
// console.log(Number("21.84"));
// console.log(+"21.84");
// console.log(+true);
// console.log(+false);

// let a = ("Введите число")
// alert("Квадрат числа:")

// let a1 = parseInt(prompt("Любое число: ", 2));

// alert("Квадрат: " + a1 ** 2 + "\nКуб: " + a1 ** 3 + "\nВ четвёртой: " + a1 ** 4);

// let num = +prompt("Введите стоимость покупки:");
// if(num <= 499){
//     alert("Без скидки:(")
// }
// else if(num <= 999){
//     alert("Ваша скидка: 3%")
// }
// else if(num >= 1000){
//     alert("Ваша скидка: 5%")
// }
// alert("Cтоимость покупки: " + num + "\nCкидка: " + (num <= 999))

// let num = +prompt("Введите пятизначное число:", "39671");
// let n = num;
// let a, b, c, d, e;
// a = num % 10;
// console.log(a);
// num = parseInt(num / 10);
// console.log(num);
// b = num % 10;
// console.log(b);
// num = parseInt(num / 10);
// c = num % 10;
// num = parseInt(num / 10);
// console.log(c);
// d = num % 10;
// num = parseInt(num / 10);
// console.log(d);
// e = num % 10;
// num = parseInt(num / 10);
// console.log(e);

// alert("Произведение цифр " + n + ": " + a*b*c*d*e + "\nСреднее арифметическое: " + (a+b+c+d+e ))/5;


// let proizv = a * b * c * d * e;

// let averange = (a + b + c + d + e) / 5

// alert("Произведение цифр " + n + ": " + proizv + "\nСреднее арифметическое: " + averange);

// let a = 0, b = 0;
// ++a;
// console.log(a);
// b++;
// console.log(b);


// let a = 0, b = 0;
// let c = a++;
// let d = ++b;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

// let a = 1;
// let b = a++;
// console.log(b);
// let c = b + 5 + a; //2 + 5 + 2
// console.log(c); // 9


//  let sum = +prompt("Введите 1 число: ", 5);
//  console.log(sum);
//  sum += +prompt("Введите 2 число: ", 4);
//  console.log(sum);
//  sum += +prompt("Введите 3 число: ", 6);
//  console.log(sum);

// console.log(5 > 3);
// console.log(5 < 3);
// console.log(5 >= 3);
// console.log(5 <= 5);
// console.log(5 == 5);
// console.log(5 != 5);
// console.log(5 === '5');
// console.log(5 !== '5');

// (7 > 3) ? alert("7") : alert("3")

// let ch = +prompt("Угадайте число от 1 до 10");
// // ch == 7 ? alert("Угадали!") : alert("Не угадали!");
// let num = 7;
// ch == num ? alert("Угадали!") : ch < num ? alert("Загаданное число больше!") : alert("Загаданное число меньше!")

// Операторы логического ветвления
/*
if(условие){
    истина(true)
}
else{
    ложь(false)
}
*/
// if(3 > 7){
//     alert("7")
// }
// else{
//     alert("3")
// }
// alert(+false);

// False - 0, false, "", null, undefined, NaN

// let a ="строка"
// if(a){
//     alert(true);
// }

// let a = 12;
// let b = 0;
// if(b != 0){
//     let res = a / b;
//     alert("Результат " + res);
// }
// else{
//     alert("Делить на 0 нельзя!")
// }

// let a = 12;
// let b = 6;
// if(a > b){
//     alert(a + ">" + b);
// }
// if(a < b){
//     alert(a + "<" + b);
// }
// if(a = b){
//     alert(a + "==" + b);
// }

// let d = prompt("Введите день недели (цифрами): ");
// if(d == 1){
//     alert("День недели - понедельник");
// }
// else if(d == 2){
//     alert("День недели - вторник");
// }
// else if(d == 3){
//     alert("День недели - среда");
// }
// else if(d == 4){
//     alert("День недели - четверг");
// }
// else if(d == 5){
//     alert("День недели - пятница");
// }
// else if(d == 6){
//     alert("День недели - суббота");
// }
// else if(d == 7){
//     alert("День недели - воскресенье");
// }

// else{
//     alert("Такого дня недели не существует!");
// }

// if(5 == 5 && 5 > 7){
//     console.log("true");
// }
// else{
//     console.log("false")
// }

// let age = prompt("Введите возраст: ")
// if(age < 18 || age > 69){
//     alert("Права не давать")
// }
// else{
//    alert("Вы можете получать права")
// }

// Конструкция выбора Switch
/*
switch(условие){
    case значение_1;
       код;
       break;
    case значение_n;
       код;
       break;
    default:
        код;
}
*/
// let a = +prompt("Введите число:");
// switch(a){
//     case 1:{
//         alert("Код 1");
//     }break;
//     case 2:{
//         alert("Код 2")
//     }break;
//     case 3:{
//         alert("Код 3")
//     }break;
//     default:{
//         alert("Я таких значений не знаю")
//     }
// }
// let a = +prompt("Введите результат '2 + 2':");
// switch(a){
//     case 4:
//         alert("Верно")
//     break;
//     case 3:
//     case 5:
//         alert("Не верно")
//     break;
//     default:
//         alert("Я таких значений не знаю")

// }

// let m = +prompt("Введите номер месяца");
// let n = null;
// switch(m){
//     case 1: n = "Январь"; break;
//     case 2: n = "Февраль"; break;
//     case 3: n = "Март"; break;
//     case 4: n = "Апрель"; break;
//     case 5: n = "Май"; break;
//     case 6: n = "Июнь"; break;
//     case 7: n = "Июль"; break;
//     case 8: n = "Август"; break;
//     case 9: n = "Сентябрь"; break;
//     case 10: n = "Октябрь"; break;
//     case 11: n = "Ноябрь"; break;
//     case 12: n = "Декабрь"; break;
//     default: n = "Неправильный номер месяца";

// }
// alert("Вы ввели: " + n);

// let operator = prompt("Действие: +, -, *, /, %")
// let num1 = parseInt(prompt("Введите первое число: "));
// let num2 = parseInt(prompt("Введите второе число: "));

// switch(operator){
//     case "+":
//         alert("Сумма: " + (num1 + num2));
//         break;
//     case "-":
//         alert("Разность: " + (num1 - num2));
//         break;
//     case "*":
//         alert("Произведение: " +  num1 * num2);
//         break;
//     case "/":
//         alert("Частное: " +  num1 / num2);
//         break;
//     case "%":
//         alert("Остаток от деления: " +  num1 % num2);
//         break;
//         default:{
//             alert("Я таких значений не знаю");
//         }
// }
// document.write("<p>Текст выведен в окно браузера</p>");
// document.write("<p><img src='1.jpg'</p>")

// Циклы
// Цикл do ...while(цикл с постусловием)
/*
do{
 тело цикла;
}while(условие);
*/

// let i = 1;
// do{
//     document.write("Квадрат " + i + " равен " + i**2 + "<br>");
//     i++;
// } while(i < 8);

// Интерация - шаг цикла

// Цикл while(цикл с предусловием)
/*
while(условие){
    тело цикла;
}
*/
// let i = 1;
// while (i <= 20) {
//     if (i % 2) {
//         document.write(i + " ");
//     }
//     i++;

// }


// let i = 10;
// let production = 1;
// do{
//     production *= i;
//     i++;
// }while(i <= 30){
//   if (i % 2 != 0){
//     document.write("Произведение чисел от 1 до 10: " + production);
//   }

// }

// let i = 10;
// let p = 1;
// while (i <= 30) {
//     if (i % 2 != 0)  {
//         p *= i;
//     }
//      i++;
//     }
//  document.write("Произведение нечётных чисел от 10 до 30: " + p + "<br>");

// let start = 10;
// let end = 30;
// let p = 1;
// for(let start; i <= end; i++){
// if(i % 2 != 0){
//   start = i;
//   p *= i;
// }
// console.log(i)
// }

// let i = +prompt("Введите любое количество чисел: ")
// let sum = 0;
// let res;
// while (true){
//   if(i == 0)
//   break;
//   sum += i;
//   i++;
//   console.log(i)
// }
// let start = 10;
// // let start = +prompt();
// let end = 30;
// // let end = +prompt();
// let p = 1;
// for(let start; i <= end; i++){
//     if(i % 2 != 0){
//       start = i;
//       p *= i;
//       console.log(i);

//      document.write("Произведение нечетных чисел в диапазоне от " + start + " до " + end + " = " + i + "<br>");
//     }
//     }




// let start = +prompt("Введите начало диапазона: ");
// let уты = +prompt("Введите конец диапазона: ");
// let end = 10;
// // let i = start;
// let sum = 0;
// while(start <= end){
//     // document.write(i + " ");
//     sum += start;// sum = sum + i;
//     start++;
// }
// document.write("<br>" + sum);

/* for(инициализация_ переменной; проверка_условия; изменение_счетчика){
      тело цикла;
}
*/
// for(let i = 1; i < 6; i++){
//     document.write(i + " ");
// }
// for(let i = 1; i < 6; i++){
//     if(i==3){
//         continue;
//     }
//     if(i==5){
//         break;
//     }
//     document.write(i + " ");
// }

// // let start = 5;
// let start = +prompt();
// // let end = 10;
// let end = +prompt();
// let sum = 0;
// let p = 1;
// for(let i = start; i <= end; i++){
//     if(i % 2 == 0){
//         sum += i;
//     }
//     else{
//         p *= i;
//     }
// }
// document.write("Сумма четных чисел в диапазоне от " + start + " до " + end + " = " + sum + "<br>");
// document.write("Произведение нечетных чисел в диапазоне от " + start + " до " + end + " = " + p + "<br>");

// let i = 1;
// for(;/*i < 6*/;){
//     if(i == 6){
//         break;
//     }
//     document.write(i + " ");
//     i++;
// }

// let ch = +prompt("Введите любое количество чисел: ");
// let num;
// let sum = 0;
// let count = 0;
// let i = 1;
// let res;
// while(res!=0){
//     res = parseInt(ch/i);
//     if(res!=0){
//     i*=10
//     num = res%10
//     sum += num;
//     count++;
//   }
// }
// document.write("Среднее арифметическое: " + (sum / count).toFixed(2) + "<br>");

// let ch = 1234576587;
// let num;
// let sum = 0;
// let p = 1;
// let count = 0;
// for(let i = 1;; i*=10){ //10
//     let res = parseInt(ch/i); //ch = 12345 res = 1234
//     if(res==0){
//         break;
//     }
//     // document.write(); //54321
//     num = res%10
//     sum += num;
//     p *= num;
//     count++;
// }
// document.write("Сумма: " + sum + "<br>");
// document.write("Поизведение: " + p + "<br>");
// document.write("Количество: " + count + "<br>");
// document.write("Среднее: " + (sum / count).toFixed(2) + "<br>");

// for(let i = 0; i < 4; i++){
//     document.write("+++ <br>");
//     for(let j = 0; j <2; j++){
//         document.write("-- <br>")
//     }
// }


// for(let i = 0; i < 4; i++){
//     document.write(i + "<br>");
//     for(let j = 0; j <2; j++){
//         document.write( "&nbsp;&nbsp;&nbsp;&nbsp; => " + j + "<br>")
//     }
// }

/*
<table border='1'>
<tr>
  <td>*</td>
  <td>*</td>
  <td>*</td>
</tr>
<tr>
  <td>*</td>
  <td>*</td>
  <td>*</td>
</tr>
<tr>
  <td>*</td>
  <td>*</td>
  <td>*</td>
</tr>
</table>
*/

// let tr = prompt("Введите количество строк: ")
// let td = prompt("Введите количество столбцов: ")
// let symbol = prompt("Введите символ: ");
// document.write("<table border='1'>")
// for(let i=0; i < tr; + i++){
//     document.write("<tr>")
//     for(let j=0; j < td; j++){
//      document.write("<td>" + symbol + "</td>")
//     }
//     document.write("/<tr>")
// }
// document.write("</table>")


// document.write("<table border='1' align='center' width='300' height='300'>");
// document.write("<tr align='center'>")
// for (let j = 0; j < 11; j++){
//    document.write("<th>" + j + "</th>");
// }
// document.write("/<tr>")
// for (let i = 1; i < 11; + i++) {
//     document.write("<tr align='center'>");
//     document.write("<th>" + i + "</th>")
//     for (let j = 1; j < 11; j++) {
//         if ((i + j) % 2 == 0) {
//             document.write("<td bgcolor='red'>" + i + j + "</td>")
//         }
//         else {
//             document.write("<td bgcolor='yellow'>" + i + j + "</td>")
//         }
//     }
//     document.write("/<tr>")
// }
// document.write("</table>")

// Массивы

// let arr = [2,3,6,7,8,9];
// console.log(arr);
// document.write(arr[0]);

// let arr = [2,3,6,7,8,9]; // масссив на 6 элементов со значениями
// let arr1 = [2]; // массив на 1 элемент со значением 2
// let arr2 = new Array(2,3,6,7,8,9); // масссив на 6 элементов со значениями
// let arr3 = new Array(2); // массив на 2 элемента, но пустой

// console.log(arr);
// console.log(arr1);
// console.log(arr2);
// console.log(arr3);

// let arr = [2,3,6,7,8,9];
// document.write(arr + "<br>")
// document.write(arr.length + "<br>")
// arr.length = 3
// document.write(arr + "<br>")
// arr.length = 6
// document.write(arr + "<br>")
// arr.length = 0
// document.write("Пустой массив" + arr + "<br>")

// length = последний индекс массива + 1
// последний индекс массива + 1 = length - 1

// let arr = [5, 9, -3, -1, 4, -1, 7, 4, -6];
// for (let i = 0; i < arr.length; i++) {
//     document.write(arr[i] + "<br>")
// }

// console.table(arr);


// Заменить все отрицательные значения элементов массива их модулями
// let arr = [5, 9, -3, -1, 4, -1, 7, 4, -6];
// for (let i = 0; i < arr.length; i++) {
//     if(arr[i]<0){
//         arr[i] = arr[i]*(-1);
//     }
//     document.write(arr[i] + "<br>")
// }


// Посчитать в массиве сумму всех отрицательных элементов
// let arr = [5, 9, -3, -1, 4, -8, 7, 4, -6];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     if(arr[i]<0){
//         sum += arr[i];
//         document.write(arr[i] + "<br>");
//     }

// }
// document.write(sum + "<br>");

// let mas = new Array();// let mas = [];
// mas[0] = 15;
// mas[1] = 6;
// mas[2] = 9;
// mas[6] = 10;
// mas[5] = 2;

// document.write(mas + "<br>");
// console.log(mas);

// let mas = new Array(5);
// for(let i=0; i<mas.length; i++){
//     mas[i] = prompt("Введите " + (i+1) + " элемент массива:")
// }
// // document.write(mas + "<br>")
// for(let i=mas.length - 1; i >= 0; i--){
//     document.write(mas[i] + " ");
// }
// document.write(mas + "<br>")
// for(let i=mas.length - 1; i >= 0; i--){
//     document.write(mas[i] + " ");
// }

// let arr = [2,6,7,"Игорь", 1.5, true];
// console.log(arr);

// let mas = [[2, 1, 1,6], [6, 3, 7], [8, 5, 6,8,9]];
// document.write(mas[1][2]);
// console.log(mas);
// console.table(mas);

// let answer;
// answer = prompt("Какую фамилию носил главный герой поэмы А. Твардовского?\n\nA:Муркин\tB:Шоркин\nC:Тёркин\tD:Твардовский")


// let vopros = ["На ноль делить можно?", "Волга впадает в Каспийское море?", "Атосферное давление увеличивается с высотой", "2х2 будет 8", "Дельфин - это рыба", "Мадонна - это настоящее имя певицы", "Первая мировая война началась 1 сентября 1939 года"];
// let prav_otvet = [false, true, false, false,false, false, false];

// let res = new Array();
// let sum = 0;

// for(let i=0; i<vopros.length; i++){
//   let otvet = confirm(vopros[i]);
//   if(otvet == prav_otvet[i]){
//     res[i] = 10;
//     sum += res[i];
//   }
//   else{
//     res[i] = 0;
//   }
// }

// document.write("<table border='1' width='500'>");
// document.write("<tr>")
// document.write("<th>Вопросы</th>")
// document.write("<th>Баллы</th>")
// document.write("</tr>")

// for(let i=0; i<vopros.length; i++){
//   document.write("<tr>")
//   document.write("<td>" + vopros[i] + "</td>")
//   document.write("<td>" + res[i] + "</td>")
//   document.write("</tr>")
// }

// document.write("<tr>")
// document.write("<th>Итого</th>")
// document.write("<th>" + sum + "</th>")
// document.write("</tr>")
// document.write("</table>")

// let text1 = document.getElementById("text_1");
// console.log(text1);
// console.log(text1.textContent);

// text1.textContent = "Новое <b>значение</b>";

// let text2 = document.getElementById("text_2");
// text2.innerHTML = "Новое <b>содержимое</b>";

// let res = +prompt("Выберите изображение", "1-собака, 2-кот, 3-птица, 4-рыба");

// document.write("<div id='image'></div>");
// let img = document.getElementById("image");

// switch(res){
//   case 1:
//     img.innerHTML = "<img src='img/dog.jpg'>";
//     break;
//   case 2:
//     img.innerHTML = "<img src='img/cat.jpg'>";
//     break;
//   case 3:
//     img.innerHTML = "<img src='img/bird.jpeg'>";
//     break;
//   case 4:
//     img.innerHTML = "<img src='img/fish.jpeg'>";
//     break;
//     default:
//       alert("Такого изображения нет");
// }

// let tag = document.getElementsByTagName("p")[2];
// console.log(tag);
// tag.innerHTML = "Hello tag";
// tag.style.color = "blue";
// tag.style.fontWeight = 'bold';
// tag.style.background = 'silver';
// tag.style.padding = "10px 20px";
// // list-style-type => listStyleType

// tag.id = 'test';
// tag.className = 'x';

// let q = document.getElementsByClassName('a');
// console.log(q);
// q[1].style.color = "red";

// document.write("<div id=divSample class=resetFont></div>")
// let div1 = document.getElementById('divSample')
// divSample.innerHTML = "Дюбель — конструктивный элемент, который используется для укрепления винта или предмета на стене, на потолке или на полу в помещении или под открытым небом в различных материалах (бетон, кирпич и прочее). Сам дюбель удерживается в конструкции при помощи сил трения. С некоторого времени элементы связи и укрепления, дюбели и винт (шуруп) объединяют в одно целое и используются, прежде всего, для тяжёлых нагрузок. Дюбели предлагаются в различных величинах, которые руководствуются диаметром дюбеля (и соответственно необходимым отверстием), измеренным в миллиметрах..";
// div1.style.background = '#f0f';
// div1.style.outline = '10px dotted #000';
// div1.style.width = '50%'
// div1.style.color = '#99ffff';
// div1.className = 'resetFont';
// let q = document.querySelector('.resetFont');
// q.style.fontSize = "12px";
// q.style.fontWeight = 'bold';
// q.style.textDecoration = 'line-through';

// (function(){
//   alert("Привет мир!");
// }());

// let a = function(n){
//   return n*n;
// };
// alert(a(4));

// Arrow Function - стрелочная функция

// function test(a,b,c){
//   let res = a + b + c;
//   return res;
// }

// console.log(test(10,20,30));

// let test2 = (a,b,c) => a + b + c;

// console.log(test2(10,20,30));

// let test3 = (a,b,c) => {
// let res = a + b + c;
// return res;
// }

// console.log(test3(10,20,30));


// let hello = (n) => alert("Hello, " + n);

// hello("Irina");

// Math

// document.write(Math.round(7.5) + "<br>");
// document.write(Math.floor(7.9) + "<br>");
// document.write(Math.ceil(7.1) + "<br>");

// (function(){
//   document.write(Math.random() + "<br>"); // от 0 до 1(не включая 1)
// }());
// (function(min, max){
//   document.write(Math.floor(Math.random() * (max - min) + min) + "<br>"); 
// }(7, 15));//от 0 до 9(не включая 9)

// document.write(Math.floor(Math.random() * 15) + "<br>"); //от 0 до 15(не включая 15)

// document.write(Math.floor(Math.random() * 7 + 2) + "<br>"); //от 2 до 9(не включая 9)

// document.write(Math.floor(Math.random() * 8 + 7) + "<br>"); //от 2 до 9(не включая 9)

// let fn = function(words){
// let b = Math.floor(Math.random() * words.length);
// console.log(b);
//   return words[Math.floor(Math.random() * words.length)];
// }

// let mas = ['Цикл','Массив','Условие','Функция'];
// let a = fn(mas);
// document.write(a);

// document.write("<div id='block'></div>");
// let id = document.getElementById("block");

// id.style.width = '100px';
// id.style.height = '100px';
// createColor();

// function createColor(){
//   let r = Math.floor(Math.random() * 256);
//   let g = Math.floor(Math.random() * 256);
//   let b = Math.floor(Math.random() * 256);
//   id.style.background = `rgb(${r}, ${g}, ${b})`;
// }

// document.write("<div id='block'></div>");

// let id = document.getElementById("block");



// id.style.width = '100px';

// id.style.height = '100px';

// id.style.background = 'rgb('+ createColor() +', '+ createColor() +', ' + createColor() + ')';;



// function createColor(){

//     return Math.floor(Math.random() * 256);

// }

// function hello(name="незнакомец"){
//   // name = name || "незнакомец";
//   document.write("Привет, " + name + "!<br>")
// }
// hello("Сергей");
// hello();

// function square(width, height, background){
//   document.write("<div id='shape'></div>");
//   let sq = document.querySelector("#shape");

//   sq.style.width = width + "px";
//   sq.style.height = height + "px";
//   sq.style.background = background;

// }
// square(200, 150,'gold')
// square(300, 50);
// square(400, 200, 'red');


// function hello(){
//   alert("Привет");
// }
// alert(hello);

// let st = "I\`m a JavaScript \"programmer\"";

// document.write(st + "<br>");
// // document.write(st[2] + "<br>");

// // st = st[2] + 'y'
// // document.write(st + "<br>");

// document.write(st.length + "<br>");
// // Методы строк
// document.write(st.toUpperCase() + "<br>");
// document.write(st.toLowerCase() + "<br>");

// let n = prompt("Введите имя", "богдан");
// alert(first(n));

// function first(str){
//   let newStr = str[0].toUpperCase();
//   for(let i=1;i<str.length;i++){
//     newStr += str[i].toLowerCase();
//   }
//   return newStr;
// }

// let st2 = "Я учу JavaScript. Мне нравится JavaScipt.";

// st = st.concat(st2);
// document.write(st + "<br>");

// document.write(st.indexOf("JavaScript") + "<br>");
// возвращает индекс на котором находится подстрока или "-1", если ничего не найдено
// document.write(st.indexOf("JavaScript", 7) + "<br>");
// document.write(st.lastIndexOf("JavaScript") + "<br>");

// let email;
// do{
//   email=prompt("Введите email");
//   if(email.indexOf("@")==-1){
//   alert("Некорректный email. Повторите операцию")
//   }
//   else{
//     break;
//   }
// }while(true);

// document.write(st.split(".") + "<br>");
// console.log(st);
// console.log(st.split("JavaScipt"));

// let mas = ['январь','февраль','март','апрель','май','июнь','июль','август','сентябрь','октябрь','ноябрь','декабрь'];
// for(let i = 0;i<12;i++){
//   document.write("<div>"+ mas[i] +"</div>");
//   let id = document.querySelectorAll("div")[i];
//   col()
//   function col(){
//     let r = Math.floor(Math.random() * 256);
//     let g = Math.floor(Math.random() * 256);
//     let b = Math.floor(Math.random() * 256);
//     id.style.background = 'rgb('+ r +', '+ g +', '+ b +')';
//     return col;
//   }
// }

// let question = ['Какую фамилию носил главный герой поэмы А. Твардовского?\n\n1:Муркин\t2:Шоркин\n3:Тёркин\t4:Твардовский','Сколько месяцев в году?\n\n1:11\t2:365\n3:13\t4:12','Как звали одного из друзей Винни Пуха?\n\n1:Гривенник\t2:Штукарь\n3:Пятачок\t4:Полтинник','Как именуется в юриспруденции процесс расмотрения дела?\n\n1:Судопроизводство\t2:Судостроение\n3:Судовождение\t4:Судоходство','Чьи обязанности выполнял южно-азиатский Рикша?\n\n1:Бурлака\t2:Возчика\n3:Грузчика\t4:Гейши','Кого Маяковский одел в штаны?\n\n1:Облако\t2:Паспорт\n3:Клопа\t4:Прозаседавшихся','Что отмечают голубым цветом на географических картах?\n\n1:Лесные массивы\t2:Небо\n3:Водоемы\t4:Горные хребты','Какие грамоты вручают главе государства вновь прибывшие иностранные послы?\n\n1:Китайские\t2:Верительные\n3:Почетные\t4:Охранные','Кто всегда испытывает облегчение, сумев избавиться от хвоста?\n\n1:Разводчик\t2:Обезьяна\n3:Ящерица\t4:Павлин','Какой запрет реже всего нарушают Российские граждане?\n\n1:Не курить\t2:Вход по пропускам\n3:Не влезай - убьет\t4:Соблюдать очередь']
// let answers = [2, 4, 3, 1, 2, 1, 3, 2, 1, 3]
// let money = [100, 200, 500, 1000, 10000, 32000, 50000, 100000, 200000, 1000000]
// let sum = 0;
// let answer;
// let b = 0;
// for(let i = 0; i < 10; i++){
//   answer = prompt(question[i]);
//   if(answer == answers[i]){
//     sum = money[i];
//     alert(`Правильный ответ!`)
//     if(money[i] == 1000 || money[i] == 32000){
//     b = money [i];  
//     alert(`Поздравляем! Вы дошли до несгораемой суммы ${b} рублей.`)
//     }
//   }
//   else if(b > 0){
//     alert(`Сожалеем, игра окончена. Вы выйграли ${b} рублей.`);break;
//   }
//   else{
//     alert(`Сожалеем, игра окончена. Попробуйте снова.`);break;
//   }
// }
//   if(sum==1000000){
//     alert("Поздравляем! Вы - МИЛЛИОНЕР!")
//   }

// let d = new Date();
// document.write(d + "<br>");
// document.write(d.toDateString() + "<br>");
// document.write(d.getFullYear() + "<br>"); // 2022
// document.write(d.getMonth() + 1 + "<br>"); // 10, месяц от 0 до 11
// document.write(d.getDate() + "<br>"); // 7
// document.write(d.getDay() + "<br>"); // 1, 0-воскресенье, 6-суббота

// Сегодня: 7 ноября 2022, Понедельник
// let months = ['января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря'];
// let days = [',Понедельник',',Вторник',',Среда',',Четверг',',Пятница',',Суббота',',Воскресенье']

// let d = new Date();
// let fullDate = "Сегодня: " + d.getDate() + " " + months[d.getMonth()] + " " + d.getFullYear() + 
// " " + days[d.getDay()];
// document.write(fullDate)

// setInterval(функция. интервал)

// document.write("<input type = 'button' value='Start/Stop'>");
// document.querySelector('input').addEventListener('click', start);

// let act, flag = false;
// function start(){
//   if(!flag){
//     act = setInterval(setColor, 1000);
//   }
//   else{
//      clearInterval(act);
//   }
//   flag = !flag;
// }


// function setColor(){
//   let x = document.body
//   x.style.background = x.style.background == "yellow" ? "orange" : "yellow"; 
// }

// document.write("<div id='text>Здесь будет отображаться текущее время</div>");

// window.addEventListener('load',() => setInterval(time, 1000));

// function time(){
//   let d = new Date();
//   let hour = d.getHours();
//   let min = d.getMinutes();
//   let sec = d.getSeconds();
//   if(sec<10){
//     sec = "0" + sec;
//   }
//   let tim = hour + ":" + min + ":" + sec;
//   document.querySelector("#text").innerHTML = tim;
// }

// // Дз от 07.11.22

// let a = document.querySelector("#c1");
// a.addEventListener("click", myMove);

// function myMove(){
//   let elem = document.getElementById("animate");
//   let pos = 0;
//   let id = setInterval(frame, 5);

//   function frame(){
// if (pos == 350){
//   a.addEventListener("click",myMove);
//   clearInterval(id);
// }
//   else{
//     a.removeEventListener("click",myMove);
//     pos++;
//     elem.style.top = pos + "px";
//     elem.style.left = pos + "px";
//   }
//   }
// }



// let t = document.querySelectorAll("#clock img");

// let imgTime = ['c0.gif','c1.gif','c2.gif','c3.gif','c4.gif','c5.gif','c6.gif','c7.gif','c8.gif','c9.gif']

// function clock(){
//   let d = new Date();
//   let hour = d.getHours();
//   let min = d.getMinutes();
//   let sec = d.getSeconds();
//   getImg(hour,min,sec);
//   setTimeout('clock()', 1000);
// }
// function getImg(h, m, s){
//   t[0].scr = imgTime[Math.floor(h/10)];
//   t[1].src = imgTime[h%10];
// }

// clock();

// let t = document.querySelectorAll("#clock img");



// let imgTime = ['c0.gif', 'c1.gif', 'c2.gif', 'c3.gif', 'c4.gif', 'c5.gif', 'c6.gif', 'c7.gif', 'c8.gif', 'c9.gif',];



// function clock(){

//     let d = new Date();

//     let hour = d.getHours();

//     let min = d.getMinutes();

//     let sec = d.getSeconds();

//     getImg(hour, min, sec);

//     setTimeout('clock()', 1000);

// }



// function getImg(h, m, s){

//     t[0].src = imgTime[Math.floor(h/10)];  // 17/10   => 1.7

//     t[1].src = imgTime[h%10];  // 17%10   => 7



//     t[3].src = imgTime[Math.floor(m/10)];  

//     t[4].src = imgTime[m%10];  



//     t[6].src = imgTime[Math.floor(s/10)];  

//     t[7].src = imgTime[s%10];  

// }



// clock();

// DOM - Document Object Model - объектная модель документа

// alert(document.documentElement.innerHTML);
// alert(document.head.innerHTML);
// alert(document.body.innerHTML);

// let myTitle = document.querySelector("h1").innerHTML
// console.log(myTitle);

// // let myTitle1 = document.querySelector("p").firstChild.nodeValue;
// let myTitle1 = document.querySelector("p").childNodes[0].nodeValue;
// console.log(myTitle1)

// let myTitle = document.querySelector("h1");
// alert(myTitle.nodeName);

// let d = document.querySelector("#one");
// if(d.nodeName == "DIV"){
//   d.innerHTML = "Hello new tag"
// }

// let myTitle = document.querySelector("h1");
// console.log(myTitle.firstChild);
// console.log(myTitle.firstChild.nodeType);

// let elem = document.querySelector("#root");

// let tag = document.createElement("p"); // <p></p> - создали тег
// let node = document.createTextNode("Новый текст"); // Новый текст - создали текстовую ноду(текст)
// tag.append(node); // <p></p> + Новый текст = <p>Новый текст</p>

// elem.append(tag); // <p>Новый текст</p> - добавляем новый элемент последним дочерним элементом внутри родительского
// elem.prepend(tag); // <p>Новый текст</p> - добавляем новый элемент первым дочерним элементом внутри родительского

// elem.before(tag); // добавляет новый элемент до выбранного id

// elem.after(tag); // добавляет новый элемент после выбранного id

// elem.replaceWith(tag); // заменяет новым элементом выбранный id 

// let list = document.querySelector("ul");

// let newItem = document.createElement("li");
// newItem.innerHTML = "Новый элемент списка";

// list.append(newItem);

// let i = 1;
// document.querySelector("#func2").addEventListener("click", add);
// document.querySelector("#func1").addEventListener("click", change);

// function add(){
//   let elem = document.createElement("li");
//   elem.innerHTML = "Water" + i;
//   i++;
//   document.querySelector("#list2").append(elem);
// }

// function change(){
//   let elem = document.querySelector("#list2").lastChild;
//   document.querySelector('#list1').append(elem);
// }

// let list = document.querySelector(".list");
// list.insertAdjacentHTML("beforebegin", "<h2>Список </h2><hr>");
// let list_inner = document.querySelector("h2");
// list_inner.insertAdjacentText('beforeend', " планет");
// list.insertAdjacentHTML("afterend", "<hr>")
// let hr = document.querySelectorAll("hr")[1];
// let h4 = document.createElement("h4");
// h4.innerHTML = "Конец списка";
// hr.insertAdjacentElement("afterend", h4);

// let idRemove = setInterval(function(){
//   let li = document.querySelector("li:last-child");
//   if(li === null){
//     clearInterval(idRemove);
//     list.insertAdjacentHTML("afterbegin", "<li>Список удален</li>")
//   }
//   else{
//     li.remove();
//   }
// }, 1000);

// let div = document.querySelector("div");
// div.className = 'alert';

// let activeDiv = document.querySelector(".active");
// activeDiv.classList.add('hidden');
// // activeDiv.classList.remove('hidden');

// activeDiv.classList.toggle('hidden');
// activeDiv.classList.replace('active', 'alert');

// let spans = document.querySelectorAll(".remove-button");

// for(let i = 0;i<spans.length;i++){
//   spans[i].addEventListener("click", function(){
//     this.parentNode.remove();
//   })
// }

// let greenFrog = document.querySelector("#greenFrog");

// console.log(greenFrog.id);
// console.log(greenFrog.className);
// console.log(greenFrog.src);
// console.log(greenFrog.alt);
// console.log(greenFrog.title);
// console.log(greenFrog.getAttribute('data-img'));
// console.log(greenFrog.getAttribute('src'));
// console.log(greenFrog.getAttribute('src', 'dv.png'));
// greenFrog.removeAttribute('src');
// console.log(greenFrog.hasAttribute('src'));

// Формы

// document.form1.style.background = 'silver';

// document.forms[0].style.padding = '16px';
// document.forms['form1'].style.margin = '20px';
// document.forms.form1.style.border = '2px dotted gray';

// document.form1.name1.style.color = "blue";
// document.form1["name1"].style.background = "aqua";

// let txt = document.querySelector("#text1");
// let but = document.querySelector("button");

// but.addEventListener('click', content);

// function content(){

//   alert(txt.value);
// }

// let input = document.querySelectorAll("input");
// let form1 = document.forms.form1;
// console.log(form1.length);
// console.log(input.length);
// // console.log(form1[0]);

// for(let i = 0;i<form1.length;i++){
//   input[i].addEventListener('click',checkAll);
// }

// function checkAll(){
//   let numChecked = 0;
//   for(let i = 0;i<form1.length;i++){
//     if(input[i].checked && input[i].type == "checkbox"){
//       numChecked++;
//     }
//   }
//   if(numChecked==3){
//     for(let i = 0;i<form1.length;i++){
//       if(!input[i].checked && input[i].type == "checkbox"){
//         input[i].disabled=true;
//       }
//     }
//   }
//   else{
//     for(let i = 0;i<form1.length;i++){
//       input[i].disabled=false;
//     }
//   }
//   console.log(numChecked);
// }

// let input = document.querySelectorAll("input[type='checkbox']");
// let form1 = document.forms.form1;
// console.log(form1.length);
// console.log(input.length);

// for(let i = 0;i<input.length;i++){
//   input[i].addEventListener('click',checkAll);
// }

// function checkAll(){
//   let numChecked = 0;
//   for(let i = 0;i<input.length;i++){
//     if(input[i].checked && input[i].type == "checkbox"){
//       numChecked++;
//     }
//   }
//   if(numChecked==3){
//     for(let i = 0;i<input.length;i++){
//       if(!input[i].checked && input[i].type == "checkbox"){
//         input[i].disabled=true;
//       }
//     }
//   }
//   else{
//     for(let i = 0;i<form1.length;i++){
//       input[i].disabled=false;
//     }
//   }
//   console.log(numChecked);
// }

// let choose = document.querySelector("input[type='button']");

// choose.addEventListener('click', chooseColor);

// function chooseColor(){
// let f = document.form3;
// console.log(f.length); // 7
// for(let i=0; i<f.radio2.length;i++){
//   if(f.radio2[i].checked){
//     alert(f.radio2[i].value);
//   } 
// }
// }

/* Свойства select:
options - коллекция из псевдоэлементов <option> 
value - значение выбранного <option>
selectedIndex - номер (индекс) выбранного <option>
*/

// let city = document.querySelector("#city");

// city.addEventListener('change', setImage);

// function setImage(){
//   let cities = city.selectedIndex;
//   // console.log(cities);
//   let options = city.options;
//   // console.log(options);
//   let code = options[cities].value;
//   console.log(code);

//   let div = document.querySelector("#image");
//   div.innerHTML = "<img src='img/"+ code +".png'>"

// }

// let gas = document.querySelectorAll(".petrol");

// for(let i = 0; i < gas.length;i++){
//   gas[i].addEventListener('click',function(){
//     let gallons = document.querySelector('.gallons').value;
//     let amount = this.getAttribute('data');

//     let res = gallons * amount;
//     let sum = document.querySelector('.sum');
//     sum.innerHTML = res;
//   })
// }

// let reg = document.querySelector('.register');

// reg.addEventListener('submit', function () {
//   let log = reg.login.value;
//   let pass = reg.password.value;
//   let pass2 = reg.password2.value;
//   let error = "";

//   if (log == "" || pass == "" || pass2 == "") {
//     alert("Все поля должны быть заполнены");
//     return;
//   }
//   if (pass.length < 6) {
//     error += ("Слишком короткий пароль");
//   }
//   if (pass != pass2) {
//     error += ("\nПароли не совпадают");
//   }
//   if(error==""){
//     alert("Вы зарегистрированы")
//   }
//   else{
//     alert(error);
//   }
// })

/* Методы регулярных выражений:

search - вовзращает позицию(либо индекс), на которой регулярное выражение совпадает с вызывающей сторокой или значение "-1", если совпадений нет

match - возвращает все совпадения с регулярным выражением

replace - заменяет совпадения с регулярным выражением на новую подстроку

split - делит строку на массив, разбивая ее по указаной подстроке(либо по символу разделителю)

test - выполняет поиск совпадений регулярного выражения со строкой. Возвращает значения true или false

*/

// let regexp = new RegExp("шаблон");
// let regexp = /шаблон/;

// let str = "Я ищу совпадения в 2023 году 78956789789989765ё";
// let regexp = /ищу/;
// document.write(str + "<br>")

// document.write(str.search(regexp) + "<br>");
// document.write(str.match(regexp) + "<br>");
// document.write(regexp.test(str) + "<br>");

// [...] - искать любой из заданных символов, но только один раз

// let regexp = /[203]/g;
// document.write(str.match(regexp) + "<br>");

/* Флаги
g - (global) - искать все совпадения с шаблоном поиска(глобальный поиск)
i - (ignoreCase) - регистронезависимый поиск
m - (multiline) - многострочный поиск
*/

// let regexp = /я/gi;
// document.write(str.match(regexp) + "<br>");

/* Диапазоны
[0-9] - любая цифра от 0 до 9, [3-6]
[A-Z] - заглавные буквы
[a-z] - строчные буквы
[А-ЯЁ]
[а-яё]
[А-яё]
*/
// let regexp = /[А-яё]/g;
// document.write(str.match(regexp) + "<br>");

// [^abc] - исключающий диапазон, ни один из указанных символов

// let regexp = /[^0-9]/g;
// document.write(str.match(regexp) + "<br>");

/* Количество повторений
{3} - количество символов идущих подряд
{1,} - от 1 до бесконечного количества потоврений 
{2,5} - от 2 до 5 повторений

*/
// let regexp = /[0-9]{2,5}/g;
// document.write(str.match(regexp) + "<br>");

// let html = `
//     <table>
//      <tr>
//       <td bgcolor ="#CCC4">
//       <img src ="1f3.png">
//       </td>
//       <td bgcolor ="#003399">
//       <img src ="222.png">
//       </td>
//       <td bgcolor ="#00ccdd">
//       <img src ="fff.png">
//       </td>
//      </tr>
//     </table>
// `;

// let exp = /#([0-9a-f]{3}){1,2}/gi;
// document.write(html.match(exp) + "<br>");

/* Символьные классы
\d - (digit) - любая цифра
\s - (space) - пробельный символ, включая табуляцию и перевод строки 
\w - (word) - включает в себя любую цифру, букву(английский алфавит) или символ подчеркивания 
*/

// let regexp = /\w/g;
// document.write(str.match(regexp) + "<br>");

/* Обратные символьные классы
\D - (digit) - все кроме цифры
\S - (space) - все кроме пробельных символов, включая табуляцию и перевод строки 
\W - (word) - все кроме цифр, букв(английский алфавит) или символов подчеркивания 
*/

// точка - любой сивмол

// let regexp = /.{3,5}/g;
// document.write(str.match(regexp) + "<br>");

/*  
^ - начало строки (перед последовательностью ничего не должно быть)
$ - конец строки(после последовательности ничего не должно быть)
*/

// let html = '909'
// let reg = /^\d{3}$/g;
// document.write(html.match(reg) + "<br>");

/* Кол-во повторений
+ - от 1 до бесконечности{1,}
? - от 0 до 1{0,1}
* - от 0 до бесконечности{0,}
*/

// let html = `
// <b>my text</b>
// <img src='222.jpg'>
// <span>else</span>
// <img src='fgt222.png'>
// <img src='rdgf2.ppg'>
// <img src='ewr.gif'>
// `;
// let exp = /\w+\.(jpg|png|gif|jpeg|bmp)/g;
// document.write(html.match(exp) + "<br>");

// let html = 'Дмитрий Васильев';
// let exp =/(Дмитрий) Васильев/;
// document.write(html.match(exp) + "<br>");

// document.write("aaa".replace('a', 'b') + "<br>");
// document.write("aaa".replace(/a/g, 'b') + "<br>");

// let text = "I kill you black dog";
// document.write(text + "<br>");
// let exp = /(book|kill|black)/ig;
// text = text.replace(exp,"***");
// document.write("<p>" + text + "</p>")

// let str = "John Smith";
// let re = /(\w+)\s(\w+)/;
// document.write(str.replace(re,"$2 && $1 $2"));

// let text = "red color: #F00 and green: #090";
// let exp = /(#[a-f0-9]{3})/ig;
// text = text.replace(exp, "<span style ='color:$1'>$1</span>");
// document.write("<p>" + text + "</p>");

// let text = "I love yandex.ru";
// let exp = /(([a-z0-9-]{2,}\.)+[a-z]{2,4})/i;
// text = text.replace(exp, "<a href='http://$1'>$1</a>");
// document.write("<p>" + text + "</p>")

// let str = "25-10-2022, 12.03.2023, 30/12/2020";
// let re = str.split(/[-./,]/);
// console.log(re);

// let num = 123456;
// console.log(num);
// let str = String(num);
// console.log(str);
// let arr = (str.split)

// let menu1 = {};
// menu1.width = 300;
// menu1.height = 200;
// menu1.title = "Menu";
// document.write(menu1.title + ": " + menu1.width + " x " + menu1.height + "<br>");

// let menu = {
//   width: 300,
//   height:200,
//   title: "Menu",
// };
// delete menu.width;
// menu.age = 25;

// document.write(menu.title + ": " + menu.width + " x " + menu.height + "<br>");
// for(let key in menu){
//   document.write("<br>Ключ: " + key + ", значение: " + menu[key]);
// }

// let menu = {
//   width: 300,
//   height:200,
//   title: "Menu",
// };
// let counter = 0;
// for(let key in menu){
//   document.write("<br>Ключ: " + key + ", значение: " + menu[key]);
//   counter++;
// }

// document.write("<br>Всего свойств: " + counter + "<br>");
// document.write("<br>Имена ключей: " + Object.keys(menu) + "<br>");
// document.write("<br>Имена ключей: " + Object.keys(menu).length + "<br>");
// Object.keys(menu).forEach(function(key){
//   document.write("<br>" + key + ": " + menu[key]);
// })

// let obj = {
//   name: "Гомер",
//   colors: {
//     first: "yellow",
//     second: "blue"
//   },
//   color: [
//     "black",
//     "white",
//     'red',
//     'blue',
//   ],
//   hello: function () {
//     document.write("Привет");
//   }
// }

// document.write(obj.name + " " + obj.color[1] + " " + obj.colors.first + "<br>");
// obj.hello();

// let fil = obj.color.filter(function(elem){
//   return elem.length < 5;
// })
// document.write("<br>" + fil + "<br>");

// let mas = obj.color.map(function(elem){
//   return elem;
// })
// document.write("<br>" + mas + "<br>");

// let mas1 = obj.color.map(elem => elem.toUpperCase());
// document.write("<br>" + mas1 + "<br>");

// let mas = obj.color.map(function(elem, index, all){
//   return elem + " " + index + " массив: " + all +"<br>";
// })
// document.write("<br>" + mas + "<br>");

// let calc = {
//   num1: 5,
//   num2: 5,
//   computer: function(){
//     this.result = this.num1 * this.num2;
//     // calc.result = calc.num1 * calc.num2;
//   }
// }
// calc.computer();
// document.write(calc.result);

// let x = 15, y = 10;
// let coords = {x, y,
//   calc(){
//     document.write(this.x * this.y);
//   }
// }
// coords.calc();

// Деструктуризация 

// let user = {
//   login: {
//     firstName: 'Kate',
//     lastName : 'Petrova'
//   },
//   passw: 'qwerty',
//   role: 'guest'
// }

// let {login: {firstName: n, ...el}, ...rest} = user;
// document.write(n + " " + rest.role + "<br>");

// let a = user.login.firstName;
// document.write(a + "<br>");

// let number = [3,5,6];
// let [,,c] = number;
// document.write(c);

// let pers = {
//   name: "Игорь",
//   colors:[
//   "красный",
//   "белый",
//   "синий",
//   "чёрный",
//   ],
//   brand: "Bentley",
//   start: function(){
//     let color = Math.floor(Math.random() * 4);
//     document.write(this.name + " имеет " + this.colors[color] + " " + this.brand);
//   }
// }
// pers.start();

// let pers = {
//   name: "Игорь",
//   colors: [
//     "красный",
//     "белый",
//     "синий",
//     "чёрный",
//   ],
//   brand: "Bentley",
//   start(){
//     let {name, colors, brand} = this;
//     let color = Math.floor(Math.random() * 4);
//     document.write(name + " имеет " + colors[color] + " " + brand);
//   }
// }
// pers.start();

// Функция-конструктор

// function Car(name, year){
//     this.name = name;
//     this.year = year;
// }

// let ford = new Car("Ford",2019);

// let bmw = new Car("BMW", 2017);


// function Automobile(color, model, year, manufact){
//   this.color = color;
//   this.model = model;
//   this.year = year;
//   this.manufact = manufact;
//   // this.whatColor = [
//   //   "Red",
//   //   "Black",
//   //   "Blue",
//   // ]
//    this.autoInfo = function(){
//     document.write("Цвет машины: " + this.color + "<br>"+ "Модель машины: " + this.model + "</br>" + "Год выпуска: " +  this.year + "</br>" + "Производитель автомобиля: " + this.manufact);
//   }
// }
// let nis = new Automobile("Red" ,"Nissan Skyline", 2007, "Nissan");
// nis.autoInfo();


// function User(pName , pAge, pJob){
//   this.name = pName;
//   this.age = pAge;
//   this.job = pJob;
//   this.who = function(){
//     document.write("Я " + this.name + ", мне " + this.age + " лет." + "Я работаю " + this.job + "</br>" + "</br>");
//   }
// }
// let dm = new User("Дмитрий", 26, "Дизайнером.");
// dm.who();

// let st = new User("Станислав", 29, "Программистом.");
// st.who(); 

// let sg = new User("Сергей", 35, "Менеджером.");
// sg.who();

// let form = document.form1;
// form.addEventListener("submit", event =>{
//   event.preventDefault();

//   let title = form.title.value;
//   let text = form.text.value;
//   let description = form.description.value;

//   saveForm({title, text, description}); // {title: title, text: text}
// })

// function saveForm(obj){
//   // let {title, text, description} = obj;
//     //  {title, text, description}

//   let formData = {
//     date: new Date().toDateString(),
//     ...obj// title, text, description
//   }

//   console.log("Form data: ", formData);
// }

// Rest

// function saveForm(...obj){
//   console.log("Аргументы: ", obj);
//   let [{title, text, description}] = obj;
//   let formData = {
//     date: new Date().toDateString(),
//     title, text, description
//   }

//   console.log("Form data: ", formData);
// }

// class User{

//   constructor(name){
//     this.n = name;
//   }
//   sayHi(){
//     document.write("Hello, " + this.n + "!" ); // метод
//   }
// }
// let user = new User("Иван");
// document.write(user.n + "<br>");
// user.n = "Мария";

// class User{
//   constructor(login){
//     this.login = login;
//   }
//   get login(){
//     return this.login;
//   }
//   set login(value){
//     if(value.length < 6){
//       alert("Логин слишком короткий")
//       return;
//     }
//     this._login = value;
//   }
// }
// let user = new User("administrator");
// user.login = "admin-admin";

// user.sayHi();

// console.log(typeof(User));
// console.log(typeof(user));

// class Person{
//   constructor(firstName,lastName){
//     this._firstName = firstName;
//     this._lastName = lastName;
//   }
//   get fullName(){
//     return this.firstName + " " + this._lastName;
//   }
//   set fullName(value){
//     [this._firstName, this._lastName] = value.split(/\s+/g);
//   }
// }

// let people = new Person("John", "Dou");
// document.write(people._firstName + "<br>");
// document.write(people.fullName + "<br>");
// people.fullName = "Anna Petrova";
// document.write(people.fullName + "<br>")

// class Person {

//   constructor(firstName, lastName) {

//     this._firstName = firstName;

//     this._lastName = lastName;

//   }
//   get fullName() {

//     return this._firstName + " " + this._lastName;

//   }
//   set fullName(value) {

//     [this._firstName, this._lastName] = value.split(/\s+/g);
//   }
// }
// let people = new Person("John", "Dou");

// document.write(people._firstName + "<br>");
// document.write(people.fullName + "<br>");
// people.fullName = "Anna Petrova";
// document.write(people.fullName + "<br>");

// class Animal{
//   constructor(name){
//     this.name = name;
//     this.speed = 0;
//   }
//   run(speed){
//     this.speed = speed;
//     document.write(`${this.name} бежит по скоростью ${this.speed} км/ч.<br>`);
//   }
//   stop(){
//     this.speed = 0;
//     document.write(`${this.name} стоит.<br>`)
//   }
// }
// class Rabbit extends Animal{
//   constructor(name, earLength){
//     super(name);
//     this.earLength = earLength;
//   }
//   hide(){
//     document.write(`${this.name} прячется!<br>`);
//   }
//   stop(){
//     super.stop();
//     this.hide();
//   }
// }
// let animal = new Animal("Мой питомец");
// animal.run(80);
// animal.stop();

// let rabbit = new Rabbit("Белый кролик", 10);
// console.log(rabbit);
// rabbit.run(5);
// rabbit.hide();
// rabbit.stop();
// document.write(rabbit.name + "<br>");
// document.write(rabbit.earLength + "<br>");

class Header{
  constructor(img, h1, h2){
       this.src = img;
       this.h1 = h1;
       this.h2 = h2;
  }

  render(id){
      let out = `
          <img src="${this.src}" alt ="">
          <h1>${this.h1}</h1>     
          <h2>${this.h2}</h2>     
      `;
      document.querySelector(`#${id}`).innerHTML = out;
    }
  }

  class HeaderExt extends Header{
    constructor(img, h1, h2, tel){
      super(img, h1, h2);
      this.tel = tel;
    }
    renderExt(id){
    super.render(id);
    }
  }

  let img = "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/233_Node_Js_logo-64.png";
  let header = new Header(img, "Заголовок", "Описание");
  header.render("header");

  let img2 = "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/187_Js_logo_logos-64.png";
  let header2 = new Header(img2, "Второй заголовок", "Другое описание");
  header2.render("header2");


  let img3 = "https://cdn3.iconfinder.com/data/icons/font-awesome-brands/512/node-js-64.png";
  let header3 = new HeaderExt(img3, "Дочерний класс", "Дочерний класс наследует все свойства и методы родительского класса", "+ 7 945 734-46-46")
  header3.renderExt("ext");

// JSON
// *.json

// let info = '{"first_name": "Ivan","age": 36,"mother": {"name": "Olga","age": 58},"children": ["Kate","Igor","Misha"],"marrid": true,"dog":null}';

// document.write(info + "<br>")

/* 
JSON.parse() - преобразовывает объект JSON в объект JavaScript(десериализация)
JSON.stringify() - преобразовывает объект JavaScript в объект JSON(сериалиация)
*/

// let person = JSON.parse(info);
// console.log(person);

// person.first_name = "Petr";

// document.write(person.first_name + "<br>")

// delete(person.age);
// for(let i in person){
//   document.write(i + ": " + person[i] + "<br>");
// }
//  person.work = "programmer";
//  for(let i in person){
//   document.write(i + ": " + person[i] + "<br>")
//  }

// delete(person.children[1]);
// document.write(person.children + "<br>");
// person.children.splice(1,1);
// document.write(person.children + "<br>")

// person.children.push("Ira")
// document.write(person.children + "<br>");

// let personString = JSON.stringify(person);
// console.log(personString);

// fetch('https://jsonplaceholder.typicode.com/todos')
//   .then(response => response.json())
//   .then(json => console.log(json))

// document.querySelector("#load").addEventListener("click", load);

// function load(){
//   let url = "https://jsonplaceholder.typicode.com/users";
//   fetch(url)
//   .then(function(response){
//     return response.json();
//   })
//   .then(function(data){
//     let ul = document.querySelector("#list");
//     let html = data.map(function(item){
//       return "<li>" + item.id + " " +  item.name + " (" + item.email + ")</li>"
//     })
//     ul.insertAdjacentHTML("afterbegin", html.join(" "));
//   });
// }

// let box = document.querySelector("div");
// console.log(box.getBoundingClientRect().top);