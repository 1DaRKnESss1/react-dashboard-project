import React from 'react';
import './PortfolioGoals.css';
import portfolioGoalsData from '../data/portfolioGoalsData.json';

const PortfolioGoals = () => {
  return (
    <div className="dashboard-section portfolio-goals">
      <h3>Portfolio goals</h3>
      <div className="goals-list">
        {portfolioGoalsData.map((goal, index) => {
          
          if (goal.title === "PORTFOLIO LOSS RATIO TARGET" || goal.title === "RENEWAL RETENTION") {
            let position, statusColor;
            if (goal.title === "PORTFOLIO LOSS RATIO TARGET") {
              position = 45;
              statusColor = goal.statusColor;
            } else {
              let offset = 0;
              let targetSegment = goal.segments.find(s => s.color === '#28a745');
              for(const segment of goal.segments) {
                if(segment.color === '#28a745') break;
                offset += segment.percentage;
              }
              position = offset + (targetSegment.percentage / 2);
              statusColor = "#28a745";
            }
            return (
              <div key={index} className="goal-item-redesigned">
                <div className="goal-header"><span className="goal-title">{goal.title}</span></div>
                <div className="progress-bar-container-redesigned">
                  <span className="goal-target" style={{ left: goal.title === "PORTFOLIO LOSS RATIO TARGET" ? `${goal.targetIndicatorPosition}%` : `${position}%` }}>{goal.target}</span>
                  {goal.targetIndicatorPosition && <div className="target-indicator-top" style={{ left: `${goal.targetIndicatorPosition}%` }}><svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 15.5L19.5263 1.25H0.473724L10 15.5Z" fill="#007BFF" stroke="#007BFF" strokeWidth="1" strokeLinejoin="round"/></svg></div>}
                  <div className="progress-bar-segments-wrapper">
                    {goal.segments.map((segment, segIndex) => (<div key={segIndex} className="progress-bar-segment" style={{ width: `${segment.percentage}%`, backgroundColor: segment.color }}></div>))}
                  </div>
                  {goal.title === "PORTFOLIO LOSS RATIO TARGET" ? <span className="progress-value-overlay" style={{ left: `${position}%` }}>{goal.currentValue}</span> : <div className="progress-value-block" style={{ left: `${position}%`, backgroundColor: statusColor }}>{goal.currentValue}</div>}
                  <div className="value-indicator-bottom" style={{ left: `${position}%` }}><svg width="22" height="14" viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 0L21.3923 13.5H0.607696L11 0Z" fill={goal.title === "PORTFOLIO LOSS RATIO TARGET" ? "#28a745" : statusColor} stroke={goal.title === "PORTFOLIO LOSS RATIO TARGET" ? "#28a745" : statusColor} strokeWidth="1" strokeLinejoin="round"/></svg></div>
                  <span className="status-text-overlay" style={{ left: `${position}%`, color: statusColor }}>{goal.status}</span>
                </div>
              </div>
            );
          } 

          else {
            return (
              <div key={index} className="goal-item-redesigned">
                <div className="goal-header">
                  <span className="goal-title">{goal.title}</span>
                </div>
                <div className="progress-bar-container-new-biz">
                  <div className="progress-bar-wrapper-new-biz">
                    <div className="progress-bar-track-new-biz">
                      <div className="progress-bar-fill-new-biz" style={{ width: `${goal.progress}%` }}>
                        <span className="progress-value-new-biz">{goal.currentValue}</span>
                      </div>
                    </div>
                    <span className="target-value-label-new-biz">{goal.targetValue}</span>
                  </div>
                  <span className="percentage-label-new-biz" style={{ left: `${goal.progress}%` }}>
                    {goal.progress}%
                  </span>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default PortfolioGoals;