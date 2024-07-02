import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import './LazyLoadBackground.css'; // Assuming you have a CSS file for styling
import test from '../../images/hero-image.png'

const LazyLoadBackground = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true, // Load only once when the component comes into view
    threshold: 0.1, // Load when 10% of the component is visible
  });

  return (
    <div
      ref={ref}
      className={`background-container ${inView ? 'in-view' : ''} ${imageLoaded ? 'loaded' : ''}`}
      style={{
        backgroundImage: inView && imageLoaded ? `url(${test})` : 'none',
      }}
    >
      {inView && (
        <img
          src={test}
          alt="background"
          style={{ display: 'none' }}
          onLoad={() => setImageLoaded(true)}
        />
      )}
      <div className="text-overlay">
        <h1>Your Text Here</h1>
        <p>Additional text can go here</p>
      </div>
    </div>
  );
};

export default LazyLoadBackground;
