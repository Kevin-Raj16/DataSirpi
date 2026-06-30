import React, { Component } from "react";

/**
 * Statistics Component
 */
class Statistics extends Component {

    render() {

        const {

            totalBooks,

            availableBooks,

            borrowedBooks,

            reservedBooks

        } = this.props;

        return (

            <div className="statistics">

                <div className="stat-card">

                    <h2>{totalBooks}</h2>

                    <p>Total Books</p>

                </div>

                <div className="stat-card">

                    <h2>{availableBooks}</h2>

                    <p>Available</p>

                </div>

                <div className="stat-card">

                    <h2>{borrowedBooks}</h2>

                    <p>Borrowed</p>

                </div>

                <div className="stat-card">

                    <h2>{reservedBooks}</h2>

                    <p>Reserved</p>

                </div>

            </div>

        );

    }

}

export default Statistics;
