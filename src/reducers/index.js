import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

const rootReducer = combineReducers({
  // The rootReducer adds a key called 'books' to global application state.
  // And its value is whatever get's returned from booksReducer, which is our array of books.
  books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;
