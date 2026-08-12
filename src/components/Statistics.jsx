function Statistics({

    totalProducts,

    available,

    outOfStock

}) {

    return (

        <div className="statistics">

            <div className="card">

                <h2>{totalProducts}</h2>

                <p>Total Products</p>

            </div>

            <div className="card">

                <h2>{available}</h2>

                <p>Available</p>

            </div>

            <div className="card">

                <h2>{outOfStock}</h2>

                <p>Out Of Stock</p>

            </div>

        </div>

    );

}

export default Statistics;
