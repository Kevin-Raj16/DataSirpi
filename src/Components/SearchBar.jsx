import React, { Component } from "react";

/**
 * Search Component
 */
class SearchBar extends Component {

    render() {

        return (

            <div className="search-container">

                <input

                    type="text"

                    placeholder="Search Book"

                    value={this.props.search}

                    onChange={this.props.handleSearch}

                />

            </div>

        );

    }

}

export default SearchBar;
