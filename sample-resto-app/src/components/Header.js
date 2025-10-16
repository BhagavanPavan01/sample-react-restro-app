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
            <li><Link to="/Home">Home</Link></li>
            <li><Link to="/Menu">Menu</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Contact">Contact</Link></li>

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