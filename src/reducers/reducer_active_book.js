// State argument is not application state, only the state 
// this reducer is responsible for.
export default function(state=null, action) { // Redux does not allow a reducer to return undefined or else it will throw an error.
                                              // You must always return a non-undefined value -- state=null.
    console.log('ACTION.PAYLOAD:', action.payload); // { title: "Harry Potter", pages: 39 }
    switch(action.type) {
        case 'BOOK_SELECTED':
            // never assign state with equal sign. 
            return action.payload; // Accessed by activeBook in rootReducer in reducers/index.js.
    }
    return state;
}