 
 // Make sure this file exists or move CSS to global file

const Shimmer = () => {
  const shimmerCards = Array(12).fill(0);

  return (
    <div className="shimmer-section">
      <div className="container">
        <h2 className="shimmer-title">Wait for few seconds Loading Restaurants...</h2>
        <div className="restaurant-list shimmer-list">
          {shimmerCards.map((_, index) => (
            <div className="shimmer-card" key={index}>
              <div className="shimmer-image"></div>
              <div className="shimmer-content">
                <div className="shimmer-line short"></div>
                <div className="shimmer-line long"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shimmer;
