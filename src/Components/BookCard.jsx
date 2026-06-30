import React, { Component } from "react";

/**
 * Book Card Component
 * Displays a single book.
 */
class BookCard extends Component {

    render() {

        const {
            book,
            deleteBook,
            toggleStatus,
            viewBook
        } = this.props;

        return (

            <div className="book-card">

                <h2>{book.title}</h2>

                <p>
                    <strong>Author :</strong>
                    {book.author}
                </p>

                <p>
                    <strong>Category :</strong>
                    {book.category}
                </p>

                <p>
                    <strong>Price :</strong>
                    ₹{book.price}
                </p>

                <p>
                    <strong>Status :</strong>
                    {book.status}
                </p>

                <div className="button-group">

                    <button
                        onClick={() => viewBook(book)}
                    >
                        View
                    </button>

                    <button
                        onClick={() => toggleStatus(book.id)}
                    >
                        {book.status === "Available"
                            ? "Borrow"
                            : "Return"}
                    </button>

                    <button
                        className="delete-btn"
                        onClick={() => deleteBook(book.id)}
                    >
                        Delete
                    </button>

                </div>

            </div>

        );

    }

}

export default BookCard;
