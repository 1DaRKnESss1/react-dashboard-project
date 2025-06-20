import React from 'react';
import './Communication.css';
import communicationData from '../data/communicationData.json';
import { BsPaperclip } from 'react-icons/bs';

const Communication = () => {
  const leftColumnItems = communicationData.messages.filter(msg => msg.isHighlighted);
  const rightColumnItems = communicationData.messages.filter(msg => !msg.isHighlighted);

  const MessageCard = ({ message }) => (
    <div className={`message-item ${message.isHighlighted ? 'highlighted' : ''}`}>
      <div className="message-header">
        {message.status === 'new' && <span className="status-tag new">NEW</span>}
        {message.status === 'responded' && <span className="status-tag responded">Responded</span>}
        <h3 className="message-title">{message.title}</h3>
      </div>
      <p className="message-sender-info">{message.sender} // {message.date}</p>
      <p className="message-snippet">{message.snippet}</p>
      <div className="message-footer">
        {message.attachments > 0 && (
          <div className="attachments-badge">
            <BsPaperclip />
            {message.attachments} attachments
          </div>
        )}
        {message.status !== 'responded' && (
          <button className="reply-button">Reply</button>
        )}
      </div>
    </div>
  );

  return (
    <div>
      <div className="external-section-header">
        <h2 className="external-section-title">{communicationData.title}</h2>
      </div>
      <div className="communication-card">
        <div className="communication-toolbar">
          <input type="text" placeholder="Search" className="comm-search-input" />
          <div className="comm-buttons">
            <button className="comm-button filter">Filter</button>
            <button className="comm-button group">Group</button>
          </div>
        </div>
        <div className="communication-grid">
          <div className="communication-column">
            {leftColumnItems.map(message => <MessageCard key={message.id} message={message} />)}
          </div>
          <div className="communication-column">
            {rightColumnItems.map(message => <MessageCard key={message.id} message={message} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Communication;