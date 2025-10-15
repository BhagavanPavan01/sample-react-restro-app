import React from 'react';
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
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Offers from "./components/Offers";

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

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />
  },
  {
    path: "/Offers",
    element: <Offers />
  }
]);


const App = () => <RouterProvider router={appRouter} />;
export default App; 

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <RouterProvider router={appRouter} />
//   </React.StrictMode>
// );