import React from "react";

const ProductCard = ({ image, title, price, oldPrice, discount, status }) => {
    return (
        <div>
            {/* Discount badge */}
            {discount && <div className="">-{discount}%</div>}

            {/* Product image */}
            <img src={image} alt={title} />

            {/* Product title */}
            <h3>{title}</h3>

            {/* Price information */}
            <div>
                <span>${price}</span>
                {/* Old price if available */}
                {oldPrice && <span>${oldPrice}</span>}
            </div>

            {/* Status badge */}
            {status === "soldout" ? <p>Sold Out</p> : <button>Shop Now</button>}
        </div>
    );
};

export default ProductCard;
