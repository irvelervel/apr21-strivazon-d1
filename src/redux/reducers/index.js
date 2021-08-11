import { initialState } from '../store'

// add items to the cart
// remove items from the cart
// set the user name

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      //   state.cart.products.push(action.payload)
      // SUPER WRONG!!
      // a reducer is a pure function
      // YOU CANNOT MUTATE YOUR ARGUMENTS

      return {
        // every time you return an object out of a case
        // you're managing the whole state
        ...state,
        cart: {
          ...state.cart,
          // the book to add is going to be the payload of the action
          // action.payload -> the book to add
          products: [...state.cart.products, action.payload],
          // FORBIDDEN METHODS!!
          // push, pop, splice
        },
      }
    default:
      return state
  }
}

export default mainReducer
