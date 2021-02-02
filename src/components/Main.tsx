
import React from 'react';
import styled from '@emotion/styled';
import { GlobalStyle, Header } from '../utils/styles';
import { Star } from '../images/Star';

const Wrapper = styled.div`
  color: #000;
`;

function Main() {
  return (
    <>
      <GlobalStyle />
      <Header>
        <h1>
          <span>Red Ant Comics</span>
        </h1>
        <div>
          <span>
            <Star color="#fff" />
          </span>
        </div>
      </Header>
    </>
  );
}

export default Main;
