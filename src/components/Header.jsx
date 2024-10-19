import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/cartContext';
import CartModal from './CartModal';
import { useNavigate } from 'react-router-dom';


export default function Header() {
    const { cartCount } = useCart();
    const [isCartOpen, setIsCartOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const isActive = (path) => location.pathname === path;

    return (
        <header className="bg-white border-b border-gray-200">
            <div className="container mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-8">
                        <Link to="/" className="text-2xl font-bold text-gray-800 hover:text-purple-700 transition duration-300">
                            GiftCraft
                        </Link>
                        <nav className="hidden md:block">
                            <ul className="flex space-x-6">
                                {[
                                    { name: 'Home', path: '/' },
                                    { name: 'Products', path: '/products' },
                                    { name: 'About', path: '/about' },
                                    { name: 'Contact', path: '/contact' }
                                ].map((item) => (
                                    <li key={item.name}>
                                        <Link 
                                            to={item.path}
                                            className={`text-sm font-medium ${
                                                isActive(item.path)
                                                    ? 'text-purple-700 border-b-2 border-purple-700'
                                                    : 'text-gray-600 hover:text-purple-700'
                                            } transition duration-300 py-2`}
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                    <div className="flex items-center space-x-4">
                        <button className="text-gray-600 hover:text-purple-700 transition duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>
                        <button 
                            onClick={() => setIsCartOpen(true)}
                            className="flex items-center text-gray-600 hover:text-purple-700 transition duration-300"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            {cartCount > 0 && (
                                <span className="ml-1 bg-purple-700 text-white text-xs font-bold rounded-full px-2 py-1">
                                    {cartCount}
                                </span>
                            )}
                        </button>
                    
                        <button onClick={() => navigate('/login')} className="bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800 transition duration-300">
                            Sign In
                        </button>
                    </div>
                </div>
            </div>
            {isCartOpen && <CartModal onClose={() => setIsCartOpen(false)} />}
        </header>
    );
}
