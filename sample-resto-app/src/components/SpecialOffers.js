

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


export default SpecialOffers;