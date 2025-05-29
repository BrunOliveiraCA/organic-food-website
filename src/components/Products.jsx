import React, { useState } from "react";
import products from "../data/productData.js"; // Importing product data
import ProductCard from "../Layouts/ProductCard.jsx"; // Importing the ProductCard component

// List of available categories
const categories = [
    "FOOD & DRINKS",
    "FRESH FRUITS",
    "VEGETABLES",
    "DRIED FOODS & NUTS",
];

const Products = () => {
    // State to store the selected category, defaulting to "FOOD & DRINKS"
    const [selectedCategory, setSelectedCategory] = useState("FOOD & DRINKS");

    // Filters the products based on the selected category
    const filteredProducts = products.filter(
        (product) => product.category === selectedCategory
    );

    return (
        <section className="bg-gray-50 pb-10 px-5 lg:px-14">
            {/* Section title */}
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">Our Products</h2>

            {/* Buttons for selecting categories */}
            <div className="flex flex-wrap justify-center mb-6 space-x-4 text-sm font-medium text-green-600">
                {categories.map((category) => (
                    <button
                        key={category} // Unique key for each button
                        onClick={() => setSelectedCategory(category)} // Updates the selected category on click
                        className={`pb-1 border-b-2 ${
                            selectedCategory === category
                                ? "border-green-600" // Style for the selected category
                                : "border-transparent" // Style for unselected categories
                        } hover:border-green-400 transition`} // Hover effect
                    >
                        {category}
                        {/* Displays the category name on the button */}
                    </button>
                ))}
            </div>

            {/* Displaying the filtered products */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
                {filteredProducts.map((product, index) => (
                    <ProductCard
                        key={index} // Unique key for each product
                        {...product} // Passes all product properties as props to the ProductCard component
                    />
                ))}
            </div>
        </section>
    );
};

export default Products;
