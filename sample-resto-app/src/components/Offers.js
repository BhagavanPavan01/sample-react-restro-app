import React from 'react';

import { offers, popularOffers } from "./Constants";

const Offers = () => {
  return (
    <div className="offers-page">
      {/* Header Section */}
      <div className="offers-hero">
        <div className="offers-hero-content">
          <h1 className="offers-title">Exclusive Offers & Deals</h1>
          <p className="offers-subtitle">Don't miss out on these amazing discounts and special promotions</p>
        </div>
      </div>

      {/* Main Offers Grid */}
      <section className="offers-section">
        <h2 className="section-title">Hot Deals 🔥</h2>
        <div className="offers-grid">
          {offers.map(offer => (
            <div key={offer.id} className="offer-card" style={{ '--card-bg': offer.backgroundColor }}>
              <div className="offer-badge">{offer.type.replace('-', ' ')}</div>
              <div className="offer-discount">{offer.discount}</div>
              <h3 className="offer-title">{offer.title}</h3>
              <p className="offer-description">{offer.description}</p>
              <div className="offer-code">
                <span>Use Code: </span>
                <strong>{offer.code}</strong>
              </div>
              <div className="offer-validity">
                <span>Valid until: {offer.validUntil}</span>
              </div>
              <button className="offer-cta">Grab This Offer</button>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Offers */}
      <section className="popular-offers-section">
        <h2 className="section-title">Popular Offers ⭐</h2>
        <div className="popular-offers-grid">
          {popularOffers.map(offer => (
            <div key={offer.id} className="popular-offer-card">
              <div className="popular-offer-content">
                <div className="popular-offer-badge">{offer.type}</div>
                <h4 className="popular-offer-title">{offer.title}</h4>
                <p className="popular-offer-description">{offer.description}</p>
                <div className="popular-offer-code">
                  Code: <span>{offer.code}</span>
                </div>
                <div className="popular-offer-discount">{offer.discount} OFF</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How to Use Section */}
      <section className="how-to-use">
        <h2 className="section-title">How to Use Offers</h2>
        <div className="steps-container">
          <div className="step">
            <div className="step-number">1</div>
            <h4>Choose Your Offer</h4>
            <p>Select any offer that you like</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h4>Apply Code</h4>
            <p>Enter the promo code at checkout</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h4>Enjoy Savings</h4>
            <p>Get instant discount on your order</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Offers;