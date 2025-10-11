
const Footer = () => {
  return (
    <footer>
      <div className="container" id="Contact">
        <div className="footer-content">
          <div className="footer-section">
            <h2>Healthy Restaurant</h2>
            <p>Discover your favorite meals and order online easily!</p>
            <div className="footer-socials">
              <a href="#"><i className="fab fa-linkedin"></i></a>
              <a href="#"><i className="fab fa-github"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-whatsapp"></i></a>

            </div>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <div className="footer-links">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#menu">Menu</a>
              <a href="#offers">Offers</a>
              <a href="#contact">Contact</a>
            </div>
          </div>

          <div className="footer-section">
            <h3>Contact Info</h3>
            <div className="contact-info">
              <p><i className="fas fa-map-marker-alt"></i> 123 Food Street, City</p>
              <p><i className="fas fa-phone"></i> +1 234 567 890</p>
              <p><i className="fas fa-envelope"></i> info@restarent.com</p>
            </div>
          </div>

          <div className="footer-section">
            <h3>Newsletter</h3>
            <div className="newsletter">
              <input type="email" placeholder="Enter your email" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>

        <p className="footer-bottom">
          &copy; {new Date().getFullYear()} Healthy Restaurant. All rights reserved.
        </p>
      </div>
    </footer>
  );
};



export default Footer;