const showTodo = (todos, todoObj) => {
    // ===== Creating new to-do =====
    const todo = document.createElement('p')
    todo.classList.add('todo')
    todo.id = todoObj.id

    
    // ===== Creating to-do content =====
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


    // ===== Appending created content to the to-do =====
    todo.append(todoTitle, todoCompleted)


    // ===== Appending completed to-do to the to-dos list =====
    todos.prepend(todo)
}

export { showTodo }