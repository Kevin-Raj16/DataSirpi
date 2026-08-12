import ProductCard from "./ProductCard";

/**
 * Product List Component
 */

function ProductList({

    products,

    viewProduct,

    addToCart

}) {

    return (

        <div className="product-grid">

            {

                products.map(product => (

                    <ProductCard

                        key={product.id}

                        product={product}

                        viewProduct={viewProduct}

                        addToCart={addToCart}

                    />

                ))

            }

        </div>

    );

}

export default ProductList;
