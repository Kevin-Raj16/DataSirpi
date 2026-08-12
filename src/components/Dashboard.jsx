import { useState } from "react";

import productsData from "../data/products";

import Statistics from "./Statistics";

import Sidebar from "./Sidebar";

import SearchBar from "./SearchBar";

import CategoryFilter from "./CategoryFilter";

import ProductList from "./ProductList";

import ProductDetails from "./ProductDetails";

import CartSummary from "./CartSummary";

function Dashboard() {

    const [products] =

        useState(productsData);

    const [cartItems,

        setCartItems] =

        useState([]);

    const [

        selectedProduct,

        setSelectedProduct

    ] = useState(null);

    const [

        search,

        setSearch

    ] = useState("");

    const [

        selectedCategory,

        setSelectedCategory

    ] = useState("All");

    const categories =

        [

            ...new Set(

                products.map(

                    product =>

                        product.category

                )

            )

        ];

    const handleSearch =

        (event) => {

            setSearch(

                event.target.value

            );

        };

    const handleCategory =

        (event) => {

            setSelectedCategory(

                event.target.value

            );

        };

    const addToCart =

        (product) => {

            setCartItems(

                [...cartItems,

                product]

            );

        };

    const viewProduct =

        (product) => {

            setSelectedProduct(

                product

            );

        };

    const closeProduct =

        () => {

            setSelectedProduct(

                null

            );

        };

    const filteredProducts =

        products.filter(

            product => {

                const searchMatch =

                    product.name

                        .toLowerCase()

                        .includes(

                            search.toLowerCase()

                        );

                const categoryMatch =

                    selectedCategory ===

                        "All"

                        ||

                    product.category ===

                    selectedCategory;

                return (

                    searchMatch &&

                    categoryMatch

                );

            }

        );

    return (

        <>

            <Statistics

                totalProducts={

                    products.length

                }

                available={

                    products.filter(

                        p => p.stock

                    ).length

                }

                outOfStock={

                    products.filter(

                        p =>

                            !p.stock

                    ).length

                }

            />

            <Sidebar

                categories={

                    categories

                }

            />

            <SearchBar

                search={search}

                handleSearch={

                    handleSearch

                }

            />

            <CategoryFilter

                categories={

                    categories

                }

                selectedCategory={

                    selectedCategory

                }

                handleCategory={

                    handleCategory

                }

            />

            <ProductList

                products={

                    filteredProducts

                }

                addToCart={

                    addToCart

                }

                viewProduct={

                    viewProduct

                }

            />

            <CartSummary

                cartItems={

                    cartItems

                }

            />

            <ProductDetails

                selectedProduct={

                    selectedProduct

                }

                closeProduct={

                    closeProduct

                }

            />

        </>

    );

}

export default Dashboard;
