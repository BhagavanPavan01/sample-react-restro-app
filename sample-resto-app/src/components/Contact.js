import React, { useState } from 'react';
import { contactData } from "./Constants";

const Contact = () => {
  const { hero, info, form, map } = contactData;
  const [formData, setFormData] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({});
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <div className="contact-hero">
        <div className="contact-hero-content">
          <h1 className="contact-title">{hero.title}</h1>
          <p className="contact-subtitle">{hero.subtitle}</p>
        </div>
      </div>

      <div className="contact-container">
        {/* Contact Info */}
        <section className="contact-info-section">
          <div className="container">
            <h2 className="section-title">{info.title}</h2>
            <div className="contact-info-grid">
              {info.items.map((item, index) => (
                <div key={index} className="contact-info-card">
                  <div className="contact-icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p className="contact-detail">{item.details}</p>
                  <p className="contact-description">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form and Map */}
        <div className="contact-form-map">
          <div className="container">
            <div className="form-map-grid">
              {/* Contact Form */}
              <section className="contact-form-section">
                <h2 className="section-title">{form.title}</h2>
                <form className="contact-form" onSubmit={handleSubmit}>
                  {form.fields.map((field, index) => (
                    <div key={index} className="form-group">
                      {field.type === 'textarea' ? (
                        <textarea
                          name={field.name}
                          placeholder={field.placeholder}
                          required={field.required}
                          value={formData[field.name] || ''}
                          onChange={handleInputChange}
                          rows="5"
                        />
                      ) : (
                        <input
                          type={field.type}
                          name={field.name}
                          placeholder={field.placeholder}
                          required={field.required}
                          value={formData[field.name] || ''}
                          onChange={handleInputChange}
                        />
                      )}
                    </div>
                  ))}
                  <button type="submit" className="submit-btn">
                    {form.submitText}
                  </button>
                </form>
              </section>

              {/* Map Section */}
              <section className="map-section">
                <h2 className="section-title">{map.title}</h2>
                <div className="map-container">
                  <iframe
                    src={map.embedUrl}
                    width="100%"
                    height="400"
                    style={{ border: 0, borderRadius: '15px' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Restaurant Location"
                  ></iframe>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;