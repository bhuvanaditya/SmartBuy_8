import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import ControlTray from '../components/control-tray/ControlTray';
import { useCart } from '../contexts/CartContext';
import './All.scss';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  discountedPrice?: number;
  image: string;
  link: string;
}

const FeaturedProducts = [
  {
    id: 101,
    name: "Samsung 55\" 4K QLED Smart TV",
    category: "Electronics",
    price: 699.99,
    discountedPrice: 599.99,
    image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80",
    link: "/product/101"
  },
  {
    id: 201,
    name: "Men's Classic Fit Crew Neck T-Shirt",
    category: "Clothing",
    price: 19.99,
    discountedPrice: 14.99,
    image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80",
    link: "/product/201"
  },
  {
    id: 1,
    name: "Purina Pro Plan Sensitive Skin & Stomach Adult Dry Dog Food",
    category: "Pet Supplies",
    price: 89.99,
    discountedPrice: 74.99,
    image: "https://s7d2.scene7.com/is/image/PetSmart/5339575?$sclp-prd-main_large$",
    link: "/product/1"
  },
  {
    id: 102,
    name: "Apple MacBook Air 13\" M2",
    category: "Electronics",
    price: 999.99,
    discountedPrice: 899.99,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80",
    link: "/product/102"
  },
  {
    id: 202,
    name: "Women's Stretch Slim Jeans",
    category: "Clothing",
    price: 49.99,
    discountedPrice: 39.99,
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80",
    link: "/product/202"
  },
  {
    id: 2,
    name: "Hill's® Science Diet® Sensitive Stomach & Skin Adult Dry Dog Food",
    category: "Pet Supplies",
    price: 83.99,
    discountedPrice: 69.99,
    image: "https://s7d2.scene7.com/is/image/PetSmart/5154856?$sclp-prd-main_large$",
    link: "/product/2"
  }
];

const ShopCategories = [
  {
    name: "Electronics",
    image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    link: "/electronics"
  },
  {
    name: "Clothing",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    link: "/clothing"
  },
  {
    name: "Pet Supplies",
    image: "https://s7d2.scene7.com/is/image/PetSmart/WEB-2678953-Jan25_6TUS1_NewPet_DT",
    link: "/dog"
  },
  {
    name: "Deals",
    image: "https://images.unsplash.com/photo-1607083206968-13611e3d76db?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    link: "/deals"
  }
];

const Services = [
  {
    name: "Free Delivery",
    description: "Free shipping on orders over $35",
    icon: "bi-truck",
    link: "/delivery"
  },
  {
    name: "Click & Collect",
    description: "Order online & pick up in-store",
    icon: "bi-shop",
    link: "/click-collect"
  },
  {
    name: "Easy Returns",
    description: "30-day hassle-free returns",
    icon: "bi-arrow-return-left",
    link: "/returns"
  },
  {
    name: "Price Match",
    description: "We'll match any verified price",
    icon: "bi-tag",
    link: "/price-match"
  }
];

const DealsSections = [
  {
    title: "Electronics Deals",
    description: "Save up to 40% on top tech",
    image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    link: "/electronics"
  },
  {
    title: "Clothing Clearance",
    description: "Up to 50% off select styles",
    image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    link: "/clothing"
  },
  {
    title: "Pet Essentials Sale",
    description: "Buy one get one 50% off",
    image: "https://s7d2.scene7.com/is/image/PetSmart/WEB-2644550-Feb25_4CU1_HP_FW01_DMA",
    link: "/dog"
  }
];

const All: React.FC = () => {
  const navigate = useNavigate();
  const { isAuthenticated, loginWithPopup } = useAuth0();
  const { addToCart } = useCart();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const handleProductClick = (product: Product) => {
    navigate(product.link, {
      state: {
        product,
        category: product.category.toLowerCase()
      }
    });
  };
  
  if (loading) return <div className="loading-message">Loading products...</div>;
  if (error) return <div className="error-message">Error: {error}</div>;
  
  return (
    <div className="home-page">
      {/* Control Tray */}
      
      
      {/* Hero Banner */}
      <section className="hero-banner">
        <img 
          src="https://images.unsplash.com/photo-1607083206968-13611e3d76db?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          alt="SmartBuy Spring Sale"
          className="banner-image"
        />
        <div className="banner-content">
          <h1>SPRING MEGA SALE</h1>
          <h2>Up to 50% off storewide</h2>
          <p>Limited time deals on electronics, clothing & pet supplies</p>
          <button className="shop-now-btn">Shop Now</button>
        </div>
      </section>
      
      {/* Categories Section */}
      <section className="categories-section">
        <div className="container">
          <h2>Shop by Category</h2>
          <div className="categories-grid">
            {ShopCategories.map((category, index) => (
              <div 
                key={index}
                className="category-card"
                onClick={() => navigate(category.link)}
              >
                <div className="image-container">
                  <img src={category.image} alt={category.name} />
                </div>
                <h3>{category.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <div className="services-grid">
            {Services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">
                  <i className={`bi ${service.icon}`}></i>
                </div>
                <div className="service-content">
                  <h3>{service.name}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Products */}
      <section className="featured-section">
        <div className="container">
          <h2>Featured Products</h2>
          <div className="featured-grid">
            {FeaturedProducts.map((product) => (
              <div 
                key={product.id}
                className="product-card"
                onClick={() => handleProductClick(product)}
              >
                <div className="product-image">
                  {product.discountedPrice && (
                    <span className="discount-badge">
                      {Math.round(((product.price - product.discountedPrice) / product.price) * 100)}% OFF
                    </span>
                  )}
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="product-info">
                  <div className="product-category">{product.category}</div>
                  <h3>{product.name}</h3>
                  <div className="product-pricing">
                    {product.discountedPrice ? (
                      <>
                        <span className="original-price">${product.price.toFixed(2)}</span>
                        <span className="discounted-price">${product.discountedPrice.toFixed(2)}</span>
                      </>
                    ) : (
                      <span className="price">${product.price.toFixed(2)}</span>
                    )}
                  </div>
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
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Deal Sections */}
      <section className="deals-section">
        <div className="container">
          <h2>Limited Time Offers</h2>
          <div className="deals-grid">
            {DealsSections.map((deal, index) => (
              <div key={index} className="deal-banner" onClick={() => navigate(deal.link)}>
                <img src={deal.image} alt={deal.title} />
                <div className="deal-content">
                  <h3>{deal.title}</h3>
                  <p>{deal.description}</p>
                  <button className="shop-deal-btn">Shop Now</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="container">
          <div className="newsletter-content">
            <h2>Subscribe for Exclusive Offers</h2>
            <p>Sign up for our newsletter and be the first to know about new products and special discounts.</p>
            <div className="newsletter-form">
              <input type="email" placeholder="Your email address" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default All;