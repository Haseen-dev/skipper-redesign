import React from 'react';
import './SkipCard.css';
import { FaDumpster, FaCheckCircle, FaTimesCircle, FaCog } from 'react-icons/fa';

function SkipCard({ skip, selected, onSelect }) {
  const total = (skip.price_before_vat * (1 + skip.vat / 100)).toFixed(2);

  return (
    <div className={`flip-card ${selected ? 'selected' : ''}`} onClick={() => onSelect(skip.id)}>
  <div className="flip-card-inner">
    <div className="flip-card-front">
      <img src={skip.image} alt={`${skip.size} yard skip`} className="skip-img mb-2" />
      <h5><FaDumpster /> {skip.size} Yard Skip</h5>
      <p className="price">£{total}</p>
    </div>
    <div className="flip-card-back">
      <ul>
        <li><FaCog /> Hire: {skip.hire_period_days} days</li>
        <li>{skip.allowed_on_road ? <FaCheckCircle /> : <FaTimesCircle />} Allowed on Road</li>
        <li>{skip.allows_heavy_waste ? <FaCheckCircle /> : <FaTimesCircle />} Allows Heavy Waste</li>
      </ul>
    </div>
  </div>
</div>

  );
}

export default SkipCard;
