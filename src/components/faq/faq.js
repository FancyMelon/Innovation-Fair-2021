import React from 'react';
import Accordion from './Accordion.js';
import { faqData } from './faq_contents';
import '../../styles/Style.css';

export default function Faq (){
  return (
    <div>
      <h1>FAQ</h1>
      <div className="accordion">
        {faqData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
    </div>
  );
};


