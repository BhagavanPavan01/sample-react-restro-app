
const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      comment: "The food was absolutely delicious! Delivery was quick and the packaging was great.",
      rating: 5,
      avatar: "👩"
    },
    {
      id: 2,
      name: "Mike Chen",
      comment: "Best pizza in town! Always fresh and tasty. Highly recommended!",
      rating: 4,
      avatar: "👨"
    },
    {
      id: 3,
      name: "Emily Davis",
      comment: "Healthy options are amazing! Perfect for my diet plan. Thank you!",
      rating: 5,
      avatar: "👩‍💼"
    }
  ];

  return (
    <section className="testimonials">
      <div className="container">
        <h2>What Our Customers Say</h2>
        <div className="testimonials-grid">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-header">
                <div className="avatar">{testimonial.avatar}</div>
                <div>
                  <h4>{testimonial.name}</h4>
                  <div className="stars">
                    {"⭐".repeat(testimonial.rating)}
                  </div>
                </div>
              </div>
              <p>"{testimonial.comment}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default Testimonials;