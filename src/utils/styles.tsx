
import React from 'react';
import styled from '@emotion/styled';
import { Global, css } from '@emotion/react';
import reset from './reset';

export const breakpoints = {
  s: 576,
  m: 768,
  l: 992,
  xl: 1200,
};

export const GlobalStyle = (props: any) => (
  <Global
    { ...props }
    styles={css`
    
      ${reset}
      body {
        margin: 0;
        color: #000;
        background-color: #eaeaea;
      }
      html {
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
      }
    `}
  />
);

export const Header = styled.div`
  display: flex;
  background-color: #f02626;
  color: #fff;
  padding: 1.5rem;
  
  h1 {
    flex-grow: 1;
    text-align center;
    font-size: 1.2rem;
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
    span {
      position: relative;
      margin-left: 70px;
    }
  }
  div {
    span {
      width: 32px;
      height: 32px;
      display: block;
      border-radius: 50%;
      border: 2px solid white;
      svg {
        padding-top: 3px;
        width: 22px;
        height: 22px;
      }
    }
    width: 70px;
    text-align: center;
  }
 
`;


export const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;
`;


export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
  @media (max-width: ${breakpoints.s}px){
    grid-template-columns: repeat(1, 1fr);
  }
`

export const TwoColumnGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2rem 1fr;
  grid-template-rows: 1auto;
  grid-template-areas: "left . right";

  @media (max-width: ${breakpoints.l}px){
    display: block;
  }
`;

export const GridLeft = styled.div`
  grid-area: left;
`;

export const GridRight = styled.div`
  grid-area: right;
`;

export const MainContent = styled.main`
  margin-top: 80px;
  margin-bottom: 40px;

  @media (max-width: ${breakpoints.l}px){
    margin-top: 40px;
    margin-bottom: 20px;
  }
`;