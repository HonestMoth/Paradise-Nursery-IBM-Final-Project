import React, { useState } from 'react';
import ProductList from './ProductList';
import './App.css';
import AboutUs from './AboutUs';

function App() {
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true);

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="app-container">

      {!showProductList && (
        <main className="landing-page">

          <nav className="landing-nav">
            <div className="brand">
              <div className="brand-icon">✦</div>

              <div>
                <h3>Paradise Nursery</h3>
                <span>Botanical Living</span>
              </div>
            </div>

            <button
              className="nav-shop-button"
              onClick={handleGetStartedClick}
            >
              Explore Plants →
            </button>
          </nav>

          <section className="hero-section">

            <div className="hero-content">

              <div className="hero-tag">
                <span></span>
                CURATED GREENERY
              </div>

              <h1>
                Bring Nature
                <br />
                <em>Closer to Home.</em>
              </h1>

              <p>
                Thoughtfully selected plants designed to transform
                everyday spaces into calm, living sanctuaries.
              </p>

              <div className="hero-actions">
                <button
  className="primary-button"
  onClick={handleGetStartedClick}
>
  Get Started
  <span>→</span>
</button>

                <button className="text-button">
                  Discover our story
                </button>
              </div>

              <div className="hero-stats">
                <div>
                  <strong>30+</strong>
                  <span>Plant varieties</span>
                </div>

                <div>
                  <strong>5</strong>
                  <span>Plant collections</span>
                </div>

                <div>
                  <strong>100%</strong>
                  <span>Green lifestyle</span>
                </div>
              </div>

            </div>

            <div className="hero-visual">

              <div className="hero-image-card">
                <img
                  src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=85"
                  alt="Indoor plants"
                />
              </div>

              <div className="floating-note note-top">
                <span className="note-icon">🌿</span>

                <div>
                  <strong>Fresh & Natural</strong>
                  <p>Selected with care</p>
                </div>
              </div>

              <div className="floating-note note-bottom">
                <div className="plant-count">
                  30+
                </div>

                <div>
                  <strong>Green companions</strong>
                  <p>For every space</p>
                </div>
              </div>

              <div className="hero-circle"></div>

            </div>

          </section>

          <section className="about-section">
            <AboutUs />
          </section>

        </main>
      )}

      {showProductList && (
        <ProductList />
      )}

    </div>
  );
}

export default App;