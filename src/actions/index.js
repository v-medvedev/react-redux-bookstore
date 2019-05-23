const booksRequested = () => {
    return {
        type: 'FETCH_BOOKS_REQUESTED'
    }
};

const booksLoaded = (newBooks) => {
    return {
        type: 'FETCH_BOOKS_SUCCESS',
        payload: newBooks
    };
};

const booksError = (err) => {
    return {
        type: 'FETCH_BOOKS_FAILURE',
        payload: err
    }
};

const fetchBooksOld = (bookstoreService, dispatch) => () => {
    dispatch(booksRequested());
    bookstoreService.getBooks()
        .then(data => dispatch(booksLoaded(data)))
        .catch(err => dispatch(booksError(err)));
};

const fetchBooks = (bookstoreService) => () => (dispatch) => {
    dispatch(booksRequested());
    bookstoreService.getBooks()
        .then(data => dispatch(booksLoaded(data)))
        .catch(err => dispatch(booksError(err)));
};

const bookAddedToCart = (id) => {
    return {
        type: 'BOOK_ADDED_TO_CART',
        payload: id
    }
};

const bookRemovedFromCart = (id) => {
    return {
        type: 'BOOK_REMOVED_FROM_CART',
        payload: id
    }
};

const allBooksRemovedFromCart = (id) => {
    return {
        type: 'ALL_BOOKS_REMOVED_FROM_CART',
        payload: id
    }
};

export {
    fetchBooks,
    bookAddedToCart,
    bookRemovedFromCart,
    allBooksRemovedFromCart
}
