import React, { useState } from 'react';

import './Question.style.css';

import iconArrorDown from './../../assets/images/icon-arrow-down.svg';

const QuestionLine = ({ title, text, container }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpening = () => {
    console.log(container);
    setIsOpen(!isOpen);
  };

  return (
    <>
      {isOpen ? (
        <li className='questionLine'>
          <div className='title' onClick={() => handleOpening()}>
            <b>
              <p>{title}</p>
            </b>
            <img className='open' src={iconArrorDown} alt='icon-arrow-down' />
          </div>
          <p className='text'>{text}</p>
        </li>
      ) : (
        <li className='questionLine'>
          <div className='title' onClick={() => handleOpening()}>
            <p>{title}</p>
            <img src={iconArrorDown} alt='icon-arrow-down' />
          </div>
        </li>
      )}
    </>
  );
};

export default QuestionLine;
