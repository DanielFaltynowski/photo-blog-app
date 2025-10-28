const showTodo = (todos, todoObj) => {
    const todo = document.createElement('p')
    todo.classList.add('todo')
    
    const todoTitle = document.createElement('div')
    todoTitle.textContent = todoObj.title
    todoTitle.classList.add('todo-title')
    
    const todoCompleted = document.createElement('div')
    todoCompleted.textContent = todoObj.completed
    todoCompleted.classList.add('todo-completed')

    todo.append(todoTitle)
    todo.append(todoCompleted)

    todos.prepend(todo)
}

export { showTodo }