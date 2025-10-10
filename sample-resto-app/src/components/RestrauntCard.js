
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


export default RestrauntCard;