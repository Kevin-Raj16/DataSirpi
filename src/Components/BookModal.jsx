import React, { Component } from "react";

/**
 * Displays complete book details.
 */
class BookModal extends Component {

    render() {

        const {
            selectedBook,
            closeModal
        } = this.props;

        if (!selectedBook)
            return null;

        return (

            <div className="modal">

                <div className="modal-content">

                    <h2>
                        {selectedBook.title}
                    </h2>

                    <p>
                        <strong>Author :</strong>
                        {selectedBook.author}
                    </p>

                    <p>
                        <strong>Category :</strong>
                        {selectedBook.category}
                    </p>

                    <p>
                        <strong>Price :</strong>
                        ₹{selectedBook.price}
                    </p>

                    <p>
                        <strong>Status :</strong>
                        {selectedBook.status}
                    </p>

                    <button
                        onClick={closeModal}
                    >
                        Close
                    </button>

                </div>

            </div>

        );

    }

}

export default BookModal;
