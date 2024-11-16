import React from 'react';
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
    <div className="container px-4 py-8 mx-auto">
      <header className="relative px-4 py-16 mb-12 overflow-hidden text-white rounded-b-lg shadow-lg bg-gradient-to-r from-purple-600 to-pink-500 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="text-center">
            <h1 className="mb-4 text-5xl font-extrabold sm:text-6xl md:text-7xl animate-fade-in-down">
              Craft Your Perfect Gift
            </h1>
            <p className="max-w-md mx-auto mt-3 text-xl sm:text-2xl md:mt-5 md:max-w-3xl animate-fade-in-up">
              Personalize unique presents for your loved ones
            </p>
            <div className="flex flex-col justify-center mt-10 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 animate-fade-in">
              <a  href='/home'  className="inline-flex items-center justify-center w-full px-8 py-3 text-base font-medium text-purple-600 transition-colors duration-300 bg-white border border-transparent rounded-md shadow-md sm:w-auto hover:bg-gray-50 hover:shadow-lg md:py-4 md:text-lg md:px-10">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"></path></svg>
                Start Customizing
              </a>
              <a href='/home' className="inline-flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white transition-colors duration-300 bg-purple-600 border border-transparent rounded-md shadow-md sm:w-auto hover:bg-purple-700 hover:shadow-lg md:py-4 md:text-lg md:px-10">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"></path></svg>
                Browse Gifts
              </a>
            </div>
          </div>
        </div>
      </header>

      <section className="mb-16">
        <h2 className="mb-8 text-3xl font-bold text-center">Featured Products</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {[images[0], images[1], images[2]].map((img, index) => (
            <div key={index} className="overflow-hidden transition-transform duration-300 bg-white rounded-lg shadow-md hover:scale-105">
              <img src={img.img} alt={`Featured product ${index + 1}`} className="object-cover w-full h-64" />
              <div className="p-4">
                <h3 className="mb-2 text-xl font-semibold">{img.title}</h3>
                <p className="mb-4 text-gray-600">{img.description}</p>
                <Link to="/products" className="font-medium text-purple-600 hover:text-purple-800">Learn More</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 py-16 mb-16 bg-gray-100 rounded-lg">
        <h2 className="mb-8 text-3xl font-bold text-center">Why Choose Us</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {[
            { title: "Unique Designs",description:"Our products are designed to be unique and personalized, ensuring that your gift stands out from the rest.", icon: "🎨" },
            { title: "High Quality",description:"We use only the finest materials and craftsmanship to ensure that your gift is of the highest quality.", icon: "⭐" },
            { title: "Fast Delivery",description:"We offer fast and reliable delivery services to ensure that your gift arrives on time.", icon: "🚚" },
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="mb-4 text-4xl">{item.icon}</div>
              <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="mb-16">
        <h2 className="mb-8 text-3xl font-bold text-center">What Our Customers Say</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {[
            { name: "Aravindha Samy", review: "Amazing products and service! Will definitely order again." },
            { name: "Kavya", review: "The customization options are fantastic. I found the perfect gift!" },
          ].map((review, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-md">
              <p className="mb-4 text-gray-600">"{review.review}"</p>
              <p className="font-semibold">- {review.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 py-16 text-center text-white bg-purple-600 rounded-lg">
        <h2 className="mb-4 text-3xl font-bold">Ready to Create Your Perfect Gift?</h2>
        <p className="mb-8 text-xl">Start customizing now and make someone's day special!</p>
        <Link to="/products" className="px-8 py-3 font-semibold text-purple-600 transition-colors duration-300 bg-white rounded-md hover:bg-gray-100">
          Start Customizing
        </Link>
      </section>
    </div>
  );
};



export default Home;
