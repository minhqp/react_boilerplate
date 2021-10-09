import React from 'react';

const ComponentSpinner = () => {
  return (
    <div className="fallback-spinner">
      <div className="loading component-loader">
        <div className="effect-1 effects" />
        <div className="effect-2 effects" />
        <div className="effect-3 effects" />
      </div>
    </div>
  );
};

export default ComponentSpinner;
