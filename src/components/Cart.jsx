import React from 'react';
import { useCart } from '../context/cartContext';

const Cart = () => {
  const { cartItems, cartTotal, removeFromCart } = useCart();

  return (
    <div className="cart bg-white shadow-md rounded-lg p-6 m-4">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty</p>
      ) : (
        <>
          {cartItems.map(item => (
            <div key={item.id} className="cart-item flex items-center justify-between border-b py-4">
              <div className="flex items-center">
                <img src={item.img} alt={item.title} className="w-16 h-16 object-cover rounded mr-4" />
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-gray-600">Quantity: {item.quantity}</p>
                  <p className="text-gray-600">Price: ${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              </div>
              <button 
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="cart-total mt-6">
            <h3 className="text-xl font-bold">Total: ${cartTotal.toFixed(2)}</h3>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
