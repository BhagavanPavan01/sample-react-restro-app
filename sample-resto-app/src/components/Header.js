import { useState } from 'react';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="header">
      <div className="container">
        <a href="/" className="logo">
          <div className="logo-container">
            <img
              src="https://graphicdesigneye.com/images/food-logo-design.jpg"
              alt="Food Park Logo"
              className="logo-image"
            />
            <span className="logo-text">Food Park</span>
          </div>
        </a>

        <div className={`nav-items ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <a href="#Home" ><li>Home</li></a>
            <a href="#About" ><li>About</li></a>
            <a href="#Menu" ><li>Menu</li></a>
            <a href="#Offers" ><li>Offers</li></a>
            <a href="#Contact" ><li>Contact</li></a>
            <a href="/" > <li className="cart-item">
              <i className="fas fa-shopping-cart"></i>
              Cart <span className="cart-count">0</span>
            </li>
            </a>
          </ul>
        </div>

        <button
          className="mobile-menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>
    </div>
  );
};


export default Header;