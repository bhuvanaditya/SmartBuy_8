import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import './Electronics.scss';

const ElectronicsProducts = [
  {
    id: 101,
    name: "Samsung 55\" 4K QLED Smart TV",
    category: "TVs",
    reviews: 345,
    price: 699.99,
    discountedPrice: 599.99,
    image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80"
  },
  {
    id: 102,
    name: "Apple MacBook Air 13\" M2",
    category: "Laptops",
    reviews: 412,
    price: 999.99,
    discountedPrice: 899.99,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80"
  },
  {
    id: 103,
    name: "Sony WH-1000XM5 Noise Cancelling Headphones",
    category: "Audio",
    reviews: 278,
    price: 349.99,
    discountedPrice: 299.99,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80"
  },
  {
    id: 104,
    name: "Google Nest Smart Home Hub",
    category: "Smart Home",
    reviews: 189,
    price: 129.99,
    discountedPrice: 99.99,
    image: "https://images.unsplash.com/photo-1558002038-1055e2dae2d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80"
  },
  {
    id: 105,
    name: "Canon EOS R7 Mirrorless Camera",
    category: "Cameras",
    reviews: 156,
    price: 1499.99,
    discountedPrice: 1299.99,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80"
  },
  {
    id: 106,
    name: "Xbox Series X Console",
    category: "Gaming",
    reviews: 302,
    price: 499.99,
    discountedPrice: 469.99,
    image: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80"
  }
];

const ElectronicsCategories = [
  {
    id: 1,
    title: "TVs",
    icon: "bi-tv",
    image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80",
    link: "/electronics/tvs"
  },
  {
    id: 2,
    title: "Laptops",
    icon: "bi-laptop",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80",
    link: "/electronics/laptops"
  },
  {
    id: 3,
    title: "Audio",
    icon: "bi-headphones",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80",
    link: "/electronics/audio"
  },
  {
    id: 4,
    title: "Smart Home",
    icon: "bi-house-door",
    image: "https://images.unsplash.com/photo-1558002038-1055e2dae2d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80",
    link: "/electronics/smart-home"
  },
  {
    id: 5,
    title: "Cameras",
    icon: "bi-camera",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80",
    link: "/electronics/cameras"
  },
  {
    id: 6,
    title: "Gaming",
    icon: "bi-controller",
    image: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80",
    link: "/electronics/gaming"
  }
];

const Electronics = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const handleProductClick = (product: any) => {
    navigate(`/product/${product.id}`, { 
      state: { 
        product,
        category: 'electronics'
      } 
    });
  };

  const navigateToCategory = (category: string) => {
    navigate(category);
  };

  return (
    <div className="electronics-page">
      {/* Hero Banner */}
      <div className="hero-banner">
        <div className="hero-overlay"></div>
        <img 
          src="https://images.unsplash.com/photo-1550009158-9ebf69173e03?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
          alt="Electronics Banner"
          className="hero-image"
        />
        <div className="banner-content">
          <div className="banner-text">
            <h1>Electronics</h1>
            <h2>The latest in tech at unbeatable prices</h2>
            
            <div className="promo-badge">Limited Time Offer</div>
            
            <div className="offer-banner">
              <h3>Save up to $500</h3>
              <p>on select TVs, laptops, and smart home devices</p>
              <button className="shop-now-btn" onClick={() => navigate('/deals')}>
                Shop Deals Now
                <i className="bi bi-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Category Circles */}
      <div className="container">
        <h2 className="section-title">Browse Categories</h2>
        <div className="category-circles">
          {ElectronicsCategories.map((category) => (
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
            <div className="deals-badge">Hot Deals</div>
            <h2>Limited Time Offers</h2>
            <p>Save big on these top electronics. Hurry, offers end soon!</p>
            <button className="view-all-btn" onClick={() => navigate('/deals')}>
              View All Deals
              <i className="bi bi-arrow-right"></i>
            </button>
          </div>
          <div className="deals-image">
            <img src="https://images.unsplash.com/photo-1550009158-9ebf69173e03?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Electronics Deals" />
          </div>
        </div>
      </div>
      
      {/* Featured Products */}
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Electronics</h2>
          <button className="view-all-products" onClick={() => navigate('/electronics/all')}>
            View All
            <i className="bi bi-arrow-right"></i>
          </button>
        </div>
        
        <div className="products-grid">
          {ElectronicsProducts.map((product) => (
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

export default Electronics;