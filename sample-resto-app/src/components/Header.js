import { useState } from 'react';
import { Link } from 'react-router-dom';
import foodpark from '../assets/img/foodpark.jpg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="header">
      <div className="container">
        {/* Logo */}
        <Link to="/" className="logo">
          <div className="logo-container">
            <img src={foodpark} alt="Food Park Logo" className="logo-image" />
            <span className="logo-text">Food Park</span>
          </div>
        </Link>

        <div className={`nav-items ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            {/* Internal sections use regular anchor tags */}
            <li><a href="#Home">Home</a></li>
            <li><a href="#Menu">Menu</a></li>
            <li><a href="#About">About</a></li>
            <li><a href="#Contact">Contact</a></li>

            {/* Routes use Link components */}
            <li><Link to="/Offers">Offers</Link></li>

            {/* Cart */}
            <li>
              <Link to="/" className="cart-item">
                <i className="fas fa-shopping-cart"></i>
                Cart <span className="cart-count">0</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile menu toggle */}
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