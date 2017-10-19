// Action Creator that will return(send) data to reducers.
export function selectBook(book) {
    //console.log('A book has been selected:', book.title);

    // selectBooks is an ACtionsCreator, it needs to return an ACtionsCreator
    // an object with a type property. Actions usually have 2 values: type and payload(data).
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}