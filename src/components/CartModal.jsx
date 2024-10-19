import React from 'react';
import { useCart } from '../context/cartContext';

const CartModal = ({ onClose, className = '' }) => {
  const { cartItems, removeFromCart, clearCart } = useCart();

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className={`bg-white rounded-lg p-8 max-w-3xl w-full shadow-xl ${className}`}>
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Your Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            {cartItems.map(item => (
              <div key={item.id} className="flex justify-between items-center mb-4">
                <div>
                  <h3 className="font-semibold ">{item.title}</h3>
                  <p>Quantity: {item.quantity}</p>
                  <p>Price: ${(item.price * item.quantity).toFixed(2)}</p>
                </div>
                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded"
                >
                  Remove
                </button>
              </div>
            ))}
            <div className="mt-4">
              <p className="font-bold">Total: ${total.toFixed(2)}</p>
            </div>
            <div className="mt-4 flex justify-between">
              <button 
                onClick={clearCart}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
              >
                Clear Cart
              </button>
              <button 
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
              >
                Checkout
              </button>
            </div>
          </>
        )}
        <button 
          onClick={onClose}
          className="mt-4 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded transition duration-200"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default CartModal;
