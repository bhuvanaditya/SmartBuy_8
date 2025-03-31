import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import './PetProducts.scss';

const PetProductsList = [
  {
    id: 301,
    name: "Premium Organic Dog Food (15 lbs)",
    category: "Dog Food",
    reviews: 387,
    price: 59.99,
    discountedPrice: 49.99,
    image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80"
  },
  {
    id: 302,
    name: "Interactive Cat Toy with Feathers",
    category: "Cat Toys",
    reviews: 249,
    price: 24.99,
    discountedPrice: 19.99,
    image: "https://images.unsplash.com/photo-1610030469668-17fe3a8c9827?ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80"
  },
  {
    id: 303,
    name: "Small Animal Exercise Wheel",
    category: "Small Pets",
    reviews: 142,
    price: 29.99,
    discountedPrice: 24.99,
    image: "https://images.unsplash.com/photo-1535591582-5e658dc50a1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80"
  },
  {
    id: 304,
    name: "Tropical Fish Food & Water Conditioner Kit",
    category: "Fish",
    reviews: 118,
    price: 19.99,
    discountedPrice: 15.99,
    image: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80"
  },
  {
    id: 305,
    name: "Bird Cage with Play Gym and Feeder",
    category: "Birds",
    reviews: 98,
    price: 89.99,
    discountedPrice: 74.99,
    image: "https://images.unsplash.com/photo-1520808663317-647b476a81b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80"
  },
  {
    id: 306,
    name: "Orthopedic Pet Bed with Memory Foam",
    category: "Bedding",
    reviews: 305,
    price: 79.99,
    discountedPrice: 64.99,
    image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80"
  }
];

const PetCategories = [
  {
    id: 1,
    title: "Dogs",
    icon: "bi-award",
    image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80",
    link: "/pets/dogs"
  },
  {
    id: 2,
    title: "Cats",
    icon: "bi-stars",
    image: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80",
    link: "/pets/cats"
  },
  {
    id: 3,
    title: "Fish",
    icon: "bi-water",
    image: "https://images.unsplash.com/photo-1520302519239-d96ebbc0ecc4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80",
    link: "/pets/fish"
  },
  {
    id: 4,
    title: "Birds",
    icon: "bi-wind",
    image: "https://images.unsplash.com/photo-1452570053594-1b985d6ea890?ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80",
    link: "/pets/birds"
  },
  {
    id: 5,
    title: "Small Pets",
    icon: "bi-bug",
    image: "https://images.unsplash.com/photo-1591561582301-7ce7d57e48d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80",
    link: "/pets/small-pets"
  },
  {
    id: 6,
    title: "Reptiles",
    icon: "bi-droplet",
    image: "https://images.unsplash.com/photo-1603575784760-b31805c5c389?ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80",
    link: "/pets/reptiles"
  }
];

// Renamed the component function to PetProductsPage to avoid name collision
const PetProductsPage = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const handleProductClick = (product: any) => {
    navigate(`/product/${product.id}`, { 
      state: { 
        product,
        category: 'pets'
      } 
    });
  };

  const navigateToCategory = (category: string) => {
    navigate(category);
  };

  return (
    <div className="pet-products-page">
      {/* Hero Banner */}
      <div className="hero-banner">
        <div className="hero-overlay"></div>
        <img 
          src="https://images.unsplash.com/photo-1560743641-3914f2c45636?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
          alt="Pet Products Banner"
          className="hero-image"
        />
        <div className="banner-content">
          <div className="banner-text">
            <h1>Pet Products</h1>
            <h2>Everything your furry friends need</h2>
            
            <div className="promo-badge">New Arrivals</div>
            
            <div className="offer-banner">
              <h3>30% Off First Order</h3>
              <p>on premium pet food, toys, and accessories</p>
              <button className="shop-now-btn" onClick={() => navigate('/deals')}>
                Shop Pet Essentials
                <i className="bi bi-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Category Circles */}
      <div className="container">
        <h2 className="section-title">Shop by Pet</h2>
        <div className="category-circles">
          {PetCategories.map((category) => (
            <div 
              key={category.id} 
              className="category-circle"
              onClick={() => navigateToCategory(category.link)}
            >
              <div className="circle-image">
                <img src={category.image} alt={category.title} />
                <div className="circle-overlay">
                  <i className={`bi ${category.icon}`}></i>
                </div>
              </div>
              <h3>{category.title}</h3>
            </div>
          ))}
        </div>
      </div>
      
      {/* Featured Deals */}
      <div className="container">
        <div className="deals-banner">
          <div className="deals-content">
            <div className="deals-badge">Wellness Sale</div>
            <h2>Healthy Pet, Happy Home</h2>
            <p>Save on premium nutrition, supplements and wellness products for your pets.</p>
            <button className="view-all-btn" onClick={() => navigate('/deals')}>
              Browse Wellness Products
              <i className="bi bi-arrow-right"></i>
            </button>
          </div>
          <div className="deals-image">
            <img src="https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Pet Wellness Products" />
          </div>
        </div>
      </div>
      
      {/* Featured Products */}
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Pet Products</h2>
          <button className="view-all-products" onClick={() => navigate('/pets/all')}>
            View All
            <i className="bi bi-arrow-right"></i>
          </button>
        </div>
        
        <div className="products-grid">
          {PetProductsList.map((product) => (
            <div 
              key={product.id} 
              className="product-card"
              onClick={() => handleProductClick(product)}
            >
              <div className="card-inner">
                <div className="product-image">
                  {product.discountedPrice && (
                    <div className="discount-tag">
                      -{Math.round(((product.price - product.discountedPrice) / product.price) * 100)}%
                    </div>
                  )}
                  <img src={product.image} alt={product.name} />
                  <div className="quick-actions">
                    <button 
                      className="quick-view"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleProductClick(product);
                      }}
                    >
                      <i className="bi bi-eye"></i>
                    </button>
                    <button 
                      className="quick-add"
                      onClick={(e) => {
                        e.stopPropagation();
                        addToCart({
                          id: product.id.toString(),
                          name: product.name,
                          price: product.discountedPrice || product.price,
                          image: product.image,
                          quantity: 1
                        });
                      }}
                    >
                      <i className="bi bi-cart-plus"></i>
                    </button>
                  </div>
                </div>
                <div className="product-info">
                  <div className="product-category">{product.category}</div>
                  <h3>{product.name}</h3>
                  <div className="product-meta">
                    <div className="reviews">
                      <div className="stars">
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-half"></i>
                      </div>
                      <span>{product.reviews} Reviews</span>
                    </div>
                  </div>
                  <div className="product-price">
                    {product.discountedPrice ? (
                      <>
                        <span className="original-price">${product.price.toFixed(2)}</span>
                        <span className="current-price">${product.discountedPrice.toFixed(2)}</span>
                      </>
                    ) : (
                      <span className="current-price">${product.price.toFixed(2)}</span>
                    )}
                  </div>
                  <button className="add-to-cart-btn">
                    Add to Cart
                    <i className="bi bi-cart-plus"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Export with the original name to maintain consistency with imports
export default PetProductsPage;