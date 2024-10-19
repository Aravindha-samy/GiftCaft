import React from 'react';


function About() {
  return (
    <div className="bg-gradient-to-b from-purple-50 to-white min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-extrabold text-center text-purple-600 mb-12 shadow-text">About GiftCraft</h1>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white rounded-lg shadow-lg p-8 transform hover:scale-105 transition duration-300">
            <h2 className="text-3xl font-semibold mb-4 text-purple-500">Our Mission</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              At GiftCraft, we're on a mission to revolutionize the gift-giving experience. We believe that every gift should be as unique as the person receiving it. Our platform empowers you to create personalized, meaningful presents that leave a lasting impression.
            </p>
            
            <h2 className="text-3xl font-semibold mb-4 text-purple-500">Our Story</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Founded in 2023, GiftCraft was born from a simple idea: that the most cherished gifts are those that come from the heart. Our team of passionate creators and tech innovators came together to build a platform that makes custom gift creation accessible to everyone, regardless of their artistic skills.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8 transform hover:scale-105 transition duration-300">
            <h2 className="text-3xl font-semibold mb-4 text-purple-500">What Sets Us Apart</h2>
            <ul className="list-none text-gray-700 mb-6 space-y-2">
              {['Cutting-edge customization technology', 'Wide range of high-quality base products', 'User-friendly design interface', 'Exceptional customer support', 'Fast, reliable shipping worldwide'].map((item, index) => (
                <li key={index} className="flex items-center">
                  <svg className="w-6 h-6 text-purple-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            
            <h2 className="text-3xl font-semibold mb-4 text-purple-500">Our Commitment</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We're committed to sustainability and ethical business practices. All our products are sourced from responsible manufacturers, and we continuously strive to reduce our environmental impact through eco-friendly packaging and carbon-neutral shipping options.
            </p>
          </div>
        </div>
        
        <div className="mt-16 text-center bg-purple-600 text-white py-12 px-6 rounded-lg shadow-xl">
          <h2 className="text-3xl font-bold mb-4">Join the GiftCraft Community</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Whether you're shopping for a birthday, anniversary, or just because, GiftCraft is here to help you create the perfect present. Join thousands of satisfied customers who have discovered the joy of giving truly unique gifts.
          </p>
          <button className="bg-white text-purple-600 font-bold py-3 px-8 rounded-full text-lg hover:bg-purple-100 transition duration-300 shadow-md">
            Start Crafting Your Gift
          </button>
        </div>
      </div>
      <style jsx>{`
        .shadow-text {
          text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
        }
      `}</style>
    </div>
  );
}

export default About;
