import React, { Component } from "react";

/**
 * Add Book Component
 */
class AddBook extends Component {

    state = {

        title: "",

        author: "",

        category: "",

        price: ""

    };

    handleChange = (event) => {

        this.setState({

            [event.target.name]:
                event.target.value

        });

    };

    submitBook = () => {

        this.props.addBook({

            id: Date.now(),

            ...this.state,

            status: "Available"

        });

        this.setState({

            title: "",

            author: "",

            category: "",

            price: ""

        });

    };

    render() {

        return (

            <div className="add-book">

                <h2>Add Book</h2>

                <input
                    name="title"
                    placeholder="Book Title"
                    value={this.state.title}
                    onChange={this.handleChange}
                />

                <input
                    name="author"
                    placeholder="Author"
                    value={this.state.author}
                    onChange={this.handleChange}
                />

                <input
                    name="category"
                    placeholder="Category"
                    value={this.state.category}
                    onChange={this.handleChange}
                />

                <input
                    name="price"
                    placeholder="Price"
                    value={this.state.price}
                    onChange={this.handleChange}
                />

                <button
                    onClick={this.submitBook}
                >
                    Add Book
                </button>

            </div>

        );

    }

}

export default AddBook;
