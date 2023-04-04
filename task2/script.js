const consoleLog = document.querySelector('#consoleLog');

consoleLog.addEventListener('click', () => {
    alert('Способ вывода информации в консоль.');
})

const Alert = document.querySelector('#alert');

Alert.addEventListener('click', () => {
    alert('Метод вывода информации, при котором показывается диалоговое окно с сообщением и кнопкой подтверждения.');
})

const Promt = document.querySelector('#promt');

Promt.addEventListener('click', () => {
    alert('Отображается диалоговое окно с запросом ввести текст..');
})