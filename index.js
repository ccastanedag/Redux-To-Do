function createStore() {
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

  return {
    getState,
    subscribe,
  }
}