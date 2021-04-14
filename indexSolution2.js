let button = document.querySelector('.square__button');
let inputBlock = document.querySelector('.square__input-block');
let allInputsBlock = document.querySelector('.square__All-inputes-block');
let input = document.querySelector('.square__input');
let clearButton = document.querySelector('.clearButton');
let sortingIcon = document.querySelector('.sortingIcon');
let order = 'up';
let sortOrder = 1;


let array = [];
function addInArray() {
    array = [];
    for (let i = 0; i < allInputsBlock.children.length; i++) {
        // console.log(allInputsBlock.children[i].firstElementChild.value);
        array.push({ text: allInputsBlock.children[i].firstElementChild.value });
    }
}

function addInput() {
    // array.push({ text: input.value });                                                                                                                             // беру значение текста из инпута и добвляю в массив
    let cloneInput = inputBlock.cloneNode('true');                                                                          // создаю клон инпута через cloneNode
    allInputsBlock.append(cloneInput);
    cloneInput.querySelector('.clearButton').addEventListener('click', (event) => {
        event.target.parentElement.parentElement.remove();                                                                           // при клике по крестику, нахожу первый по тегу clearButton у родителя cloneInput(клон блока инпут + крестик) и удаляю весь весь блок (инпут + крестик)  
    })

    addInArray();
    cloneInput.querySelector('input').value = '';                                                                                                            // очищаем поле ввода текста первого элемента с которого сделали клонирование

}
function deleteInput(event) {
    event.target.parentElement.parentElement.remove();               // при клике по крестику удаляю весь весь блок (инпут + крестик)  
}

button.addEventListener('click', (event) => {                        // при клике по кнопке button вызываю addInput()
    addInput();
});

clearButton.addEventListener('click', deleteInput);                  // при клике по clearButton (крестик) вызываю deleteInput()



sortingIcon.addEventListener('click', (event) => {                                     // При клике по кнопке сотировки со стрелкой мы меняем у img значение src  и меняем таким образом картинки сотрировки ( с серой на черную) 
    if (event.target.src.endsWith('/image/sortDownIconBlack.svg')) {                 // endsWiith  сравнивает окончивается ли строка на то,что в скобках
        event.target.src = '/image/sortUpIconBlack.svg'
    } else {
        event.target.src = '/image/sortDownIconBlack.svg'
    }
})

sortInput = () => {
    if (order === 'up') {
        sortOrder = 1;
        order = 'down';

    } else if (order === 'down') {
        sortOrder = -1;
        order = 'up';

    }

    array.sort((a, b) => {
        if (a.text > b.text) {                                                                 // через вот такую запись a.text  мы берём значение нашего инпута из масива обьектов через по ключу text
            return 1 * sortOrder;
        } else if (a.text < b.text) {
            return -1 * sortOrder;
        } else {
            return 0;
        }

    })


    allInputsBlock.innerHTML = '';

    array.forEach(item => {
        let newsInputBlock = document.createElement('div');
        newsInputBlock.classList.add('square__input-block');
        let setNewInput = `<input class="square__input" value = "${item.text}" type="text" /> 
        <div class="clearButton-block">
        <img src="/image/clearButton.svg" class="clearButton" alt="Clear Button" />
        </div>`;
        newsInputBlock.innerHTML = setNewInput;
        newsInputBlock.querySelector('.clearButton').addEventListener('click', deleteInput);



        allInputsBlock.append(newsInputBlock);                                  // через цикл мы берём значения уже отсортированного inputArray и отрисовываем каждый блок с инпутом
        console.log(array);
        console.log(allInputsBlock);
    });

}

sortingIcon.addEventListener('click', (event) => {
    addInArray();
    sortInput();
    console.log(array);
})



