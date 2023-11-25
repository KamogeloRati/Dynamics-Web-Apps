/**
 * Action types
 * @type {string}
 */
const INCREMENT = 'INCREMENT';
/**
 * Action types
 * @type {string}
 */
const DECREMENT = 'DECREMENT';

/**
 * Reducer function to handle state changes based on actions.
 * @param {Object} state - The current state.
 * @param {Object} action - The action dispatched.
 * @returns {Object} - The new state.
 */
const tallyReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };
    case DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
};

/**
 * Function to create a Redux-inspired store.
 * @param {Function} reducer - The reducer function.
 * @returns {Object} - The store with getState, dispatch, and subscribe methods.
 */
const createStore = (reducer) => {
  /**
   * The current state.
   * @type {Object}
   */
  let state = reducer(undefined, {}); // Initialize the state

  /**
   * Array of subscribers to state changes.
   * @type {Function[]}
   */
  const subscribers = [];

  /**
   * Get the current state.
   * @returns {Object} - The current state.
   */
  const getState = () => state;

  /**
   * Dispatch an action to modify the state.
   * @param {Object} action - The action to dispatch.
   */
  const dispatch = (action) => {
    state = reducer(state, action);
    subscribers.forEach((subscriber) => subscriber());
  };

  /**
   * Subscribe to state changes.
   * @param {Function} subscriber - The function to be called on state changes.
   * @returns {Function} - A function to unsubscribe.
   */
  const subscribe = (subscriber) => {
    subscribers.push(subscriber);
    return () => {
      const index = subscribers.indexOf(subscriber);
      if (index !== -1) {
        subscribers.splice(index, 1);
      }
    };
  };

  dispatch({}); // Initialize the state

  return { getState, dispatch, subscribe };
};

// Create the store with the tallyReducer
/**
 * The Redux store for the Tally App.
 * @type {Object}
 */
const store = createStore(tallyReducer);

// Log the initial state
console.log('Initial State:', store.getState());

// Subscribe to state changes
/**
 * Unsubscribe function for state changes.
 * @type {Function}
 */
const unsubscribe = store.subscribe(() => {
  console.log('State changed:', store.getState());
});

// Dispatch actions to modify the state
store.dispatch({ type: INCREMENT });
store.dispatch({ type: INCREMENT });
store.dispatch({ type: DECREMENT });

// Unsubscribe from state changes
unsubscribe();

