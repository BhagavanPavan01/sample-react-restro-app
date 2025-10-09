import ReactDOM from "react-dom/client";
import './App.css';
import React, { useState, useEffect } from "react";

// Your existing slides and restaurantList arrays remain the same
const slides = [
  {
    image: "https://resizer.nationalworld.com/d704b9fb-75ef-43c5-b694-550e6dc9fdfd.jpeg?tr=w-900",
    title: "Delicious Burgers",
    subtitle: "Try our freshly made juicy burgers today!",
  },
  {
    image: "https://b.zmtcdn.com/data/pictures/chains/8/21226868/7c890de7dabe51ad19f987a851421c1b.jpeg?fit=around|960:500&crop=960:500;*,*",
    title: "Tasty Pizzas",
    subtitle: "Hot and cheesy pizzas delivered to your door!",
  },
  {
    image: "https://www.asknestle.in/sites/default/files/2022-09/Healthy-Salad-Recipes-640x380.jpg",
    title: "Healthy Salads",
    subtitle: "Fresh, crisp, and nutritious salads every day!",
  },
];

const restaurentList = [
  // Your existing restaurant data remains the same
  {
    name: "Burger King",
    image: "https://b.zmtcdn.com/data/pictures/chains/8/18138658/6352f382ab83cd6c458c3ad6c6fd1d60_featured_v2.jpg",
    cusines: ["Burger", "American", "Fast Food"],
    rating: "4.3",
  },
  {
    name: "Pizza Hut",
    image: "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/veggie-supreme.4bbddf98eccea9929192db1494ba3678.1.jpg",
    cusines: ["Pizza", "Italian"],
    rating: "4.5",
  },
  {
    name: "Domino's Pizza",
    image: "https://images.dominos.co.in/new_margherita_2502.jpg",
    cusines: ["Pizza", "Italian"],
    rating: "4.2",
  },
  {
    name: "KFC",
    image: "https://cdn.sanity.io/images/kbqq3e0r/production/8cab9a549a5bc09e4bcc391632d8640d495f4bd3-1200x667.png?w=3840&q=100",
    cusines: ["Chicken", "Fast Food", "American"],
    rating: "4.1",
  },
  {
    name: "Subway",
    image: "https://mma.prnewswire.com/media/2769047/Subway_Fresh_Fit.jpg?w=2700",
    cusines: ["Healthy", "Sandwich", "Salad"],
    rating: "4.4",
  },
  {
    name: "Taco Bell",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/RX_THUMBNAIL/IMAGES/VENDOR/2025/7/10/132ec6ef-0d70-4982-8502-2e5307a23dbf_11215.JPG",
    cusines: ["Mexican", "Wraps", "Tacos"],
    rating: "4.3",
  },
  {
    name: "The Great Indian Kitchen",
    image: "https://res.cloudinary.com/hz3gmuqw6/image/upload/c_fill,h_450,q_auto,w_710/f_auto/tk-traditional-indian-foods-to-taste-in-2022-phpEXAXNS",
    cusines: ["Indian", "Curry", "Thali"],
    rating: "4.6",
  },
  {
    name: "Sushi World",
    image: "https://sushiworld.ae/storage/383/conversions/Slider--cover.png",
    cusines: ["Japanese", "Sushi", "Seafood"],
    rating: "4.7",
  },
  {
    name: "Biryani By Kilo",
    image: "https://bbk-images-links.s3.ap-south-1.amazonaws.com/192p78iconbbk-luck.jpg",
    cusines: ["Biryani", "Hyderabadi", "Indian"],
    rating: "4.5",
  },
  {
    name: "Starbucks Coffee",
    image: "https://rukminim2.flixcart.com/image/480/480/xif0q/milk-drink-mix/g/w/h/250-frappuccino-creamy-mocha-delight-chilled-coffee-drink-original-imah7htzphhczybz.jpeg?q=90",
    cusines: ["Cafe", "Beverages", "Desserts"],
    rating: "4.6",
  },
];

// New Components
const SearchBar = ({ onSearch }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = (e) => {
    const text = e.target.value;
    setSearchText(text);
    onSearch(text);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for restaurants or cuisines..."
        value={searchText}
        onChange={handleSearch}
        className="search-input"
      />
      <button className="search-btn">
        <i className="fas fa-search"></i>
      </button>
    </div>
  );
};

