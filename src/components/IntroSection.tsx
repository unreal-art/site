import React from "react"

const IntroSection: React.FC = () => {
  return (
    <section
      className="section section-intro section-intro-home"
      id="section-intro"
      data-theme-section="dark"
    >
      <div className="container">
        <div className="row split">
          <div className="col">
            <h3>
              <span>The AI Revolution</span>
            </h3>
          </div>
        </div>
        <div className="row split">
          <div className="col">
            <div className="draw-line">
              <svg
                width="233"
                height="121"
                viewBox="0 0 233 121"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1C24.1778 10.741 47.0701 20.9782 69.1085 33.1274C92.4583 45.9995 115.893 61.3548 132.06 83.0048C137.065 89.7066 142.941 98.5964 142.819 107.411C142.742 112.934 135.615 117.475 131.082 118.815C123.229 121.138 113.118 119.82 105.652 116.818C99.8574 114.489 89.8256 108.254 89.8256 100.977C89.8256 88.2399 117.102 86.4402 124.369 85.6229C160.566 81.5519 197.278 87.3847 232 97.3822"
                  stroke="#8788F4"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
          <div className="col">
            <div className="col-row">
              <h4>
                The future of AI economy is here.
                <br />
                <br />
                $UNREAL utility token = one AI job (any model, any complexity).
                <br />
                <br />
                Startups earn tokens for usage; tokens are burned on each job →
                deflationary.
                <br />
                <br />
                Governance: 1-member-1-vote cooperative (250M fixed supply, 35%
                founder, 15% DecenterAI).
              </h4>
            </div>
            <div className="col-row styled-content">
              <p>Building the infrastructure for a tokenized AI economy.</p>
            </div>
            <div className="col-row">
              <div className="btn btn-primary">
                <a href="https://app.unreal.art" className="btn-click">
                  <div className="btn-content">
                    <span>Launch App</span>
                  </div>
                  <div className="btn-arrow">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <polyline
                        points="14 19 21 12 14 5"
                        fill="none"
                        stroke="#000"
                        strokeMiterlimit="10"
                      />
                      <line
                        x1="21"
                        y1="12"
                        x2="2"
                        y2="12"
                        fill="none"
                        stroke="#000"
                        strokeMiterlimit="10"
                      />
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default IntroSection
