// Library Code
function createStore(reducer) {
  // The store should have 4 parts
  // 1) The state tree (private)
  // 2) A method to GET the state (public)
  // 3) LISTEN to changes on the state (public)
  // 4) UPDATE the state (public)
  let state;
  let listeners = [];

  const getState = () => {

  }

  const subscribe = (listener) => {
    listeners.push(listener)
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    }
  }

  const dispatch = (action) => {
    // call todos
    // loop over the listeners and execute them
    state = reducer(state, action);
    listeners.forEach((listener) => listener());
  }

  return {
    getState,
    subscribe,
    dispatch
  }
}

// App Code
const ADD_TODO = 'ADD_TODO';
const REMOVE_TODO = 'REMOVE_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';
const ADD_GOAL = 'ADD_GOAL';
const REMOVE_GOAL = 'REMOVE_GOAL';

function addTodoAction(todo){
  return {
    type: ADD_TODO,
    todo
  }
}

function removeTodoAction(id){
  return {
    type: REMOVE_TODO,
    id
  }
}

function toggleTodoAction(id){
  return {
    type: TOGGLE_TODO,
    id
  }
}

function addGoalAction(goal){
  return {
    type: ADD_GOAL,
    goal
  }
}

function removeGoalAction(id){
  return {
    type: REMOVE_GOAL,
    id
  }
}

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return state.concat([action.todo]); // concat don't change the original array, create another array. This keep the reducer as pure function
    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.id);
    case TOGGLE_TODO:
      return state.map((todo) => todo.id !== action.id ? todo :
        Object.assign({}, todo, { complete: !todo.complete })
      );
    default:
      return state
  }
}

function goals(state = [], action) {
  switch (action.type) {
    case ADD_GOAL:
      return state.concat([action.goal])
    case REMOVE_GOAL:
      return state.filter((goal) => goal.id !== action.id)
    default:
      return state
  }
}

function app(state = {}, action) {
  return {
    todos: todos(state.todos, action),
    goals: goals(state.goals, action)
  }
}
