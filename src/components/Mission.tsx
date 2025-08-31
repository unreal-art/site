import React from 'react';

const Mission: React.FC = () => {
  return (
    <section className="section section-mission" id="mission" data-theme-section="dark">
      <div className="container">
        <div className="row split">
          <div className="col">
            <h3><span>Our Mission</span></h3>
            <div className="draw-line">
              <svg width="280" height="140" viewBox="0 0 280 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1 1C28.5 12.8 52.3 25.6 76.8 40.2C103.2 56.1 130.1 74.3 149.8 98.7C155.8 106.8 162.9 117.2 162.7 127.8C162.6 134.5 154.2 140.1 148.7 141.8C139.5 144.6 127.8 143.0 119.1 139.3C112.3 136.5 100.9 129.2 100.9 120.8C100.9 106.1 132.4 104.0 140.9 103.0C182.7 98.2 225.3 105.2 266 117.1"
                  stroke="#8788f4" 
                  strokeWidth="2" 
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="row split">
          <div className="col">
            <div className="mission-content">
              <div className="mission-title">
                <h4>Democratizing AI access through blockchain technology</h4>
              </div>
              
              <div className="mission-section">
                <h5 className="section-header">Breaking Down AI Barriers</h5>
                <p className="section-description">
                  To create a unified ecosystem where one token grants access to all AI tools. We're building the infrastructure for the next generation of AI-powered applications, eliminating fragmentation and making advanced AI accessible to everyone.
                </p>
              </div>

              <div className="mission-pillars">
                <div className="pillar">
                  <div className="pillar-icon">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="20" cy="20" r="18" stroke="#8788f4" strokeWidth="2" fill="none"/>
                      <path d="M12 20h16M20 12v16" stroke="#8788f4" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <h6>Universal Access</h6>
                  <p>One platform, one token - breaking down barriers between different AI tools and services.</p>
                </div>

                <div className="pillar">
                  <div className="pillar-icon">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <polygon points="20,4 32,16 20,28 8,16" stroke="#8788f4" strokeWidth="2" fill="none"/>
                      <circle cx="20" cy="16" r="4" fill="#8788f4"/>
                    </svg>
                  </div>
                  <h6>Innovation First</h6>
                  <p>Pushing the boundaries of what's possible when AI meets blockchain technology.</p>
                </div>

                <div className="pillar">
                  <div className="pillar-icon">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="15" cy="15" r="6" stroke="#8788f4" strokeWidth="2" fill="none"/>
                      <circle cx="25" cy="15" r="6" stroke="#8788f4" strokeWidth="2" fill="none"/>
                      <circle cx="20" cy="25" r="6" stroke="#8788f4" strokeWidth="2" fill="none"/>
                    </svg>
                  </div>
                  <h6>Community Driven</h6>
                  <p>Built by creators, for creators - powered by the community that uses it.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col">
            <div className="vision-content">
              <div className="vision-section">
                <h5 className="section-header">Our Vision</h5>
                <div className="vision-description">
                  <p>
                    A world where AI innovation isn't limited by fragmented tools, complex integrations, or financial barriers. Where creators can focus on building the future instead of managing multiple subscriptions and APIs. Where one token powers an infinite studio of possibilities.
                  </p>
                </div>
              </div>

              <div className="vision-highlight">
                <div className="highlight-content">
                  <h4>One Token.<br/>Infinite Possibilities.</h4>
                  <p>Join us in building the future of AI economy</p>
                </div>
                <div className="btn btn-primary">
                  <a href="https://art.unreal.art" className="btn-click">
                    <div className="btn-content"><span>Get Started</span></div>
                    <div className="btn-arrow">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <polyline points="14 19 21 12 14 5" fill="none" stroke="#000" strokeMiterlimit="10"/>
                        <line x1="21" y1="12" x2="2" y2="12" fill="none" stroke="#000" strokeMiterlimit="10"/>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;