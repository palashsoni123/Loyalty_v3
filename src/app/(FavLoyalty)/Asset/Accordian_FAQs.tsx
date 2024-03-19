import React, { useState, ReactNode } from 'react';

interface AccordionFAQProps {
  title: string;
  children: ReactNode;
}

const AccordionFAQ: React.FC<AccordionFAQProps> = ({ title, children }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="accordion-wrapper">
      <div
        className={`accordion-title ${isOpen ? 'open' : ''}`}
        onClick={() => setOpen(!isOpen)}
      >
        {title}
      </div>
      <div className={`accordion-item ${!isOpen ? 'collapsed' : ''}`}>
        <div className="accordion-content">{children}</div>
      </div>
    </div>
  );
};

export default AccordionFAQ;
