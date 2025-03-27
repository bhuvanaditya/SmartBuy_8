import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import './Deals.scss';

const DealsOffers = [
  {
    id: 301,
    name: "Samsung 55\" 4K QLED Smart TV",
    category: "Electronics",
    originalPrice: 799.99,
    discountedPrice: 599.99,
    discountPercent: 25,
    image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80",
    expiresIn: "3 days",
    link: "/product/101"
  },
  {
    id: 302,
    name: "Apple MacBook Air 13\" M2",
    category: "Electronics",
    originalPrice: 1199.99,
    discountedPrice: 899.99,
    discountPercent: 25,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80",
    expiresIn: "5 days",
    link: "/product/102"
  },
  {
    id: 303,
    name: "Men's Classic Fit Crew Neck T-Shirt",
    category: "Clothing",
    originalPrice: 24.99,
    discountedPrice: 12.99,
    discountPercent: 48,
    image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80",
    expiresIn: "2 days",
    link: "/product/201"
  },
  {
    id: 304,
    name: "Women's Stretch Slim Jeans",
    category: "Clothing",
    originalPrice: 59.99,
    discountedPrice: 39.99,
    discountPercent: 33,
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80",
    expiresIn: "4 days",
    link: "/product/202"
  },
  {
    id: 305,
    name: "Purina Pro Plan Sensitive Skin & Stomach Dog Food",
    category: "Pet Supplies",
    originalPrice: 89.99,
    discountedPrice: 69.99,
    discountPercent: 22,
    image: "https://s7d2.scene7.com/is/image/PetSmart/5339575?$sclp-prd-main_large$",
    expiresIn: "7 days",
    link: "/product/1"
  },
  {
    id: 306,
    name: "Hill's Science Diet Sensitive Stomach Dog Food",
    category: "Pet Supplies",
    originalPrice: 83.99,
    discountedPrice: 64.99,
    discountPercent: 23,
    image: "https://s7d2.scene7.com/is/image/PetSmart/5154856?$sclp-prd-main_large$",
    expiresIn: "7 days",
    link: "/product/2"
  }
];

const DealsCategories = [
  {
    title: "Electronics Deals",
    image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    discount: "Up to 40% OFF",
    link: "/electronics"
  },
  {
    title: "Clothing Deals",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    discount: "Up to 50% OFF",
    link: "/clothing"
  },
  {
    title: "Pet Supplies Deals",
    image: "https://s7d2.scene7.com/is/image/PetSmart/WEB-2678953-Jan25_6TUS1_NewPet_DT",
    discount: "Buy 1 Get 1 50% OFF",
    link: "/dog"
  }
];

const Deals = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const handleProductClick = (deal: any) => {
    navigate(deal.link, {
      state: {
        product: {
          id: deal.id,
          name: deal.name,
          price: deal.originalPrice,
          discountedPrice: deal.discountedPrice,
          image: deal.image,
          category: deal.category
        },
        category: deal.category.toLowerCase()
      }
    });
  };

  return (
    <div className="deals-page">
      <div className="hero-banner">
        <img 
          src="https://images.unsplash.com/photo-1607083206968-13611e3d76db?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
          alt="Deals Banner"
        />
        <div className="banner-content">
          <div className="sale-label">Limited Time</div>
          <h1>SPRING MEGA SALE</h1>
          <h2>Up to 50% off storewide</h2>
          <p>Hurry! Deals end soon</p>
        </div>
      </div>
      
      <div className="deals-categories">
        <div className="container">
          <h2>Shop by Category</h2>
          <div className="categories-grid">
            {DealsCategories.map((category, index) => (
              <div 
                key={index} 
                className="category-card"
                onClick={() => navigate(category.link)}
              >
                <div className="discount-label">{category.discount}</div>
                <img src={category.image} alt={category.title} />
                <h3>{category.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="hot-deals">
        <div className="container">
          <h2>Hot Deals</h2>
          <p className="subtitle">Limited time offers - Don't miss out!</p>
          
          <div className="deals-grid">
            {DealsOffers.map((deal) => (
              <div 
                key={deal.id} 
                className="deal-card"
                onClick={() => handleProductClick(deal)}
              >
                <div className="deal-image">
                  <div className="discount-badge">-{deal.discountPercent}%</div>
                  <div className="expiry-badge">Ends in {deal.expiresIn}</div>
                  <img src={deal.image} alt={deal.name} />
                </div>
                <div className="deal-info">
                  <div className="deal-category">{deal.category}</div>
                  <h3>{deal.name}</h3>
                  <div className="deal-pricing">
                    <span className="original-price">${deal.originalPrice.toFixed(2)}</span>
                    <span className="discounted-price">${deal.discountedPrice.toFixed(2)}</span>
                  </div>
                  <div className="deal-actions">
                    <button 
                      className="view-details"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleProductClick(deal);
                      }}
                    >
                      View Details
                    </button>
                    <button 
                      className="add-to-cart"
                      onClick={(e) => {
                        e.stopPropagation();
                        addToCart({
                          id: deal.id.toString(),
                          name: deal.name,
                          price: deal.discountedPrice,
                          image: deal.image,
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
      </div>
      
      <div className="promo-banner">
        <div className="container">
          <div className="promo-content">
            <h2>Join SmartBuy Rewards</h2>
            <p>Sign up today and get $20 off your next purchase over $100</p>
            <button className="join-now-btn">Join Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deals;