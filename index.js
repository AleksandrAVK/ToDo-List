let button = document.querySelector('.square__button');
let inputBlock = document.querySelector('.square__input-block');
let allInputsBlock = document.querySelector('.square__All-inputes-block');
let input = document.querySelector('.square__input');
let clearButton = document.querySelector('.clearButton');
let sortingIcon = document.querySelector('.sortingIcon');




let array = [];

function addInput() {
    array.push({ text: input.value });                       // беру значение текста из инпута и добвляю в массив
    let cloneInput = inputBlock.cloneNode('true');        // создаю клон инпута через cloneNode
    allInputsBlock.append(cloneInput);
    cloneInput.querySelector('.clearButton').addEventListener('click', (event) => {
        event.target.parentElement.parentElement.remove();  // при клике по крестику, нахожу первый по тегу clearButton у родителя cloneInput(клон блока инпут + крестик) и удаляю весь весь блок (инпут + крестик)  
    })
    input.value = '';                                       // очищаем поле ввода текста первого элемента с оторого сделали клоне
}
function deleteInput(event) {
    event.target.parentElement.parentElement.remove();      // при клике по крестику удаляю весь весь блок (инпут + крестик)  
}

button.addEventListener('click', (event) => {               // при клике по кнопке button вызываю addInput()
    addInput();
});

clearButton.addEventListener('click', deleteInput);         // при клике по clearButton (крестик) вызываю deleteInput()



sortingIcon.addEventListener('click', (event) => {           // При клике по кнопке сотировки со стрелкой мы меняем у img значение src  и меняем таким образом картинки сотрировки ( с серой на черную) 
    if (event.target.src.endsWith('/image/sortDownIconBlack.svg')) {  //endsWiith  сравнивает окончивается ли строка на то,что в скобках
        event.target.src = '/image/sortUpIconBlack.svg'
    } else {
        event.target.src = '/image/sortDownIconBlack.svg'
    }
})



sortInput = () => {
    let inputHTMLcollection = document.querySelectorAll('.square__input-block');

    let inputArray = Array.from(inputHTMLcollection);  //создаём HTML  коллекцию блоков square__input-block, для того, чтобы сортировка их потом меняла местами на странице согласно порядку в отсортированном массиве. На странице сортировка их проверит и на странице разместит в правильном порядке
    // console.log(inputArray.map(ia=>ia.value));
    inputArray.sort((a, b) => {
        console.log(a.querySelector('.square__input').value);
        if (a.querySelector('.square__input').value > b.querySelector('.square__input').value) { // через вот такую запись a.querySelector('.square__input').value  мы находим внутри блока наш инпут(благодаря квериселектору) и берём значение нашего инпута через value
            return 1;
        } else if (a.querySelector('.square__input').value < b.querySelector('.square__input').value) {
            return -1;
        } else {
            return 0;
        }

    })
    inputArray.forEach(item => {
        allInputsBlock.appendChild(item);  // через цикл мы берём значения уже отсортированного inputArray и отрисовываем каждый блок с инпутом
    });

}

sortingIcon.addEventListener('click', (event) => {
    sortInput();

})

// let inputArray = Array.of(input);                               // по селектору нахожу все инпуты на странице и и превращаю их в массив HTML документов 
// console.log(inputArray);
