

const FeaturedCategories = () => {
  const categories = [
    {
      name: "Pizza",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop",
      count: "120+ Items"
    },
    {
      name: "Burger",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop",
      count: "80+ Items"
    },
    {
      name: "Sushi",
      image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop",
      count: "60+ Items"
    },
    {
      name: "Desserts",
      image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop",
      count: "50+ Items"
    },
    {
      name: "Indian",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop",
      count: "200+ Items"
    },
    {
      name: "Healthy",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop",
      count: "90+ Items"
    }
  ];

  return (
    <section className="featured-categories">
      <div className="container">
        <h2>Featured Categories</h2>
        <div className="categories-grid">
          {categories.map((category, index) => (
            <div key={index} className="category-card">
              <img src={category.image} alt={category.name} />
              <div className="category-info">
                <h3>{category.name}</h3>
                <span>{category.count}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default FeaturedCategories;