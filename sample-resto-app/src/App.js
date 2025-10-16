import React from 'react';
import ReactDOM from "react-dom/client";
import './App.css';
import './Shimmer.css';
import './Offers.css';
import SpecialOffers from "./components/SpecialOffers";
import FeaturedCategories from "./components/FeaturedCategories";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Body from "./components/Body";
import Testimonials from "./components/Testimonials";
import DownloadApp from "./components/DownloadApp";
import About from "./components/About";
import Contact from './components/Contact';
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Offers from "./components/Offers";
import Error from "./components/Errors";

// Home Page Component with all sections
const HomePage = () => {
  return (
    <div className="home-page">
      <Hero />
      {/* <SpecialOffers />
      <FeaturedCategories />
      <Body /> */}
      <Testimonials />
      <DownloadApp />
    </div>
  );
};

// Main Layout Component
const AppLayout = () => {
  return (
    <div className="app-layout">
      <Header />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

// Router Configuration
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true, // This means it's the default child route
        element: <HomePage />
      },
      {
        path: "/home",
        element: <HomePage />
      },
      {
        path: "/menu",
        element: <Body />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/Contact",
        element: <Contact />
      },
      {
        path: "/offers",
        element: <Offers />
      }
    ]
  },
]);

// App Component
const App = () => {
  return <RouterProvider router={appRouter} />;
};

export default App;