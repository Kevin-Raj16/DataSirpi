import React, { Component } from "react";
import BookCard from "./BookCard";

/**
 * Displays all books.
 */
class BookList extends Component {

    render() {

        const {
            books,
            deleteBook,
            toggleStatus,
            viewBook
        } = this.props;

        return (

            <div className="book-grid">

                {

                    books.map(book => (

                        <BookCard

                            key={book.id}

                            book={book}

                            deleteBook={deleteBook}

                            toggleStatus={toggleStatus}

                            viewBook={viewBook}

                        />

                    ))

                }

            </div>

        );

    }

}

export default BookList;
