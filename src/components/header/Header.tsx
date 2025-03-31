import { Link, useLocation } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { useCart } from '../../contexts/CartContext';
import './Header.scss';

export const Header = () => {
  const location = useLocation();
  const { isAuthenticated, loginWithPopup, logout } = useAuth0();
  const { items } = useCart();
  const cartItemsCount = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="main-header">
      <div className="top-banner">
        <div className="container">
          <p>SPRING SALE: Up to 50% OFF select items! Limited time only.</p>
        </div>
      </div>
      
      <div className="header-main container">
        <div className="logo-container">
          <Link to="/" className="smart-buy-logo">
            <div className="logo-icon">SB</div>
            <span className="logo-text">SMART<span className="logo-highlight">BUY</span></span>
          </Link>
        </div>
        
        <div className="search-container">
          <input type="text" placeholder="Search products..." />
          <button className="search-btn">
            <i className="bi bi-search"></i>
          </button>
        </div>
        
        <div className="header-actions">
          {isAuthenticated ? (
            <div className="account-menu">
              <button className="action-btn">
                <i className="bi bi-person-fill"></i>
                <span>Account</span>
              </button>
              <div className="dropdown-menu">
                <Link to="/profile">My Profile</Link>
                <Link to="/orders">My Orders</Link>
                <Link to="/personalized">Personalized</Link>
                <button 
                  onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
                >
                  Sign Out
                </button>
              </div>
            </div>
          ) : (
            <button 
              className="action-btn"
              onClick={() => loginWithPopup()}
            >
              <i className="bi bi-person"></i>
              <span>Sign In</span>
            </button>
          )}
          
          <Link to="/cart" className="action-btn">
            <i className="bi bi-cart3"></i>
            <span>Cart</span>
            {cartItemsCount > 0 && <span className="cart-count">{cartItemsCount}</span>}
          </Link>
        </div>
      </div>
      
      <nav className="main-nav">
        <div className="container">
          <ul className="nav-links">
            <li>
              <Link 
                to="/" 
                className={location.pathname === '/' ? 'active' : ''}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/electronics" 
                className={location.pathname === '/electronics' ? 'active' : ''}
              >
                Electronics
              </Link>
            </li>
            <li>
              <Link 
                to="/clothing"
                className={location.pathname === '/clothing' ? 'active' : ''}
              >
                Clothing
              </Link>
            </li>
            <li>
              <Link 
                to="/petsupplies"
                className={location.pathname === '/petsupplies' ? 'active' : ''}
              >
                Pet Supplies
              </Link>
            </li>
            
            <li>
              <Link 
                to="/instore"
                className={location.pathname === '/instore' ? 'active' : ''}
              >
                Services
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
export default Header;