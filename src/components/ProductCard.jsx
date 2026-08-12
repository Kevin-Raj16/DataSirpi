import Rating from "./Rating";

/**
 * Product Card Component
 */

function ProductCard({

    product,

    viewProduct,

    addToCart

}) {

    return (

        <div className="product-card">

            <img

                src={product.image}

                alt={product.name}

            />

            <h2>

                {product.name}

            </h2>

            <p>

                Category :

                {product.category}

            </p>

            <p>

                ₹ {product.price}

            </p>

            <Rating

                rating={product.rating}

            />

            <p>

                {

                    product.stock

                        ? "Available"

                        : "Out Of Stock"

                }

            </p>

            <div className="buttons">

                <button

                    onClick={() =>

                        viewProduct(product)

                    }

                >

                    View

                </button>

                <button

                    disabled={!product.stock}

                    onClick={() =>

                        addToCart(product)

                    }

                >

                    Add To Cart

                </button>

            </div>

        </div>

    );

}

export default ProductCard;
