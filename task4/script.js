const Promt = document.querySelector('a');

Promt.addEventListener('click', () => {
    const promptText = prompt();
    Promt.textContent = promptText
    console.log('Текст ссылки изменён на', Promt.textContent);
})
