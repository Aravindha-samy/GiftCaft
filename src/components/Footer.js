import React from 'react';

const Footer = () => {
    return (
        <footer style={footerStyle}>
            <p>&copy; 2024 || Developed by Kavya &#10084; ||  All rights reserved.</p>
            

        </footer>
    );
};

const footerStyle = {
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px 0',
    textAlign: 'center',
    position: 'fixed',
    width: '100%',
    bottom: '0'
};

export default Footer;
