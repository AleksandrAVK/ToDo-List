let button = document.querySelector('.square__button');
let inputBlock = document.querySelector('.square__input-block');
let allInputsBlock = document.querySelector('.square__All-inputes-block');
let input = document.querySelector('.square__input');
let clearButton = document.querySelector('.clearButton');
let sortingIcon = document.querySelector('.sortingIcon');
let order = 'up';
let sortOrder = 1;






function addInput() {

                                                                                                                                 // беру значение текста из инпута и добвляю в массив
    let cloneInput = inputBlock.cloneNode('true');                                                                          // создаю клон инпута через cloneNode
    allInputsBlock.append(cloneInput);
    cloneInput.querySelector('.clearButton').addEventListener('click', (event) => {
        event.target.parentElement.parentElement.remove();                                                                           // при клике по крестику, нахожу первый по тегу clearButton у родителя cloneInput(клон блока инпут + крестик) и удаляю весь весь блок (инпут + крестик)  
    })

    cloneInput.querySelector('input').value = '';   


}
function deleteInput(event) {
    event.target.parentElement.parentElement.remove();               // при клике по крестику удаляю весь весь блок (инпут + крестик)  
}

button.addEventListener('click', () => {                                        // при клике по кнопке button вызываю addInput()
    addInput();
});

clearButton.addEventListener('click', deleteInput);                                  // при клике по clearButton (крестик) вызываю deleteInput()



sortingIcon.addEventListener('click', () => {                                     // При клике по кнопке сотировки со стрелкой мы меняем у img значение src  и меняем таким образом картинки сотрировки ( с серой на черную) 
    sortingIcon.classList.toggle('sortDownIcon');
    sortingIcon.classList.toggle('sortUpIcon');
    
})

sortInput = () => {
    let inputHTMLcollection = document.querySelectorAll('.square__input-block');

    let inputArray = Array.from(inputHTMLcollection);                                               //создаём HTML  коллекцию блоков square__input-block, для того, чтобы сортировка их потом меняла местами на странице согласно порядку в отсортированном массиве. На странице сортировка их проверит и на странице разместит в правильном порядке

    if (order === 'up') {
        sortOrder = 1;
        order = 'down';

    }  else if (order === 'down') {
        sortOrder = -1;
        order = 'up';

    }


        inputArray.sort((a, b) => {

            let aValue = a.querySelector('.square__input').value; // через вот такую запись a.querySelector('.square__input').value  мы находим внутри блока наш инпут(благодаря квериселектору) и берём значение нашего инпута через value
            let bValue = b.querySelector('.square__input').value;

            if (aValue > bValue) {                                                               
                return 1 * sortOrder;
            } else if (aValue < bValue) {
                return -1 * sortOrder;
            } else {
                return 0;
            }

        })


    inputArray.forEach(item => {

        allInputsBlock.appendChild(item);  // через цикл мы берём значения уже отсортированного inputArray и отрисовываем каждый блок с инпутом

    });

}


sortingIcon.addEventListener('click', () => {
    sortInput();
})