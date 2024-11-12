import { useState, useReducer } from 'react';
import ACTION from './utilities/ReducerAction.mjs';
import listReducer from './utilities/Reducer.mjs'
import TodoForm from './component/todoForm';
import './App.css'

function App() {
  const [todo, setTodo] = useState([]);
  // const [form, setForm] = useState({
  //   id: 1,
  //   desc: "",
  //   complete: false,
  // });

  const [state, dispatch] = useReducer(listReducer, {
    todo: [],
    form: {
      id: 1,
      desc: "",
      complete: false,
    }
  });

  function handleChange(e) {
    dispatch({
      type: ACTION.EDIT,
      name: e.target.name,
      value: e.target.value,
    })
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (state.form.desc) {
      let input = document.getElementById("text");
      input.value = "";
      dispatch({
        type: ACTION.ADD,
        payload: {...state.form},
      });
    }
  };

  let todoList = state.todo.length
    ? state.todo.map((todo) => {
      return (
        <li>
          <TodoForm id={todo.id} todo={todo} dispatch={dispatch} />
        </li>
      );
    })
    : null;

  return (
    <main>
      <ul>
        <h1>Weekly Todo List</h1>
      </ul>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} id="text" type="text" placeholder="Todos" />
        <br />
        <input type="submit" />
      </form>
      <ul>{todoList}</ul>
    </main>
  )
}

export default App
