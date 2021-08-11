export const addToCartAction = (book) => ({
  type: 'ADD_TO_CART',
  payload: book,
})

export const removeFromCartAction = (index) => ({
  type: 'REMOVE_FROM_CART',
  payload: index,
})
