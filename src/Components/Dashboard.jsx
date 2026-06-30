import React, { Component } from "react";

import booksData from "../data/books";

import Statistics from "./Statistics";
import SearchBar from "./SearchBar";
import AddBook from "./AddBook";
import BookList from "./BookList";
import BookModal from "./BookModal";

/**
 * Dashboard Component
 * Handles state management and business logic.
 */
class Dashboard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            books: booksData,
            search: "",
            selectedBook: null
        };
    }

    /**
     * Search books
     */
    handleSearch = (event) => {

        this.setState({
            search: event.target.value
        });

    };

    /**
     * Add new book
     */
    addBook = (book) => {

        this.setState({
            books: [...this.state.books, book]
        });

    };

    /**
     * Delete book
     */
    deleteBook = (id) => {

        this.setState({
            books: this.state.books.filter(
                book => book.id !== id
            )
        });

    };

    /**
     * Borrow / Return Book
     */
    toggleStatus = (id) => {

        const updatedBooks =
            this.state.books.map(book => {

                if (book.id === id) {

                    return {

                        ...book,

                        status:
                            book.status === "Available"
                                ? "Borrowed"
                                : "Available"

                    };

                }

                return book;

            });

        this.setState({
            books: updatedBooks
        });

    };

    /**
     * View Book
     */
    viewBook = (book) => {

        this.setState({
            selectedBook: book
        });

    };

    /**
     * Close Modal
     */
    closeModal = () => {

        this.setState({
            selectedBook: null
        });

    };

    render() {

        const filteredBooks =
            this.state.books.filter(book =>
                book.title
                    .toLowerCase()
                    .includes(
                        this.state.search.toLowerCase()
                    )
            );

        return (

            <div className="dashboard">

                <Statistics

                    totalBooks={this.state.books.length}

                    availableBooks={
                        this.state.books.filter(
                            b => b.status === "Available"
                        ).length
                    }

                    borrowedBooks={
                        this.state.books.filter(
                            b => b.status === "Borrowed"
                        ).length
                    }

                    reservedBooks={
                        this.state.books.filter(
                            b => b.status === "Reserved"
                        ).length
                    }

                />

                <SearchBar

                    search={this.state.search}

                    handleSearch={this.handleSearch}

                />

                <AddBook

                    addBook={this.addBook}

                />

                <BookList

                    books={filteredBooks}

                    deleteBook={this.deleteBook}

                    toggleStatus={this.toggleStatus}

                    viewBook={this.viewBook}

                />

                <BookModal

                    selectedBook={
                        this.state.selectedBook
                    }

                    closeModal={this.closeModal}

                />

            </div>

        );

    }

}

export default Dashboard;
