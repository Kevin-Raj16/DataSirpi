function SearchBar({

    search,

    handleSearch

}) {

    return (

        <div className="search">

            <input

                type="text"

                placeholder="Search Product"

                value={search}

                onChange={handleSearch}

            />

        </div>

    );

}

export default SearchBar;
