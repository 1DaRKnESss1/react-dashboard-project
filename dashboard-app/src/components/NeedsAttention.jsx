import React from 'react';
import './NeedsAttention.css';
import { HiOutlineExclamationCircle } from "react-icons/hi";
import attentionData from '../data/needsAttentionData.json';

const NeedsAttention = () => {
    return (
        <div className="needs-attention-section">
            <div className="attention-header">
                <HiOutlineExclamationCircle className="attention-icon" />
                <h4>{attentionData.title}</h4>
            </div>
            <div className="attention-content">
                {attentionData.items.map((item) => (
                    <div className="attention-item" key={item.title}>
                        <h5>{item.title}</h5>
                        <p>{item.details}</p>
                        <a href={item.link.url}>{item.link.text}</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NeedsAttention;