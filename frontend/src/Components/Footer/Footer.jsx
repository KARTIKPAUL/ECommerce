/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Footer.css";
import { FaTwitter, FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";

export function Footer() {
    return (
        <>
            <footer className="bg-gray-100 text-gray-800 mt-16">
                <div className="container mx-auto px-6 py-12">
                    <div className="flex flex-wrap justify-between">
                        <div className="w-full md:w-1/4 mb-6 md:mb-0">
                            <h2 className="text-2xl font-bold">Ecommerce</h2>
                            <p className="mt-2 text-gray-600">
                                We offer trendy and stylish clothes that suit your personality and lifestyle. 
                                Find the perfect fit for any occasion.
                            </p>
                            <div className="flex mt-4 space-x-4">
                                <a href="#" className="text-gray-600 hover:text-black"><FaTwitter size={20} /></a>
                                <a href="#" className="text-gray-600 hover:text-black"><FaFacebookF size={20} /></a>
                                <a href="#" className="text-gray-600 hover:text-black"><FaInstagram size={20} /></a>
                                <a href="#" className="text-gray-600 hover:text-black"><FaGithub size={20} /></a>
                            </div>
                        </div>

                        <div className="w-full md:w-3/4 flex flex-wrap justify-between">
                            <div className="w-1/2 md:w-1/4 mb-6">
                                <h3 className="font-semibold">COMPANY</h3>
                                <ul className="mt-2 space-y-2 text-gray-600">
                                    <li><a href="#" className="hover:underline">About</a></li>
                                    <li><a href="#" className="hover:underline">Features</a></li>
                                    <li><a href="#" className="hover:underline">Works</a></li>
                                    <li><a href="#" className="hover:underline">Career</a></li>
                                </ul>
                            </div>

                            <div className="w-1/2 md:w-1/4 mb-6">
                                <h3 className="font-semibold">HELP</h3>
                                <ul className="mt-2 space-y-2 text-gray-600">
                                    <li><a href="#" className="hover:underline">Customer Support</a></li>
                                    <li><a href="#" className="hover:underline">Delivery Details</a></li>
                                    <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
                                    <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                                </ul>
                            </div>

                            <div className="w-1/2 md:w-1/4 mb-6">
                                <h3 className="font-semibold">FAQ</h3>
                                <ul className="mt-2 space-y-2 text-gray-600">
                                    <li><a href="#" className="hover:underline">Account</a></li>
                                    <li><a href="#" className="hover:underline">Manage Orders</a></li>
                                    <li><a href="#" className="hover:underline">Shipping & Returns</a></li>
                                    <li><a href="#" className="hover:underline">Payments</a></li>
                                </ul>
                            </div>

                            <div className="w-1/2 md:w-1/4 mb-6">
                                <h3 className="font-semibold">CLOTHING</h3>
                                <ul className="mt-2 space-y-2 text-gray-600">
                                    <li><a href="#" className="hover:underline">Men's Collection</a></li>
                                    <li><a href="#" className="hover:underline">Women's Collection</a></li>
                                    <li><a href="#" className="hover:underline">Kids' Fashion</a></li>
                                    <li><a href="#" className="hover:underline">New Arrivals</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <hr className="my-6 border-gray-300" />

                    <div className="flex flex-wrap justify-between items-center">
                        <p className="text-gray-600 text-sm">
                            Ecommerce © Made by <strong>Dev1</strong> and <strong>Dev2</strong>
                        </p>
                        <div className="flex space-x-2 mt-4">
    <img src="https://static-00.iconduck.com/assets.00/visa-icon-512x329-sscrc567.png" 
         alt="Visa" className="h-6 w-auto" />

    <img src="https://download.logo.wine/logo/Mastercard/Mastercard-Logo.wine.png" 
         alt="MasterCard" className="h-6 w-auto" />

    <img src="https://cdn.pixabay.com/photo/2018/05/08/21/29/paypal-3384015_1280.png" 
         alt="PayPal" className="h-6 w-auto" />

    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF0s-Zy3zaDYeri6ZW8a5aPPekTUuuhyLOdQ&s" 
         alt="Apple Pay" className="h-6 w-auto" />

    <img src="https://lh3.googleusercontent.com/KE8W2U_931n24DtWrvySEdKwnx6dLeaoaXBV6nXNHKbJd32mnIx-eaxXPdsRscJMT8vxyLy59XKVkr_UXlswXFJ2KjomzkqV-ud3=s0" 
         alt="Google Pay" className="h-6 w-auto" />
</div>  
                    </div>
                </div>
            </footer>
        </>
    );
}
