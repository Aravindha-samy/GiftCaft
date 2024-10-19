import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import img1 from '../asserts/img1.jpg';
import img2 from '../asserts/img2.webp';
import img3 from '../asserts/img7.webp';




const Home = () => {
  
  const images = [
    {id: 1, img: img1,title:"Elegant TeaCup",description:"A delicate porcelain teacup with intricate floral patterns."},
    {id: 2, img: img2,title:"Luxury Gift Box",description:"An exquisite gift box filled with premium assorted teas."},
    {id: 3, img: img3,title:"Ceramic Vase",description:"A beautiful and practical gift for the home."},
   
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="bg-gradient-to-r from-purple-600 to-pink-500 text-white py-16 px-4 sm:px-6 lg:px-8 rounded-b-lg shadow-lg mb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <h1 className="text-5xl font-extrabold sm:text-6xl md:text-7xl mb-4 animate-fade-in-down">
              Craft Your Perfect Gift
            </h1>
            <p className="mt-3 max-w-md mx-auto text-xl sm:text-2xl md:mt-5 md:max-w-3xl animate-fade-in-up">
              Personalize unique presents for your loved ones
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in">
              <a  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-purple-600 bg-white hover:bg-gray-50 transition-colors duration-300 shadow-md hover:shadow-lg md:py-4 md:text-lg md:px-10">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"></path></svg>
                Start Customizing
              </a>
              <a  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 transition-colors duration-300 shadow-md hover:shadow-lg md:py-4 md:text-lg md:px-10">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"></path></svg>
                Browse Gifts
              </a>
            </div>
          </div>
        </div>
      </header>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[images[0], images[1], images[2]].map((img, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
              <img src={img.img} alt={`Featured product ${index + 1}`} className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{img.title}</h3>
                <p className="text-gray-600 mb-4">{img.description}</p>
                <Link to="/products" className="text-purple-600 font-medium hover:text-purple-800">Learn More</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-100 py-16 px-4 rounded-lg mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Unique Designs",description:"Our products are designed to be unique and personalized, ensuring that your gift stands out from the rest.", icon: "🎨" },
            { title: "High Quality",description:"We use only the finest materials and craftsmanship to ensure that your gift is of the highest quality.", icon: "⭐" },
            { title: "Fast Delivery",description:"We offer fast and reliable delivery services to ensure that your gift arrives on time.", icon: "🚚" },
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { name: "Aravindha Samy", review: "Amazing products and service! Will definitely order again." },
            { name: "Kavya", review: "The customization options are fantastic. I found the perfect gift!" },
          ].map((review, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <p className="text-gray-600 mb-4">"{review.review}"</p>
              <p className="font-semibold">- {review.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-purple-600 text-white py-16 px-4 rounded-lg text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Create Your Perfect Gift?</h2>
        <p className="text-xl mb-8">Start customizing now and make someone's day special!</p>
        <Link to="/products" className="bg-white text-purple-600 py-3 px-8 rounded-md font-semibold hover:bg-gray-100 transition-colors duration-300">
          Start Customizing
        </Link>
      </section>
    </div>
  );
};



export default Home;
