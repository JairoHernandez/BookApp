import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';

const rootReducer = combineReducers({
  // The rootReducer adds a key to called 'books' to global application state.
  // And it value is whatever get's returned from booksReducer, which is our array of books.
  books: BooksReducer
});

export default rootReducer;
