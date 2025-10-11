import React from "react";

const RestrauntCard = ({ resData }) => {
  // Handle both API and local mock formats
  const data = resData?.info ?? resData ?? {};

  const {
    name = "Unknown Restaurant",
    cuisines = [],
    avgRating,
    cloudinaryImageId,
    areaName,
    sla,
  } = data;

  return (
    <div className="restaurant-card">
      <img
        src={
          cloudinaryImageId
            ? `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`
            : "https://via.placeholder.com/200x150?text=No+Image"
        }
        alt={name}
        className="restaurant-img"
      />

      <h3>{name}</h3>
      <p>{Array.isArray(cuisines) ? cuisines.join(", ") : "Cuisine info unavailable"}</p>
      <p>⭐ {avgRating ?? "N/A"}</p>
      <p>{areaName ?? "Unknown Area"}</p>
      <p>{sla?.slaString ?? ""}</p>
    </div>
  );
};

export default RestrauntCard;
