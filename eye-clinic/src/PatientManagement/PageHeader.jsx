import React from 'react';

const PageHeader = ({ title, buttonText, onButtonClick }) => {
  return (
    <div className="page-header">
      <h1>{title}</h1>
      <button onClick={onButtonClick}>{buttonText}</button>
    </div>
  );
};

export default PageHeader;