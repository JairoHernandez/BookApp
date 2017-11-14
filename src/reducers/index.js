import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

const rootReducer = combineReducers({
  // The rootReducer adds a key called 'books' to global application state.
  // And its value is whatever get's returned from booksReducer, which is our array of books.
  books: BooksReducer, // used in book-list.js/function mapStateToProps 
  // Value of activeBook is value returned from ActiveBook reducer, which is then used in book-detail.sj/mapStateToProps funciton.
  activeBook: ActiveBook 
});

export default rootReducer;
