import {assets} from "../assets/assets.js";

const Navbar = () => {
    return (
        <div className="absolute top-0 left-0 z-10 w-full">
            <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
                <img src={assets.logo} alt="logo"/>
                <ul className="hidden md:flex gap-8 text-white">
                    <a href="#Header" className="cursor-pointer hover:text-gray-400">Header</a>
                    <a href="#Header" className="cursor-pointer hover:text-gray-400">About</a>
                    <a href="#Header" className="cursor-pointer hover:text-gray-400">Projects</a>
                    <a href="#Header" className="cursor-pointer hover:text-gray-400">Testimonials</a>
                </ul>
                <button className="hidden md:block px-8 py-2 bg-white rounded-full">Sign Up</button>
            </div>

        </div>
    );
};

export default Navbar;