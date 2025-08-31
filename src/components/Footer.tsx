import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="section footer" data-theme-section="dark">
      <div className="container">
        <div className="row split">
          <div className="col">
            <h3><span>Ready to Build<br/>the Future?</span></h3>
          </div>
          <div className="col">
            <div className="col-row styled-content">
              <h4>Join the Unreal Economy</h4>
              <p>
                Ready to participate in the tokenized AI economy? Join our community 
                and start earning $UNREAL tokens for AI job execution. Follow us on 
                social media for the latest updates.
              </p>
            </div>
            <div className="col-row">
              <div className="btn btn-primary">
                <a 
                  href="https://x.com/intent/follow?screen_name=ideomind" 
                  target="_blank" 
                  className="btn-click"
                >
                  <div className="btn-content"><span>@unrealeconomy</span></div>
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
    </footer>
  );
};

export default Footer;