import React from 'react';
import './AccountDetails.css';
import detailsData from '../data/accountDetailsData.json';

import { 
  BsArrowUpCircle, BsArrowDownCircle, 
  BsRocketTakeoffFill 
} from 'react-icons/bs';

const AccountDetails = () => {
  const { nav, winnability, recommendations } = detailsData;

  return (
    <div>
      <div className="external-section-header">
        <h2 className="external-section-title">{detailsData.title}</h2>
      </div>
      <div className="details-card">
        <nav className="details-nav">
          {nav.map((section) => (
            <div className="nav-section-wrapper" key={section.category}>
              {section.items && section.items.length > 0 ? (
                <div className="nav-item-list-card">
                  <h3 className="nav-category-title">
                    {section.category}
                    <span className="nav-count">{section.count}</span>
                  </h3>
                  <ul>
                    {section.items.map((item) => (
                      <li 
                        key={item} 
                        className={section.active === item ? 'active' : ''}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <h3 className="nav-category-title inactive">
                  {section.category}
                  <span className="nav-count">{section.count}</span>
                </h3>
              )}
            </div>
          ))}
        </nav>

        <main className="details-content">
          <h1 className="winnability-title">{winnability.main_title}</h1>
          
          <div className="winnability-overview">
            <div className="overview-item score-card">
              <h4>{winnability.overall_score.title}</h4>
              <div className="score-wrapper">
                <p className="score-value">{winnability.overall_score.score}%</p>
                <div className="rating-outline-box">
                  <div className="score-rating-block">
                    <div className="dots-separator">
                      <span className="dot"></span><span className="dot"></span><span className="dot"></span><span className="dot"></span>
                    </div>
                    <p className="score-rating">{winnability.overall_score.rating}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="overview-item">
              <h4>{winnability.historical_trend.title}</h4>
              <div className="trend-chart-container">
                <svg viewBox="0 0 100 40" className="trend-chart-svg" preserveAspectRatio="none">
                  <path d="M 0 30 L 25 22 L 50 26 L 75 12 L 100 18" stroke="#4a90e2" strokeWidth="2.5" fill="none" vectorEffect="non-scaling-stroke" />
                </svg>
                <div className="chart-labels">
                  <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>Now</span>
                </div>
              </div>
            </div>
            <div className="overview-item">
              <h4>{winnability.position.title}</h4>
              <div className="position-bars">
                {winnability.position.bars.map(bar => (
                  <div className="position-bar-item" key={bar.label}>
                    <div className="progress-bar-background">
                      <div className="progress-bar-fill gradient" style={{ width: `${bar.value}%` }}></div>
                    </div>
                    <div className="position-bar-label">
                      {bar.label}: <strong>{bar.value}%</strong>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="winnability-factors">
            <div className="factors-column">
              <h3 className="factors-title">
                <BsArrowUpCircle className="factor-icon increase" />
                {winnability.increasing_factors.title}
              </h3>
              <div className="factors-list">
                {winnability.increasing_factors.factors.map((factor, index) => (
                  <div className="factor-item" key={factor.name}>
                    <span className="factor-number increase">{index + 1}</span>
                    <div className="factor-content-wrapper">
                      <div className="factor-label">{factor.name}</div>
                      <div className="factor-visual">
                        <div className="factor-bar-wrapper">
                          <div className="factor-bar-fill green" style={{width: `${factor.value * 3}%`}}></div>
                        </div>
                        <span className="factor-value increase">+{factor.value}%</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="factors-column">
              <h3 className="factors-title">
                <BsArrowDownCircle className="factor-icon decrease" />
                {winnability.decreasing_factors.title}
              </h3>
              <div className="factors-list">
                {winnability.decreasing_factors.factors.map((factor, index) => (
                  <div className="factor-item" key={factor.name}>
                    <span className="factor-number decrease">{index + 1}</span>
                    <div className="factor-content-wrapper">
                      <div className="factor-label">{factor.name}</div>
                      <div className="factor-visual">
                        <div className="factor-bar-wrapper">
                          <div className="factor-bar-fill yellow" style={{width: `${Math.abs(factor.value) * 3}%`}}></div>
                        </div>
                        <span className="factor-value decrease">{factor.value}%</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="recommendations">
            <h3 className="recommendations-title">
              <BsRocketTakeoffFill className="recommendation-icon-title" />
              {recommendations.title}
            </h3>
            {recommendations.items.map((rec, index) => (
              <div className="recommendation-item" key={index}>
                <div className="recommendation-text">
                  <p className="rec-title">{rec.title}</p>
                  <p className="rec-description">{rec.description}</p>
                </div>
                <button className="apply-button">Apply</button>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AccountDetails;