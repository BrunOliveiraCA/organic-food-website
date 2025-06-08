import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa"; // Importing icons for social media links

const Footer = () => {
    return (
        <footer className="bg-green-100 text-gray-800 pt-12 pb-6 px-5 lg:px-14">
            {/* Main container for the footer */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-8">
                {/* Brand information section */}
                <div>
                    <h3 className="text-2xl font-bold text-green-700 mb-3">
                        OrganicRoot
                    </h3>
                    <p className="text-sm text-gray-600">
                        Fresh, healthy, and 100% organic products delivered to
                        your doorstep. Supporting local farmers and sustainable
                        living.
                    </p>
                </div>

                {/* Quick Links section */}
                <div>
                    <h4 className="font=semibold mb-3 text-green-700">
                        Quick Links
                    </h4>
                    <ul className="space-y-2 text-sm">
                        {/* Navigation links */}
                        <li>
                            <a href="/" className="hover:text-green-600">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="/" className="hover:text-green-600">
                                About Us
                            </a>
                        </li>
                        <li>
                            <a href="/" className="hover:text-green-600">
                                Products
                            </a>
                        </li>
                        <li>
                            <a href="/" className="hover:text-green-600">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Categories section */}
                <div>
                    <h4 className="font-semibold mb-3 text-green-700">
                        Categories
                    </h4>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <a href="/" className="hover:text-green-600">
                                Vegetables
                            </a>
                        </li>
                        <li>
                            <a href="/" className="hover:text-green-600">
                                Fruits
                            </a>
                        </li>
                        <li>
                            <a href="/" className="hover:text-green-600">
                                Dairy products
                            </a>
                        </li>
                        <li>
                            <a href="/" className="hover:text-green-600">
                                Beverages
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Contact information section */}
                <div>
                    <h4 className="font-semibold mb-3 text-green-700">
                        Contact
                    </h4>
                    <p className="text-sm text-gray-600 mb-2">
                        123 Organic Street, Calgary, CA
                    </p>
                    <p className="text-sm text-gray-600 mb-2">
                        Email: support@organicroot.com
                    </p>
                    <p className="text-sm text-gray-600 mb-4">
                        Phone: +44 123 456 7890
                    </p>
                    <div className="flex space-x-4">
                        <a
                            href="/"
                            className="text-green-700 hover:text-green-900"
                        >
                            <FaFacebookF />
                        </a>
                        <a
                            href="/"
                            className="text-green-700 hover:text-green-900"
                        >
                            <FaInstagram />
                        </a>
                    </div>
                </div>
            </div>

            {/* Footer bottom section */}
            <div>
                <p className="text-green-700 text-sm text-center">
                    &copy; developed by Bruno Oliveira | All rights reserved
                </p>
            </div>
        </footer>
    );
};

export default Footer;
