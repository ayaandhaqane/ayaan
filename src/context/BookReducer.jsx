export default (state, action) => {
  switch (action.type) {
    case 'SET_BOOKS':
      return {
        ...state,
        books: action.payload
      };
    case 'ADD_BOOK':
      return {
        ...state,
        books: [...state.books, action.payload]
      };
    case 'DELETE_BOOK':
      return {
        ...state,
        books: state.books.filter(book => book.id !== action.payload)
      };
    case 'UPDATE_BOOK':
      return {
        ...state,
        books: state.books.map(book => book.id === action.payload.id ? action.payload : book)
      };
    default:
      return state;
  }
};
