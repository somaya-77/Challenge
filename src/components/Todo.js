import TodoList from "./todoList";
import TaskList from "./taskList";
import { useEffect, useMemo, useState } from "react";
import ControlleBtn from "./controlleBtn";

let nextId = 3;
const initialTodos = [
  { id: 0, title: 'Task 1', done: true },
  { id: 1, title: 'Task 2', done: false },
  { id: 2, title: 'Task 3', done: false },
];

export default function Todo() {
  const [todos, setTodos] = useState(initialTodos);
  const [title, setTitle] = useState('');
  const [todoType, setTodoType] = useState('all');

  const completedTodos = useMemo(() => {
    return todos.filter((item) => {
      return item.isCompleted;
    });
  }, [todos])


  let todoToBeRendered = todos;

  if (todoType === 'completed') {
    todoToBeRendered = completedTodos;
  } else {
    todoToBeRendered = todos;
  }

  console.log(todoToBeRendered);
  // useEffect(() => {
  //   const storageTodo = JSON.parse(localStorage.getItem("todos"));
  //   setTodos(storageTodo)
  // }, [])

  // ADD TODO
  function handleAdd(title) {
    const updateTodos = [...todos, { id: nextId++, title: title, done: false }]
    setTodos(updateTodos);
    // localStorage.setItem("todos", JSON.stringify(updateTodos));
    setTitle('');
  }

  const itemTodo = todos.map(e => <p>{e.title}</p>)

  //EDIT TODO
  function handleEdit(itemId) {
    setTodos(todos.map(e => {
      if (e.id === itemId.id) {
        return itemId
      } else {
        return e;
      }
    }))
  }

  // DELETE TODO
  function handleDelete(itemId) {
    setTodos(todos.filter(e => e.id !== itemId));
  }

  return (
    <div >
      <h1 className="title">My App</h1>
      <div className="todo">

        <TodoList handleAdd={handleAdd} title={title} setTitle={setTitle} />
        <ControlleBtn todoType={todoType} setTodoType={setTodoType} todos={todos} itemTodo={itemTodo} />
        <TaskList todos={todos} handleDelete={handleDelete} handleEdit={handleEdit} />
      </div>
    </div>
  )
}
