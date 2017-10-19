// State argument is not application state, only the state 
// this reducer is responsible for.
export default function(state=null, action) { // Redux does not allow a reducer to return undefined or else it will throw an error.
                                              // You must always return a non-undefined value -- state=null.
    switch(action.type) {
        case 'BOOK_SELECTED':
            return action.payload; // never assign state with equal sign.
    }
    return state;
}