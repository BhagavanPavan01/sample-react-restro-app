import React, { useState, useEffect } from "react";
import { restaurentList } from "./Constants";
import SearchBar from "./SearchBar";
import FilterButtons from "./FilterButtons";
import RestrauntCard from "./RestrauntCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [filteredRestaurants, setFilteredRestaurants] = useState(restaurentList);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true);

  // ✅ Search handler
  const handleSearch = (text) => {
    setSearchText(text);
    const filtered = restaurentList.filter(
      (restaurant) =>
        restaurant.name.toLowerCase().includes(text.toLowerCase()) ||
        restaurant.cuisines?.some((cuisine) =>
          cuisine.toLowerCase().includes(text.toLowerCase())
        )
    );
    setFilteredRestaurants(filtered);
  };

  // ✅ Fetch restaurant data from Swiggy API
  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    try {
      setLoading(true); // start shimmer

      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.08950&lng=80.27390&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      console.log("API Response:", json);

      // ✅ Extract restaurants safely
      const restaurants =
        json?.data?.cards
          ?.map((card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants)
          .filter(Boolean)
          .flat() ?? [];

      console.log("Extracted restaurants:", restaurants);
      setFilteredRestaurants(restaurants.length ? restaurants : restaurentList);
    } catch (error) {
      console.error("Error fetching restaurants:", error);
      setFilteredRestaurants(restaurentList);
    } finally {
      setLoading(false); // ✅ stop shimmer
    }
  }

  // ✅ Filter button handler
  const handleFilter = (filter) => {
    if (filter === "All") {
      setFilteredRestaurants(restaurentList);
    } else {
      const filtered = restaurentList.filter((restaurant) =>
        restaurant.cuisines?.some((cuisine) =>
          cuisine.toLowerCase().includes(filter.toLowerCase())
        )
      );
      setFilteredRestaurants(filtered);
    }
  };

  // ✅ Render section
  return (
    <div className="body-section" id="Menu">
      <div className="container">
        <div className="body-header">
          <h2>Popular Restaurants</h2>
          <SearchBar onSearch={handleSearch} />
          <FilterButtons onFilter={handleFilter} />
        </div>

        {/* ✅ Show shimmer while loading */}
        {loading ? (
          <Shimmer />
        ) : (
          <>
            <div className="restaurant-list">
              {Array.isArray(filteredRestaurants) &&
                filteredRestaurants.map((restaurant, index) => (
                  <RestrauntCard key={index} resData={restaurant} />
                ))}
            </div>

            {filteredRestaurants.length === 0 && (
              <div className="no-results">
                <h3>No restaurants found</h3>
                <p>Try adjusting your search or filter.</p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Body;
