import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Button } from '../styles/Button';
import { useGlobalContext } from '../Context'


const HeroSection = () => {
  const {name, image} = useGlobalContext();

  return (
    <Wrapper>
      <div className='container'>
        <div className='section-hero-data'>
          <p className='hero-top-data'>THIS IS ME</p>
          <h1 className='hero-heading'>{name}</h1>
          <p className='hero-para'>I'm {name}. A React developer.</p>
        </div>
        <Button className='btn hireme-btn'>
          <NavLink to='/contact'>hire me</NavLink>
        </Button>
        <div className='section-hero-image'>
          <Picture>
            <img src={image} alt='img' className='hero-img' />
          </Picture>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;

  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .btn {
    max-width: 16rem;
  }

  .hero-img {
    max-width: 80%;
  }
`;

const Picture = styled.picture`
  text-align: center;
`;

export default HeroSection;
