'use strict';

let answer

while (true){
    answer = prompt('Введите номер:')

    if (/^\d{10,}$/.test(answer)) {
    console.log("Номер корректный:", answer);
    break;
} else {
    console.log("Ошибка! Введите корректный номер (не менее 10 цифр).");
}
}