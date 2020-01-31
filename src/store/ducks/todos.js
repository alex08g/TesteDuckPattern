import { createActions, createReducer } from 'reduxsauce'

export const { Types, Creators } = createActions({
  add: ['text'],
  toggle: ['id'],
  remove: ['id'],
})

const INITIAL_STATE = []

const add = (state = INITIAL_STATE, { text }) => [
  ...state,
  { id: Math.random(), text, completed: false }
]

const toggle = (state = INITIAL_STATE, { id }) => state.map(
  todo => todo.id === id
    ? { ...todo, complete: !todo.complete }
    : todo
)

const remove = (state = INITIAL_STATE, { id }) => state.filter(todo => todo.id !== id)

export default createReducer(INITIAL_STATE, {
  [Types.ADD]: add,
  [Types.TOGGLE]: toggle,
  [Types.REMOVE]: remove
})