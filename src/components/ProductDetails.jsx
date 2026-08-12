/**
 * Product Details Component
 */

function ProductDetails({

    selectedProduct,

    closeProduct

}) {

    if (!selectedProduct) {

        return null;

    }

    return (

        <div className="modal">

            <div className="modal-content">

                <h2>

                    {selectedProduct.name}

                </h2>

                <img

                    src={selectedProduct.image}

                    alt={selectedProduct.name}

                />

                <p>

                    <strong>Category :</strong>

                    {selectedProduct.category}

                </p>

                <p>

                    <strong>Price :</strong>

                    ₹ {selectedProduct.price}

                </p>

                <p>

                    <strong>Rating :</strong>

                    ⭐ {selectedProduct.rating}

                </p>

                <p>

                    <strong>Quantity :</strong>

                    {selectedProduct.quantity}

                </p>

                <button

                    onClick={closeProduct}

                >

                    Close

                </button>

            </div>

        </div>

    );

}

export default ProductDetails;
