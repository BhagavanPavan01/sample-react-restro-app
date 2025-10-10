
import React, { useState} from 'react';
import {restaurentList} from "./Constants";
import SearchBar from './SearchBar';
import FilterButtons from './FilterButtons';
import RestrauntCard from './RestrauntCard';


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


export default Body;