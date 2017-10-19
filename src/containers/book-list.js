import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

// CONTAINER
class BookList extends Component {

    renderList() {
        return this.props.books.map(book => {
            return (
                <li 
                    key={book.title} 
                    onClick={() => this.props.selectBook(book)}
                    className="list-group-item">
                    {book.title}
                </li>
            );
        });
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    }
}

// Application state activeBook from reducers/index.jsx
function mapStateToProps(state) { // IF state ever changes component Book will auto re-render with new list of books.
    // Whatever is returned will show up as props inside of BookList.
    return {
        books: state.books // This now becomes to avaible to our component as this.props.books.map
    };
}

// Sends action type and payload from action creator to reducer.
// Anything returned from this function will end up as props for BookList container.
function mapDispatchToProps(dispatch) {
    // Whenever selectBook is called, the result should be passed to all 
    // of our reducers. This result is passed through function value 'dispatch',
    // which again spits them out to reducers.
    // Inside of BookList container we can call this.selectBook because of key below.
    return bindActionCreators({ selectBook: selectBook }, dispatch);
}


// All the application state data comes back through here and is pumped into your smartcomponent to finally 
// re-render you app  glue connecting React and Redux it promotes BookList component to a container.
// it needs to know about this new dispatch method, selectBook to make it avaialble to prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList); 