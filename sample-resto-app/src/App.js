import ReactDOM from "react-dom/client";
import './App.css';
import './Shimmer.css';
import SpecialOffers from "./components/SpecialOffers"
import FeaturedCategories from "./components/FeaturedCategories";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Body from "./components/Body";
import Testimonials from "./components/Testimonials";
import DownloadApp from "./components/DownloadApp";
import Footer from "./components/Footer";


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