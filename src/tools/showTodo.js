const showTodo = (todos, todoObj) => {
    const todo = document.createElement('p')
    todo.classList.add('todo')
    todo.id = todoObj.id
    
    const todoTitle = document.createElement('div')
    todoTitle.textContent = todoObj.title
    todoTitle.classList.add('todo-title')
    
    const todoCompleted = document.createElement('div')
    todoCompleted.textContent = ''
    if (todoObj.completed) {
        todoCompleted.style.color = 'green'
        todoCompleted.textContent = 'Completed'
    } else {
        todoCompleted.style.color = 'red'
        todoCompleted.textContent = 'Incompleted'
    }
    todoCompleted.classList.add('todo-completed')

    todo.append(todoTitle, todoCompleted)

    todos.prepend(todo)
}

export { showTodo }