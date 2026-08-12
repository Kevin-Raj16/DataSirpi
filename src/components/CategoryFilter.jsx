/**
 * Category Filter Component
 */

function CategoryFilter({

    categories,

    selectedCategory,

    handleCategory

}) {

    return (

        <div className="category-filter">

            <select

                value={selectedCategory}

                onChange={handleCategory}

            >

                <option value="All">

                    All Categories

                </option>

                {

                    categories.map(category => (

                        <option

                            key={category}

                            value={category}

                        >

                            {category}

                        </option>

                    ))

                }

            </select>

        </div>

    );

}

export default CategoryFilter;