const FilterButtons = ({ onFilter }) => {
  const filters = ["All", "Pizza", "Burger", "Healthy", "Indian", "Mexican", "Fast Food"];

  return (
    <div className="filter-buttons">
      {filters.map((filter, index) => (
        <button
          key={index}
          className="filter-btn"
          onClick={() => onFilter(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

const SpecialOffers = () => {
  const offers = [
    {
      id: 1,
      title: "Family Feast",
      description: "Get 30% off on orders above ₹999",
      icon: "👨‍👩‍👧‍👦",
      color: "#FF6B6B"
    },
    {
      id: 2,
      title: "Free Delivery",
      description: "Free delivery on first order",
      icon: "🚚",
      color: "#4ECDC4"
    },
    {
      id: 3,
      title: "Combo Deal",
      description: "Buy 1 Get 1 Free on selected items",
      icon: "🎯",
      color: "#45B7D1"
    },
    {
      id: 4,
      title: "Weekend Special",
      description: "Extra 20% off every weekend",
      icon: "🎉",
      color: "#96CEB4"
    }
  ];

  return (
    <section className="special-offers" id="Offers">
      <div className="container">
        <h2>Special Offers</h2>
        <div className="offers-grid">
          {offers.map(offer => (
            <div key={offer.id} className="offer-card" style={{ borderTop: `4px solid ${offer.color}` }}>
              <div className="offer-icon" style={{ backgroundColor: offer.color }}>
                {offer.icon}
              </div>
              <h3>{offer.title}</h3>
              <p>{offer.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FeaturedCategories = () => {
  const categories = [
    {
      name: "Pizza",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop",
      count: "120+ Items"
    },
    {
      name: "Burger",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop",
      count: "80+ Items"
    },
    {
      name: "Sushi",
      image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop",
      count: "60+ Items"
    },
    {
      name: "Desserts",
      image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop",
      count: "50+ Items"
    },
    {
      name: "Indian",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop",
      count: "200+ Items"
    },
    {
      name: "Healthy",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop",
      count: "90+ Items"
    }
  ];

  return (
    <section className="featured-categories">
      <div className="container">
        <h2>Featured Categories</h2>
        <div className="categories-grid">
          {categories.map((category, index) => (
            <div key={index} className="category-card">
              <img src={category.image} alt={category.name} />
              <div className="category-info">
                <h3>{category.name}</h3>
                <span>{category.count}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      comment: "The food was absolutely delicious! Delivery was quick and the packaging was great.",
      rating: 5,
      avatar: "👩"
    },
    {
      id: 2,
      name: "Mike Chen",
      comment: "Best pizza in town! Always fresh and tasty. Highly recommended!",
      rating: 4,
      avatar: "👨"
    },
    {
      id: 3,
      name: "Emily Davis",
      comment: "Healthy options are amazing! Perfect for my diet plan. Thank you!",
      rating: 5,
      avatar: "👩‍💼"
    }
  ];

  return (
    <section className="testimonials">
      <div className="container">
        <h2>What Our Customers Say</h2>
        <div className="testimonials-grid">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-header">
                <div className="avatar">{testimonial.avatar}</div>
                <div>
                  <h4>{testimonial.name}</h4>
                  <div className="stars">
                    {"⭐".repeat(testimonial.rating)}
                  </div>
                </div>
              </div>
              <p>"{testimonial.comment}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const DownloadApp = () => {
  return (
    <section className="download-app" id="About">
      <div className="container">
        <div className="app-content">
          <div className="app-info">
            <h2>Download Our App</h2>
            <p>Get exclusive offers and faster ordering with our mobile app</p>
            <div className="app-buttons">
              <button className="app-store-btn">
                <i className="fab fa-apple"></i>
                <div>
                  <span>Download on the</span>
                  <strong>App Store</strong>
                </div>
              </button>
              <button className="play-store-btn">
                <i className="fab fa-google-play"></i>
                <div>
                  <span>Get it on</span>
                  <strong>Google Play</strong>
                </div>
              </button>
            </div>
          </div>
          <div className="app-image">
            <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=400&fit=crop" alt="Mobile App" />
          </div>
        </div>
      </div>
    </section>
  );
};

// Updated Components
const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="hero-section">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === currentIndex ? "active" : ""}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="slide-content">
            <h1>{slide.title}</h1>
            <p>{slide.subtitle}</p>
            <button className="cta-button">Order Now</button>
          </div>
        </div>
      ))}

      <div className="dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={index === currentIndex ? "dot active" : "dot"}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="header" id="Home">
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

const RestrauntCard = ({ resData }) => {
  return (
    <div className="card" id="Menu">
      <div className="card-image">
        <img src={resData.image} alt={resData.name} />
        <div className="rating-badge">
          ⭐ {resData.rating}
        </div>
      </div>
      <div className="card-content">
        <h2>{resData.name}</h2>
        <h3>{resData.cusines.join(", ")}</h3>
        <button className="order-btn">Order Now</button>
      </div>
    </div>
  );
};

const Body = () => {
  const [filteredRestaurants, setFilteredRestaurants] = useState(restaurentList);
  const [searchText, setSearchText] = useState("");

  const handleSearch = (text) => {
    setSearchText(text);
    const filtered = restaurentList.filter(restaurant =>
      restaurant.name.toLowerCase().includes(text.toLowerCase()) ||
      restaurant.cusines.some(cuisine =>
        cuisine.toLowerCase().includes(text.toLowerCase())
      )
    );
    setFilteredRestaurants(filtered);
  };

  const handleFilter = (filter) => {
    if (filter === "All") {
      setFilteredRestaurants(restaurentList);
    } else {
      const filtered = restaurentList.filter(restaurant =>
        restaurant.cusines.some(cuisine =>
          cuisine.toLowerCase().includes(filter.toLowerCase())
        )
      );
      setFilteredRestaurants(filtered);
    }
  };

  return (
    <div className="body-section">
      <div className="container">
        <div className="body-header">
          <h2>Popular Restaurants</h2>
          <SearchBar onSearch={handleSearch} />
          <FilterButtons onFilter={handleFilter} />
        </div>

        <div className="restaurent-list">
          {filteredRestaurants.map((restaurant, index) => (
            <RestrauntCard key={index} resData={restaurant} />
          ))}
        </div>

        {filteredRestaurants.length === 0 && (
          <div className="no-results">
            <h3>No restaurants found</h3>
            <p>Try adjusting your search or filter</p>
          </div>
        )}
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer>
      <div className="container" id="Contact">
        <div className="footer-content">
          <div className="footer-section">
            <h2>Healthy Restaurant</h2>
            <p>Discover your favorite meals and order online easily!</p>
            <div className="footer-socials">
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-linkedin"></i></a>
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

const AppLayout = () => {
  return (
    <>
      <Header />
      <Hero />
      <SpecialOffers />
      <FeaturedCategories />
      <Body />
      <Testimonials />
      <DownloadApp />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

export default AppLayout;