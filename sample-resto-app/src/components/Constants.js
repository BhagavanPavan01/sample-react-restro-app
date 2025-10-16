export const slides = [
  {
    image: "https://resizer.nationalworld.com/d704b9fb-75ef-43c5-b694-550e6dc9fdfd.jpeg?tr=w-900",
    title: "Delicious Burgers",
    subtitle: "Try our freshly made juicy burgers today!",
  },
  {
    image: "https://b.zmtcdn.com/data/pictures/chains/8/21226868/7c890de7dabe51ad19f987a851421c1b.jpeg?fit=around|960:500&crop=960:500;*,*",
    title: "Tasty Pizzas",
    subtitle: "Hot and cheesy pizzas delivered to your door!",
  },
  {
    image: "https://www.asknestle.in/sites/default/files/2022-09/Healthy-Salad-Recipes-640x380.jpg",
    title: "Healthy Salads",
    subtitle: "Fresh, crisp, and nutritious salads every day!",
  },
];

export const restaurentList = [
  // Your existing restaurant data remains the same
  {
    name: "A2B - Adyar Ananda Bhavan",
    cuisines: ["South Indian", "Desserts"],
    avgRating: "4.2",
    areaName: "Anna Nagar",
    cloudinaryImageId: "sample_image_id",
    sla: { slaString: "30 mins" },
  },
  {
    name: "Domino's Pizza",
    cuisines: ["Pizza", "Italian"],
    avgRating: "4.1",
    areaName: "T Nagar",
    cloudinaryImageId: "sample_image_id2",
    sla: { slaString: "25 mins" },
  },
  {
    name: "Burger King",
    image: "https://b.zmtcdn.com/data/pictures/chains/8/18138658/6352f382ab83cd6c458c3ad6c6fd1d60_featured_v2.jpg",
    cusines: ["Burger", "American", "Fast Food"],
    rating: "4.3",
  },
  {
    name: "Pizza Hut",
    image: "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/veggie-supreme.4bbddf98eccea9929192db1494ba3678.1.jpg",
    cusines: ["Pizza", "Italian"],
    rating: "4.5",
  },
  {
    name: "Domino's Pizza",
    image: "https://images.dominos.co.in/new_margherita_2502.jpg",
    cusines: ["Pizza", "Italian"],
    rating: "4.2",
  },
  {
    name: "KFC",
    image: "https://cdn.sanity.io/images/kbqq3e0r/production/8cab9a549a5bc09e4bcc391632d8640d495f4bd3-1200x667.png?w=3840&q=100",
    cusines: ["Chicken", "Fast Food", "American"],
    rating: "4.1",
  },
  {
    name: "Subway",
    image: "https://mma.prnewswire.com/media/2769047/Subway_Fresh_Fit.jpg?w=2700",
    cusines: ["Healthy", "Sandwich", "Salad"],
    rating: "4.4",
  },
  {
    name: "Taco Bell",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/RX_THUMBNAIL/IMAGES/VENDOR/2025/7/10/132ec6ef-0d70-4982-8502-2e5307a23dbf_11215.JPG",
    cusines: ["Mexican", "Wraps", "Tacos"],
    rating: "4.3",
  },
  {
    name: "The Great Indian Kitchen",
    image: "https://res.cloudinary.com/hz3gmuqw6/image/upload/c_fill,h_450,q_auto,w_710/f_auto/tk-traditional-indian-foods-to-taste-in-2022-phpEXAXNS",
    cusines: ["Indian", "Curry", "Thali"],
    rating: "4.6",
  },
  {
    name: "Sushi World",
    image: "https://sushiworld.ae/storage/383/conversions/Slider--cover.png",
    cusines: ["Japanese", "Sushi", "Seafood"],
    rating: "4.7",
  },
  {
    name: "Biryani By Kilo",
    image: "https://bbk-images-links.s3.ap-south-1.amazonaws.com/192p78iconbbk-luck.jpg",
    cusines: ["Biryani", "Hyderabadi", "Indian"],
    rating: "4.5",
  },
  {
    name: "Starbucks Coffee",
    image: "https://rukminim2.flixcart.com/image/480/480/xif0q/milk-drink-mix/g/w/h/250-frappuccino-creamy-mocha-delight-chilled-coffee-drink-original-imah7htzphhczybz.jpeg?q=90",
    cusines: ["Cafe", "Beverages", "Desserts"],
    rating: "4.6",
  },
];



