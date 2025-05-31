'use client'
import React, { useState } from 'react';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is this platform?",
      answer: "It's a responsive web app for modern users. Our platform provides an intuitive interface and powerful features to help you achieve your goals efficiently."
    },
    {
      question: "How do I sign up?",
      answer: "Click the \"Get Started\" button and fill out the form. You'll need to provide your email address and create a password. After verification, you'll have full access to all features."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. All payments are processed securely through our payment partners."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your subscription at any time. Your access will continue until the end of your current billing period. No refunds are provided for partial months."
    },
    {
      question: "Do you offer customer support?",
      answer: "Yes, we offer 24/7 customer support through live chat, email, and phone. Our support team is always ready to help you with any questions or issues you may have."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq">
      <h2 className="faq__title">Frequently Asked Questions</h2>
      <div className="faq__list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq__item">
            <button 
              className={`faq__question ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleAccordion(index)}
            >
              {faq.question}
              <span className="faq__icon">+</span>
            </button>
            <div className={`faq__answer ${activeIndex === index ? 'active' : ''}`}>
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection; 