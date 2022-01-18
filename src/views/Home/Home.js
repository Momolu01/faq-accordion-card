import React, { useRef } from 'react';

import './Home.style.css';

import data from './../../assets/data/data';
import QuestionLine from '../../components/Question/Question';

import womanOnlineDesktop from './../../assets/images/illustration-woman-online-desktop.svg';
import boxDesktop from './../../assets/images/illustration-box-desktop.svg';

const Home = () => {
  const container = useRef();
  const questionList = data.map(({ title, text }, i) => (
    <QuestionLine
      container={container}
      title={title}
      text={text}
      key={i}
      id={i}
    />
  ));

  return (
    <div className='container' ref={container}>
      <div className='imageContent'>
        <img className='boxDesktop' src={boxDesktop} alt='boxDesktop' />
        <div className='womanDesktop'>
          <img src={womanOnlineDesktop} alt='womanOnlineDesktop' />
        </div>
      </div>
      <div className='textContent'>
        <h1>FAQ</h1>
        <ul className='questionList scroller'>{questionList}</ul>
      </div>
    </div>
  );
};

export default Home;
