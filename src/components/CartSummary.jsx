/**
 * Cart Summary Component
 */

function CartSummary({

    cartItems

}) {

    const totalPrice =

        cartItems.reduce(

            (total, product) =>

                total + product.price,

            0

        );

    return (

        <div className="cart-summary">

            <h2>

                Cart Summary

            </h2>

            <h3>

                Total Items :

                {cartItems.length}

            </h3>

            <h3>

                Total Price :

                ₹ {totalPrice}

            </h3>

        </div>

    );

}

export default CartSummary;
