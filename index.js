{
  type: 'ADD_TODO',
    todo: {
    id: 0,
      name: 'Learn Redux',
        complete: false
  }
}

{
  type: 'REMOVE_TODO',
    id: 0
}

{
  type: 'TOGGLE_TODO',
    id: 0
}

{
  type: 'ADD_GOAL',
    goal: {
    id: 0,
      name: 'Run a marathon'
  }
}

{
  type: 'REMOVE_GOAL',
    id: 0
}

function todos(state = [], action) {
  if (action.type === 'ADD_TODO') {
    return state.concat([action.todo]); // concat don't change the original array, create another array. This keep the reducer as pure function
  }

  return state;
}

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