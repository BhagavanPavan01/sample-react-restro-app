
const DownloadApp = () => {
  return (
    <section className="download-app" id="About">
      <div className="container">
        <div className="app-content">
          <div className="app-info">
            <h2>Download Our App</h2>
            <p>Get exclusive offers and faster ordering with our mobile app</p>
            <div className="app-buttons">
              <button className="app-store-btn">
                <i className="fab fa-apple"></i>
                <div>
                  <span>Download on the</span>
                  <strong>App Store</strong>
                </div>
              </button>
              <button className="play-store-btn">
                <i className="fab fa-google-play"></i>
                <div>
                  <span>Get it on</span>
                  <strong>Google Play</strong>
                </div>
              </button>
            </div>
          </div>
          <div className="app-image">
            <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=400&fit=crop" alt="Mobile App" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;