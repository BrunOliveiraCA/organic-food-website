import React from "react";
import img from "../assets/img/about.jpg"; // Importing the image for the "About Us" section

const About = () => {
    return (
        <section className="bg-white py-16 px-5 lg:px-20">
            {/* Main container for the "About Us" section */}
            <div className="flex flex-col-reverse lg:flex-row items-center gap-10">
                {/* Text content section */}
                <div className="lg:w-1/2">
                    {/* Section title */}
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                        About Us
                    </h2>

                    {/* Subtitle with emphasis */}
                    <p className="text-green-600 font-semibold mb-3">
                        Fresh. Local. Organic.
                    </p>

                    {/* Paragraph describing the mission */}
                    <p className="text-gray-600 mb-4">
                        At NatureHarvest, we believe in bringing you the
                        freshest organic produce directly from our partnered
                        farmers. Our mission is to promote healthy living,
                        sustainable farming, and fair trade for local
                        communities.
                    </p>

                    {/* Paragraph describing farming practices */}
                    <p className="text-gray-600 mb-6">
                        We carefully select farms that follow natural practices
                        — no chemicals, no shortcuts. Just pure, wholesome food
                        delivered straight to your doorstep.
                    </p>

                    {/* Button for more information */}
                    <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition">
                        Learn More
                    </button>
                </div>

                {/* Image section */}
                <div className="lg:w-1/2">
                    <img
                        src={img} // Path to the imported image
                        alt="Our Farm"
                        className="w-full h-auto rounded-lg shadow-lg" // Styling for the image
                    />
                </div>
            </div>
        </section>
    );
};

export default About;
