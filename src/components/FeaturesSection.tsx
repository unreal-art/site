import React from 'react';

const FeaturesSection: React.FC = () => {
  return (
    <section className="section section-home-work-intro" data-theme-section="dark">
      <div className="container">
        <div className="row split">
          <div className="col">
            <h3>Our Features</h3>
          </div>
        </div>
        <div className="row split">
          <div className="col">
            <div className="col-row styled-content">
              <p>
                Deflationary tokenomics with utility-driven demand, cooperative governance model, 
                seamless AI job execution across any model or complexity, and transparent 
                token economics designed for sustainable growth.
              </p>
            </div>
            <div className="col-row">
              <div className="btn btn-primary">
                <a href="https://art.unreal.art" className="btn-click">
                  <div className="btn-content"><span>Launch App</span></div>
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
    </section>
  );
};

export default FeaturesSection;