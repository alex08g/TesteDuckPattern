import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Creators as TodoActions } from './store/ducks/todos';
import { Creators as UserActions } from  './store/ducks/users';
import './styles.css';

function Todos() {
  const [input, setInput] = useState('')
  const todos = useSelector(state => state.todos)
  const users = useSelector(state => state.users)
  const dispatch = useDispatch()

  console.log(UserActions)

  useEffect(() => dispatch(UserActions.name('Alex')));
  console.log(users.userName);

  function handleSubmit(e) {
    e.preventDefault();
    setInput('')
    dispatch(TodoActions.add(input))
  }

  function handleToggle(id) {
    dispatch(TodoActions.toggle(id))
  }

  function handleRemove(id) {
    dispatch(TodoActions.remove(id))
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input value={input} onChange={e => setInput(e.target.value)} />
        <button type="submit">Novo</button>
      </form>

      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.complete ? <s>{todo.text}</s> : todo.text}
            <div>
              <button onClick={() => handleToggle(todo.id)}>Toggle</button>
              <button onClick={() => handleRemove(todo.id)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Todos
