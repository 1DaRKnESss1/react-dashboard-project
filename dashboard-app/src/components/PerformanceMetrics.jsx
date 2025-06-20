import React from 'react';
import './PerformanceMetrics.css';
import metricsData from '../data/performanceMetricsData.json';

const WinnabilityDots = ({ active, total }) => {
  const dots = [];
  for (let i = 0; i < total; i++) {
    dots.push(<span key={i} className={`dot ${i < active ? 'active' : ''}`}></span>);
  }
  return <div className="winnability-dots">{dots}</div>;
};

const PerformanceMetrics = () => {
  return (
    <section className="performance-metrics-section">
      <h2 className="section-title">{metricsData.title}</h2>
      <div className="metrics-grid">
        {metricsData.metrics.map((metric, index) => (
          <div className="metric-card" key={index}>
            {metric.type !== 'distribution' && (
              <div className="metric-header">
                <span className="metric-title">{metric.title}</span>
                {metric.type === 'winnability' && (
                  <WinnabilityDots active={metric.activeDots} total={metric.totalDots} />
                )}
              </div>
            )}

            {metric.type === 'winnability' && <p className="metric-value large">{metric.value}</p>}
            {metric.type === 'ratio' && (
              <div className="metric-value-row">
                <p className="metric-value">{metric.value}</p>
                <p className="metric-subtext">{metric.subtext}</p>
              </div>
            )}
            {metric.type === 'growth' && (
              <>
                <div className="metric-value-row">
                  <p className="metric-value">{metric.value}</p>
                  <p className="metric-subtext">{metric.subtext_line1}</p>
                </div>
                <p className="metric-subtext">{metric.subtext_line2}</p>
              </>
            )}
            {metric.type === 'distribution' && (
              <>
                <span className="metric-title">{metric.title}</span>
                <div className="distribution-list">
                  {metric.items.map(item => (
                    <div className="distribution-item" key={item.label}>
                      <div className="distribution-bar-wrapper">
                        <div className="distribution-bar" style={{ width: item.value }}></div>
                      </div>
                      <span className="distribution-label-text">{item.label} {item.value}</span>
                    </div>
                  ))}
                </div>
              </>
            )}
            {metric.link && <a href={metric.link.url} className="metric-link">{metric.link.text}</a>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default PerformanceMetrics;