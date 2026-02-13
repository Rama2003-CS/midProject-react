import React from 'react';
import './VisaCard.css';

function VisaCard({ data }) {
  const cardClass = `visa-card ${data.type}`;
  
  return (
    <div className={cardClass}>
      <div className="card-header">

        <span className="card-logo">
          {data?.type?.toUpperCase() || 'CARD'}
       </span>
        <div className="card-chip"></div>
      </div>
      <div className="card-number">
        {data.number.padEnd(16, '#').replace(/(.{4})/g, '$1 ')}
      </div>
      <div className="card-footer">
        <div>
          <p className="label">HOLDER NAME</p>
          <p className="value">{data?.name || "FULL NAME"}</p>
        </div>
        <div>
          <p className="label">EXPIRES</p>
          <p className="value">{data?.expiry || "MM/YY"}</p>
        </div>
        <div>
          <p className="label">CVV</p>
          <p className="value">{data?.cvv || "***"}</p>
        </div>
      </div>
    </div>
  );
}
export default VisaCard;