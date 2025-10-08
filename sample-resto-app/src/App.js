import ReactDOM from "react-dom/client";
import './App.css';
import React, { useState, useEffect } from "react";



const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1470&q=80",
    title: "Delicious Burgers",
    subtitle: "Try our freshly made juicy burgers today!",
  },
  {
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1470&q=80",
    title: "Tasty Pizzas",
    subtitle: "Hot and cheesy pizzas delivered to your door!",
  },
  {
    image:
      "https://www.asknestle.in/sites/default/files/2022-09/Healthy-Salad-Recipes-640x380.jpg",
    title: "Healthy Salads",
    subtitle: "Fresh, crisp, and nutritious salads every day!",
  },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 4 seconds
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
  return (
    <div className="header">
      <a href="/" style={{ textDecoration: "none" }}>
        <p>Restarent</p>
      </a>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const restaurentList = [
  {
    name: "Burger King",
    image:
      "https://b.zmtcdn.com/data/pictures/chains/8/18138658/6352f382ab83cd6c458c3ad6c6fd1d60_featured_v2.jpg",
    cusines: ["Burger", "American", "Fast Food"],
    rating: "4.3",
  },
  {
    name: "Pizza Hut",
    image:
      "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/veggie-supreme.4bbddf98eccea9929192db1494ba3678.1.jpg",
    cusines: ["Pizza", "Italian"],
    rating: "4.5",
  },
  {
    name: "Domino’s Pizza",
    image:
      "https://images.dominos.co.in/new_margherita_2502.jpg",
    cusines: ["Pizza", "Italian"],
    rating: "4.2",
  },
  {
    name: "KFC",
    image:
      "https://cdn.sanity.io/images/kbqq3e0r/production/8cab9a549a5bc09e4bcc391632d8640d495f4bd3-1200x667.png?w=3840&q=100",
    cusines: ["Chicken", "Fast Food", "American"],
    rating: "4.1",
  },
  {
    name: "Subway",
    image:
      "https://b.zmtcdn.com/data/pictures/chains/6/10556/09c94209d2359acc20ca8119d54f4a1c.jpg?fit=around|750:500&crop=750:500;*,*",
    cusines: ["Healthy", "Sandwich", "Salad"],
    rating: "4.4",
  },
  {
    name: "Taco Bell",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/RX_THUMBNAIL/IMAGES/VENDOR/2025/7/10/132ec6ef-0d70-4982-8502-2e5307a23dbf_11215.JPG",
    cusines: ["Mexican", "Wraps", "Tacos"],
    rating: "4.3",
  },
  {
    name: "The Great Indian Kitchen",
    image:
      "https://res.cloudinary.com/hz3gmuqw6/image/upload/c_fill,h_450,q_auto,w_710/f_auto/tk-traditional-indian-foods-to-taste-in-2022-phpEXAXNS",
    cusines: ["Indian", "Curry", "Thali"],
    rating: "4.6",
  },
  {
    name: "Sushi World",
    image:
      "https://sushiworld.ae/storage/383/conversions/Slider--cover.png",
    cusines: ["Japanese", "Sushi", "Seafood"],
    rating: "4.7",
  },
  {
    name: "Biryani By Kilo",
    image:
      "https://bbk-images-links.s3.ap-south-1.amazonaws.com/192p78iconbbk-luck.jpg",
    cusines: ["Biryani", "Hyderabadi", "Indian"],
    rating: "4.5",
  },
  {
    name: "Starbucks Coffee",
    image:
      "https://rukminim2.flixcart.com/image/480/480/xif0q/milk-drink-mix/g/w/h/250-frappuccino-creamy-mocha-delight-chilled-coffee-drink-original-imah7htzphhczybz.jpeg?q=90",
    cusines: ["Cafe", "Beverages", "Desserts"],
    rating: "4.6",
  },
];


const RestrauntCard = ({ resData }) => {
  return (
    <div className="card">
      <img src={resData.image} alt={resData.name} />
      <h2>{resData.name}</h2>
      <h3>{resData.cusines.join(", ")}</h3>
      <h4>⭐ {resData.rating}</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="restaurent-list">
      {restaurentList.map((restaurant, index) => (
        <RestrauntCard key={index} resData={restaurant} />
      ))}
    </div>
  );
};

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <h2>Healthy Restaurant</h2>
        <p>Discover your favorite meals and order online easily!</p>
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#menu">Menu</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer-socials">
          <a href="https://www.linkedin.com/feed/"><i className="fa-brands fa-facebook"></i></a>
          <a href="https://www.linkedin.com/feed/"><i className="fa-brands fa-twitter"></i></a>
          <a href="https://www.linkedin.com/feed/"><i className="fa-brands fa-instagram"></i></a>
          <a href="https://www.linkedin.com/feed/"><i className="fa-brands fa-linkedin"></i></a>
        </div>
      </div>
      <p className="footer-bottom">
        &copy; {new Date().getFullYear()} Healthy Restaurant. All rights reserved.
      </p>
    </footer>
  );
};


const AppLayout = () => {
  return (
    <>
      <Header />
      <Hero />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);



export default AppLayout;
