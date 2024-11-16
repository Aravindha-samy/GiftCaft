import React,{useState} from 'react';
import img1 from '../asserts/img1.jpg';
import img2 from '../asserts/img2.webp';
import img3 from '../asserts/img7.webp';
import img4 from '../asserts/img4.webp';
import img5 from '../asserts/img5.webp';
import { useCart } from '../context/cartContext';
import {FaShoppingCart} from 'react-icons/fa';
const Product = () => {
  const [selectedItem, setSelectedItem] = useState(null)

 
  const arr = [
    {
      id: 1,
      img: img1,
      title: "Elegant TeaCup",
      description: "A delicate porcelain teacup with intricate floral patterns, perfect for your afternoon tea ritual.",
      rate: 4.5,
      price: 24.99,
      comments: [
        { id: 1, name: "Emma Watson", comment: "Absolutely beautiful teacup!", rating: 5 },
        { id: 2, name: "James Bond", comment: "Elegant design, but a bit delicate.", rating: 4 },
      ]
    },
    {
      id: 2,
      img: img2,
      title: "Luxury Gift Box",
      description: "An exquisite gift box filled with premium assorted teas, ideal for tea enthusiasts or as a special present.",
      rate: 4.8,
      price: 49.99,
      comments: [
        { id: 1, name: "Oprah Winfrey", comment: "The perfect gift for tea lovers!", rating: 5 },
        { id: 2, name: "Gordon Ramsay", comment: "High-quality teas, beautifully presented.", rating: 5 },
        { id: 3, name: "Michelle Obama", comment: "Impressed with the variety and packaging.", rating: 4 },
      ]
    },
    {
      id: 3,
      img: img3,
      title: "Enchanted Wizard Cup",
      description: "A whimsical, hand-crafted mug featuring magical motifs, bringing a touch of fantasy to your beverage experience.",
      rate: 4.7,
      price: 29.99,
      comments: [
        { id: 1, name: "Harry Potter", comment: "It's like drinking from the Goblet of Fire!", rating: 5 },
        { id: 2, name: "Hermione Granger", comment: "Charming design, but be careful with the cleaning spell.", rating: 4 },
        { id: 3, name: "Ron Weasley", comment: "Bloody brilliant mug!", rating: 5 },
      ]
    },
    {
      id: 4,
      img: img4,
      title: "Refreshing Lemonade Set",
      description: "A charming set of glasses and a pitcher for serving zesty, homemade lemonade on warm summer days.",
      rate: 4.3,
      price: 34.99,
      comments: [
        { id: 1, name: "John Doe", comment: "This is a great product!", rating: 5 },
        { id: 2, name: "Jane Smith", comment: "I love this product!", rating: 4 },
        { id: 3, name: "Bob Johnson", comment: "This is a great product!", rating: 5 },
        { id: 4, name: "Alice Brown", comment: "This is a great product!", rating: 3 },
      ]
    },
    {
      id: 5,
      img: img5,
      title: "The Beauty Elixir",
      description: "An aesthetically pleasing bottle containing a nourishing herbal tea blend, promoting both inner wellness and outer beauty.",
      rate: 4.6,
      price: 39.99,
      comments: [
        { id: 1, name: "Gwyneth Paltrow", comment: "Love the blend of beauty and wellness!", rating: 5 },
        { id: 2, name: "Jennifer Aniston", comment: "Noticed a glow after a week of use.", rating: 4 },
        { id: 3, name: "Chris Hemsworth", comment: "Great taste and feel energized.", rating: 5 },
        { id: 4, name: "Zoe Saldana", comment: "Beautiful packaging, decent taste.", rating: 4 },
      ]
    },
  ];
  

  return (
    <div className="container px-4 py-8 mx-auto bg-gray-100">    
      <h1 className="mb-8 text-4xl font-bold text-center text-indigo-700">Our Exquisite Collection</h1>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {arr.map((item, index) => (
          <div key={index} className="overflow-hidden transition duration-300 transform bg-white rounded-lg shadow-lg hover:scale-105">
            <div className="relative">
              <img src={item.img} alt={item.title} className="object-cover w-full h-60" />
              <div className="absolute top-0 right-0 px-2 py-1 m-2 text-sm font-semibold text-white bg-indigo-600 rounded-full">
                ${item.price.toFixed(2)}
              </div>
            </div>
            <div className="p-6">
              <h2 className="mb-2 text-2xl font-semibold text-indigo-800">{item.title}</h2>
              <p className="mb-4 text-gray-600">{item.description}</p>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(item.rate) ? 'text-yellow-400' : 'text-gray-300'
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="ml-1 text-gray-600">{item.rate.toFixed(1)}</span>
                </div>
                <span className="text-sm text-gray-500">{item.comments.length} reviews</span>
              </div>           
              <button 
                className="flex items-center justify-center w-full px-4 py-3 font-bold text-white transition duration-300 bg-indigo-600 rounded-full hover:bg-indigo-700"
                onClick={() => setSelectedItem(item)}
              >
                <FaShoppingCart className="mr-2" /> Quick Shop
              </button>
            </div>
          </div>
        ))}       
      </div>
      {selectedItem && (
        <Modal item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </div>
  );
};

const Modal = ({ item, onClose }) => {

  const styles=[
    "Aries",
    "Taurus",
    "Gemini",
    "Cancer",
    "Leo",
    "Virgo",
    "Libra",
    "Scorpio",
    "Sagittarius",    
  ]
  const arr = [
    {
      id: 1,
      img: img1,
      title: "Elegant TeaCup",
      description: "A delicate porcelain teacup with intricate floral patterns, perfect for your afternoon tea ritual.",
      rate: 4.5,
      price: 24.99,
      comments: [
        { id: 1, name: "Emma Watson", comment: "Absolutely beautiful teacup!", rating: 5 },
        { id: 2, name: "James Bond", comment: "Elegant design, but a bit delicate.", rating: 4 },
      ]
    },
    {
      id: 2,
      img: img2,
      title: "Luxury Gift Box",
      description: "An exquisite gift box filled with premium assorted teas, ideal for tea enthusiasts or as a special present.",
      rate: 4.8,
      price: 49.99,
      comments: [
        { id: 1, name: "Oprah Winfrey", comment: "The perfect gift for tea lovers!", rating: 5 },
        { id: 2, name: "Gordon Ramsay", comment: "High-quality teas, beautifully presented.", rating: 5 },
        { id: 3, name: "Michelle Obama", comment: "Impressed with the variety and packaging.", rating: 4 },
      ]
    },
    {
      id: 3,
      img: img3,
      title: "Enchanted Wizard Cup",
      description: "A whimsical, hand-crafted mug featuring magical motifs, bringing a touch of fantasy to your beverage experience.",
      rate: 4.7,
      price: 29.99,
      comments: [
        { id: 1, name: "Harry Potter", comment: "It's like drinking from the Goblet of Fire!", rating: 5 },
        { id: 2, name: "Hermione Granger", comment: "Charming design, but be careful with the cleaning spell.", rating: 4 },
        { id: 3, name: "Ron Weasley", comment: "Bloody brilliant mug!", rating: 5 },
      ]
    },
    {
      id: 4,
      img: img4,
      title: "Refreshing Lemonade Set",
      description: "A charming set of glasses and a pitcher for serving zesty, homemade lemonade on warm summer days.",
      rate: 4.3,
      price: 34.99,
      comments: [
        { id: 1, name: "John Doe", comment: "This is a great product!", rating: 5 },
        { id: 2, name: "Jane Smith", comment: "I love this product!", rating: 4 },
        { id: 3, name: "Bob Johnson", comment: "This is a great product!", rating: 5 },
        { id: 4, name: "Alice Brown", comment: "This is a great product!", rating: 3 },
      ]
    },
    {
      id: 5,
      img: img5,
      title: "The Beauty Elixir",
      description: "An aesthetically pleasing bottle containing a nourishing herbal tea blend, promoting both inner wellness and outer beauty.",
      rate: 4.6,
      price: 39.99,
      comments: [
        { id: 1, name: "Gwyneth Paltrow", comment: "Love the blend of beauty and wellness!", rating: 5 },
        { id: 2, name: "Jennifer Aniston", comment: "Noticed a glow after a week of use.", rating: 4 },
        { id: 3, name: "Chris Hemsworth", comment: "Great taste and feel energized.", rating: 5 },
        { id: 4, name: "Zoe Saldana", comment: "Beautiful packaging, decent taste.", rating: 4 },
      ]
    },
  ];
  const colours=[
    "Vanilla",
    "Blue",
    "Green",
    "Red",
    "Yellow",
    "Orange",
    "Purple",
    "Pink",
    "Brown",
    "Gray",
    "Black",
    "White"  
  ]
  
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedStyle, setSelectedStyle] = useState('');
  const { addToCart } = useCart();
  const [currentItem, setCurrentItem] = useState(item);

  const handleAddToCart = () => {
    addToCart({ ...item, color: selectedColor, style: selectedStyle,quantity:quantity });
    onClose();
  };

  const getInitials = (name) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const getAvatarColor = (name) => {
    const colors = [
      'bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500', 
      'bg-purple-500', 'bg-pink-500', 'bg-indigo-500', 'bg-teal-500'
    ];
    const index = name.length % colors.length;
    return colors[index];
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 ">
      <div className="bg-white rounded-lg p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex flex-col md:flex-row ">
          <div className="w-full mb-4 md:w-1/2 md:mb-0 md:mr-4">
            <img src={currentItem.img} alt={currentItem.title} className="object-cover w-full h-64 mb-4 rounded" />
            <ul className="p-0 list-none ">
              {arr.map((image, index) => (               
                <li 
                  key={index}
                  className='flex items-center p-2 mb-2 mr-2 rounded cursor-pointer hover:bg-gray-100'
                  // className='p-2 rounded cursor-pointer hover:bg-gray-100'
                  onClick={() => setCurrentItem(image)}
                >
                  <img src={image.img} alt={image.title} className="object-cover w-16 h-16 mr-8 rounded" />
                  <span className="text-sm">{image.title}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1">

            <h2 className="mb-2 text-2xl font-bold">{currentItem.title}</h2>
            <p className="mb-4 text-gray-600">{currentItem.description}</p>
            <p className="mb-4 text-xl font-bold text-green-600">${currentItem.price.toFixed(2)}</p>
             <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-5 h-5 ${
                    i < Math.floor(currentItem.rate) ? 'text-yellow-400' : 'text-gray-300'
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="ml-1 text-gray-600">{currentItem.rate.toFixed(1)}</span>
            </div>
            
            <div className="mb-4">
              <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="quantity">
                Quantity:
              </label>
              <input 
                type="number" 
                id="quantity"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value)))}
                className="w-20 px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              />
            </div>
            
            <div className="mb-4">
              <label className="block mb-2 text-sm font-bold text-gray-700">
                Color:
              </label>
              <select 
                value={selectedColor}
                onChange={(e) => setSelectedColor(e.target.value)}
                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              >
                <option value="">Select a color</option>
                {colours.map((color, index) => (
                  <option key={index} value={color}>{color}</option>
                ))}
              </select>
            </div>
            
            <div className="mb-4">
              <label className="block mb-2 text-sm font-bold text-gray-700">
                Style:
              </label>
              <select 
                value={selectedStyle}
                onChange={(e) => setSelectedStyle(e.target.value)}
                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              >
                <option value="">Select a style</option>
                {styles.map((style, index) => (
                  <option key={index} value={style}>{style}</option>
                ))}
              </select>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-4">
              <button 
                className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-600"
                onClick={onClose}
              >
                Close
              </button>
              <button 
                className="px-4 py-2 font-bold text-white bg-green-500 rounded hover:bg-green-600"
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
              <button className="px-4 py-2 font-bold text-white bg-yellow-500 rounded hover:bg-yellow-600">
                Buy It Now
              </button>
            </div>

            {/* Comments section */}
            <div className="mt-6">
              <h3 className="mb-4 text-xl font-bold">Comments</h3>
              {currentItem.comments && currentItem.comments.length > 0 ? (
                currentItem.comments.map((comment) => (
                  <div key={comment.id} className="pb-2 mb-4 border-b">
                    <div className="flex items-center mb-2">
                      <div className={`w-10 h-10 rounded-full ${getAvatarColor(comment.name)} flex items-center justify-center text-white font-bold mr-3`}>
                        {getInitials(comment.name)}
                      </div>
                      <div>
                        <span className="mr-2 font-semibold">{comment.name}</span>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className={`w-4 h-4 ${
                                i < comment.rating ? 'text-yellow-400' : 'text-gray-300'
                              }`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 ml-13">{comment.comment}</p>
                  </div>
                ))
              ) : (
                <p>No comments yet.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
