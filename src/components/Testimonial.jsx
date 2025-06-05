import React from "react";
import Slider from "react-slick"; // Importing the Slider component from react-slick
import "slick-carousel/slick/slick.css"; // Importing the default styles for the slider
import "slick-carousel/slick/slick-theme.css"; // Importing the theme styles for the slider

// Array of testimonials containing customer feedback
const testimonials = [
    {
        name: "Oliver Bennett",
        comment: "The veggies were so fresh and packed beautifully. Love it!",
        img: "src/assets/img/review1.jpg",
    },
    {
        name: "Amelia Brooks",
        comment: "Quick delivery & top-notch quality. Highly recommend!",
        img: "src/assets/img/review2.jpg",
    },
    {
        name: "Charlotte Harris",
        comment: "Finally, a brand I can trust for real organic produce.",
        img: "src/assets/img/review3.jpg",
    },
    {
        name: "James Walker",
        comment: "Organic, fresh, and affordable. My family loves it!",
        img: "src/assets/img/review4.jpg",
    },
];

const Testimonial = () => {
    // Slider settings for react-slick
    const settings = {
        className: "center", // Adds a custom class for styling
        centerMode: true, // Enables center mode for the slider
        infinite: true, // Allows infinite scrolling
        centerPadding: "60px", // Padding around the centered slide
        slidesToShow: 3, // Number of slides visible at a time
        autoplay: true, // Enables automatic sliding
        autoplaySpeed: 2000, // Time interval for autoplay (in milliseconds)
        pauseOnHover: true, // Pauses autoplay when the user hovers over the slider
        arrows: false, // Disables navigation arrows
        dots: true, // Enables navigation dots
        responsive: [
            {
                breakpoint: 1024, // For screens smaller than 1024px
                settings: {
                    slidesToShow: 2, // Show 2 slides
                    centerPadding: "40px", // Adjust padding
                },
            },
            {
                breakpoint: 640, // For screens smaller than 640px
                settings: {
                    slidesToShow: 1, // Show 1 slide
                    centerPadding: "20px", // Adjust padding
                },
            },
        ],
    };

    return (
        <section className="bg-white py-16 px-4">
            {/* Section title */}
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
                What Our Customers Say
            </h2>

            {/* Slider container */}
            <div className="slider-container max-w-6xl mx-auto">
                {/* Slider component with settings */}
                <Slider {...settings}>
                    {/* Mapping through the testimonials array to render each testimonial */}
                    {testimonials.map((item, index) => (
                        <div key={index} className="px-4 mb-2">
                            {/* Testimonial card */}
                            <div className="bg-green-50 p-6 rounded-lg shadow-md text-center h-full">
                                {/* Customer image */}
                                <img
                                    src={item.img}
                                    alt={item.name}
                                    className="w-40 h-36 mx-auto rounded-full mb-5"
                                />
                                {/* Customer comment */}
                                <p className="text-gray-700 italic mb-2">
                                    {item.comment}
                                </p>
                                {/* Customer name */}
                                <h4 className="font-semibold text-green-700">
                                    {item.name}
                                </h4>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default Testimonial;