export const offers = [
    {
      id: 1,
      title: "50% OFF on First Order",
      description: "New customers get 50% off on their first order above $25",
      code: "WELCOME50",
      validUntil: "Dec 31, 2024",
      discount: "50%",
      type: "new-customer",
      backgroundColor: "#ff6b6b"
    },
    {
      id: 2,
      title: "Free Delivery",
      description: "Free delivery on all orders above $50. No code needed!",
      code: "AUTOAPPLIED",
      validUntil: "Ongoing",
      discount: "FREE",
      type: "delivery",
      backgroundColor: "#4ecdc4"
    },
    {
      id: 3,
      title: "Buy 1 Get 1 Free",
      description: "Buy one pizza and get another one absolutely free",
      code: "BOGO50",
      validUntil: "Jan 15, 2025",
      discount: "BOGO",
      type: "bogo",
      backgroundColor: "#45b7d1"
    },
    {
      id: 4,
      title: "Weekend Special",
      description: "30% off on all orders during weekends",
      code: "WEEKEND30",
      validUntil: "Dec 31, 2024",
      discount: "30%",
      type: "weekend",
      backgroundColor: "#96ceb4"
    },
    {
      id: 5,
      title: "Family Deal",
      description: "Family bundle with 40% off on orders above $80",
      code: "FAMILY40",
      validUntil: "Jan 10, 2025",
      discount: "40%",
      type: "family",
      backgroundColor: "#feca57"
    },
    {
      id: 6,
      title: "Early Bird Offer",
      description: "25% off on orders placed before 12 PM",
      code: "EARLY25",
      validUntil: "Ongoing",
      discount: "25%",
      type: "early-bird",
      backgroundColor: "#ff9ff3"
    }
  ];

  export const popularOffers = [
    {
      id: 7,
      title: "Student Discount",
      description: "15% off for all students with valid ID",
      code: "STUDENT15",
      discount: "15%",
      type: "student"
    },
    {
      id: 8,
      title: "Combo Deal",
      description: "Pizza + Coke + Garlic Bread at 35% off",
      code: "COMBO35",
      discount: "35%",
      type: "combo"
    }
  ];


  // About Section Data
export const aboutData = {
  hero: {
    title: "Our Story",
    subtitle: "Serving delicious food with love since 2010"
  },
  story: {
    title: "From Humble Beginnings",
    content: [
      "Founded in 2010 by Chef Marco Romano, our restaurant started as a small family-owned kitchen with just 10 tables. Today, we serve over 1000 happy customers daily across multiple locations, but our commitment to quality and authentic flavors remains unchanged.",
      "We believe in using only the freshest ingredients, sourced locally from trusted farmers and suppliers. Every dish tells a story of tradition, passion, and culinary excellence."
    ],
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80"
  },
  values: {
    title: "Our Values",
    items: [
      {
        icon: "🌱",
        title: "Fresh Ingredients",
        description: "We use only the freshest, locally-sourced ingredients in all our dishes"
      },
      {
        icon: "👨‍🍳",
        title: "Expert Chefs",
        description: "Our team of experienced chefs brings years of culinary expertise"
      },
      {
        icon: "💚",
        title: "Sustainability",
        description: "Committed to eco-friendly practices and reducing our carbon footprint"
      },
      {
        icon: "🏆",
        title: "Quality",
        description: "Consistently delivering exceptional quality in every aspect of our service"
      }
    ]
  },
  team: {
    title: "Meet Our Team",
    members: [
      {
        name: "Marco Romano",
        position: "Head Chef & Founder",
        experience: "15+ years experience",
        image: "https://images.unsplash.com/photo-1583394293214-28ded15ee548?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Sophia Chen",
        position: "Executive Chef",
        experience: "Specializes in Italian cuisine",
        image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "David Wilson",
        position: "Restaurant Manager",
        experience: "Hospitality expert",
        image: "https://images.unsplash.com/photo-1566554273541-37a9ca77b91f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      }
    ]
  },
  stats: {
    items: [
      { number: "50K+", label: "Happy Customers" },
      { number: "12+", label: "Years Experience" },
      { number: "5", label: "Locations" },
      { number: "100+", label: "Menu Items" }
    ]
  }
};

// Contact Section Data
export const contactData = {
  hero: {
    title: "Get In Touch",
    subtitle: "We'd love to hear from you. Reach out to us for reservations, catering, or any questions."
  },
  info: {
    title: "Contact Information",
    items: [
      {
        icon: "📞",
        title: "Phone",
        details: "+1 (555) 123-4567",
        description: "Mon-Sun: 9:00 AM - 11:00 PM"
      },
      {
        icon: "✉️",
        title: "Email",
        details: "hello@restaurant.com",
        description: "We'll respond within 24 hours"
      },
      {
        icon: "📍",
        title: "Address",
        details: "123 Food Street, Culinary City",
        description: "Open in Google Maps"
      },
      {
        icon: "🕒",
        title: "Opening Hours",
        details: "Monday - Sunday",
        description: "11:00 AM - 11:00 PM"
      }
    ]
  },
  form: {
    title: "Send us a Message",
    fields: [
      { name: "name", type: "text", placeholder: "Your Name", required: true },
      { name: "email", type: "email", placeholder: "Your Email", required: true },
      { name: "phone", type: "tel", placeholder: "Your Phone", required: false },
      { name: "subject", type: "text", placeholder: "Subject", required: true },
      { name: "message", type: "textarea", placeholder: "Your Message", required: true }
    ],
    submitText: "Send Message"
  },
  map: {
    title: "Find Us Here",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.177631294649!2d-74.00594908459418!3d40.71278367933185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316e12b29d%3A0x1c1e1b1e1b1e1b1e!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1234567890"
  }
};