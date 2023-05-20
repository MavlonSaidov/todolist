let form = document.querySelector('form')
let input = document.querySelector('input')
let data = document.querySelector('.data')
let span = document.querySelector('span')



form.addEventListener('submit', function(e) {
    e.preventDefault()
    addTodo()
})

let receivedDatas = JSON.parse(localStorage.getItem('todoArrays'))

console.log(receivedDatas)

if(receivedDatas) {
    receivedDatas.forEach(receivedData => {
        addTodo(receivedData)
    })
}



function addTodo(receivedData) {

    let todoText = input.value

    if (receivedData) {
        todoText = receivedData.name
    }

    let divEl = document.createElement('div')
    let span = document.createElement('span')
    divEl.appendChild(span)
    span.innerHTML = todoText;
    data.appendChild(divEl)
    divEl.classList.add('div-el')
    input.value = ''
    
    sendTodos()
    if (receivedData.completed) {
        span.classList.toggle('completed')
    }


    
    

    divEl.addEventListener('click', function(e) {
        e.preventDefault()
        span.classList.toggle('completed')
        sendTodos()
    })

    divEl.addEventListener('contextmenu', function(e) {
        e.preventDefault()
        divEl.remove()
        sendTodos()
    })
}

// let person = {
//     name: 'Abdulla',
//     age: '17'
// }
// localStorage.setItem('person', JSON.stringify(person))

// let response = localStorage.getItem('person')

// console.log(JSON.parse(response))



function sendTodos() {
    let allTodos = document.querySelectorAll('span')

    let todoArrays = []
    allTodos.forEach(todo => {
        let todoObj = {
            name: todo.innerHTML,
            completed: todo.classList.contains('completed')
        }
        todoArrays.push(todoObj)
    })

    localStorage.setItem('todoArrays', JSON.stringify(todoArrays))
}