import React from 'react';

const About: React.FC = () => {
  return (
    <section className="section section-about" id="about" data-theme-section="dark">
      <div className="container">
        <div className="row split">
          <div className="col">
            <h3><span>About Unreal AI</span></h3>
            <div className="draw-line">
              <svg width="300" height="150" viewBox="0 0 300 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1 1C32.1 14.2 63.5 28.7 93.2 45.8C124.6 63.9 156.3 84.7 179.1 112.3C185.8 121.4 194.2 133.1 194.0 145.2C193.8 152.8 184.7 159.1 178.3 161.0C168.2 164.1 155.7 162.2 145.9 157.8C137.8 154.3 124.1 145.7 124.1 136.1C124.1 119.2 158.4 116.8 168.3 115.6C217.4 109.8 267.8 118.2 315 132.5"
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
            <div className="about-content">
              <div className="about-intro">
                <h4>The World's First Open AI Studio Powered by Crypto</h4>
                <p className="about-description">
                  We're building the future of AI accessibility through blockchain technology. One platform, one token, infinite possibilities.
                </p>
              </div>

              {/* Free Inference Highlight */}
              <div className="free-inference-highlight">
                <h5>🚀 FREE Unlimited Inference Until Q4 2025!</h5>
                <p>Token tiers are capped only by inference limits, not accessibility.</p>
                <p>Every Unreal user gets unlimited access to all AI tools with no restrictions until Q4 2025.</p>
              </div>

              {/* Mission Statement */}
              <div className="mission-statement">
                <h5>Our Mission</h5>
                <p>
                  To democratize AI access through blockchain technology, creating a unified ecosystem where one token grants access to all AI tools. We're building the infrastructure for the next generation of AI-powered applications.
                </p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="backers-content">
              <h5 className="section-header">Our Backers & Partners</h5>
              
              {/* Primary Backers */}
              <div className="primary-backers">
                <div className="backer-card">
                  <div className="backer-logo">
                    <img src="/static/logos/torus.png" alt="Torus Blockchain" />
                  </div>
                  <h6>Torus Blockchain</h6>
                  <p>Primary Blockchain Partner</p>
                </div>

                <div className="backer-card">
                  <div className="backer-logo">
                    <img src="/static/logos/neoma-ventures-logo.png" alt="Neoma Ventures" />
                  </div>
                  <h6>Neoma Ventures</h6>
                  <p>Marketing Partner</p>
                </div>

                <div className="backer-card">
                  <div className="backer-logo">
                    <img src="/static/logos/decenter-ai-logo.png" alt="DecenterAI" />
                  </div>
                  <h6>DecenterAI</h6>
                  <p>AI Infrastructure Partner</p>
                </div>
              </div>

              {/* Achievements */}
              <div className="achievements">
                <h6>Achievements</h6>
                <div className="achievement-item">
                  <div className="achievement-icon">🏆</div>
                  <div className="achievement-content">
                    <h6>Soonami Winner</h6>
                    <p>Won Soonami Venturethon 7 - Now part of Soonami Cohort 7</p>
                  </div>
                </div>

                <div className="achievement-item">
                  <div className="achievement-icon">🎖️</div>
                  <div className="achievement-content">
                    <h6>NEAR Protocol</h6>
                    <p>Selected for NEAR Protocol Rewards Cohort 1</p>
                  </div>
                </div>
              </div>

              {/* Soft Funded By */}
              <div className="soft-funders">
                <h6>Soft Funded By</h6>
                <div className="funder-logos">
                  <img src="/static/logos/aws-logo.png" alt="AWS" />
                  <img src="/static/logos/bacalhau-logo.png" alt="Bacalhau" />
                  <img src="/static/logos/intel-lifto-logo.png" alt="Intel Lifto" />
                  <img src="/static/logos/perplexity-logo.png" alt="Perplexity" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;