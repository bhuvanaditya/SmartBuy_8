import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import './Clothing.scss';

const ClothingProducts = [
  {
    id: 201,
    name: "Men's Classic Fit Crew Neck T-Shirt",
    category: "Men's",
    reviews: 189,
    price: 19.99,
    image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80"
  },
  {
    id: 202,
    name: "Women's Stretch Slim Jeans",
    category: "Women's",
    reviews: 243,
    price: 49.99,
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80"
  },
  {
    id: 203,
    name: "Kids' Colorblock Hoodie",
    category: "Kids'",
    reviews: 126,
    price: 29.99,
    image: "https://images.unsplash.com/photo-1519238360530-d5035985d50a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80"
  },
  {
    id: 204,
    name: "Women's Summer Floral Dress",
    category: "Women's",
    reviews: 178,
    price: 39.99,
    image: "https://images.unsplash.com/photo-1546635834-78554e816d55?ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80"
  }
];

const ClothingCategories = [
  {
    id: 1,
    title: "Men's",
    image: "https://images.unsplash.com/photo-1516826957135-700dedea698c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80"
  },
  {
    id: 2,
    title: "Women's",
    image: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80"
  },
  {
    id: 3,
    title: "Kids'",
    image: "https://images.unsplash.com/photo-1519238360530-d5035985d50a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80"
  },
  {
    id: 4,
    title: "Accessories",
    image: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80"
  }
];

const Clothing = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const handleProductClick = (product: any) => {
    navigate(`/product/${product.id}`, { 
      state: { 
        product,
        category: 'clothing'
      } 
    });
  };

  return (
    <div className="clothing-page">
      <div className="hero-banner">
        <div className="hero-overlay"></div>
        <img 
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
          alt="Clothing Banner"
          className="hero-image"
        />
        <div className="banner-content">
          <div className="banner-text">
            <h1>Clothing & Apparel</h1>
            <h2>Style for everyone, every season</h2>
            <div className="offer-banner">
              <h3>Spring Sale</h3>
              <p>Up to 40% off on new arrivals</p>
              <button className="shop-now-btn">Shop Now</button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container">
        <h2 className="section-title">Shop by Category</h2>
        <div className="category-grid row">
          {ClothingCategories.map((category) => (
            <div key={category.id} className="category-card col-6 col-md-3">
              <div className="card-inner">
                <img src={category.image} alt={category.title} />
                <h3>{category.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="container">
        <h2 className="section-title">Trending Now</h2>
        <div className="trend-banners row">
          <div className="col-12 col-md-6">
            <div className="trend-banner">
              <img src="https://images.unsplash.com/photo-1579447745662-e9b979549638?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Spring Essentials" />
              <div className="trend-content">
                <h3>Spring Essentials</h3>
                <button>Shop Now</button>
              </div>
            </div>
          </div>
          
          <div className="col-12 col-md-6">
            <div className="trend-banner">
              <img src="https://images.unsplash.com/photo-1526406915894-7bcd65f60845?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Activewear" />
              <div className="trend-content">
                <h3>Activewear</h3>
                <button>Shop Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container">
        <h2 className="section-title">Featured Clothing</h2>
        <div className="products-grid row">
          {ClothingProducts.map((product) => (
            <div 
              key={product.id} 
              className="product-card col-12 col-sm-6 col-lg-3"
              onClick={() => handleProductClick(product)}
            >
              <div className="card-inner">
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="product-info">
                  <div className="product-category">{product.category}</div>
                  <h3>{product.name}</h3>
                  <div className="product-meta">
                    <span className="reviews">{product.reviews} Reviews</span>
                  </div>
                  <div className="price">${product.price.toFixed(2)}</div>
                  <div className="product-actions">
                    <button 
                      className="view-details"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleProductClick(product);
                      }}
                    >
                      View Details
                    </button>
                    <button 
                      className="add-to-cart"
                      onClick={(e) => {
                        e.stopPropagation();
                        addToCart({
                          id: product.id.toString(),
                          name: product.name,
                          price: product.price,
                          image: product.image,
                          quantity: 1
                        });
                      }}
                    >
                      <i className="bi bi-cart-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clothing;