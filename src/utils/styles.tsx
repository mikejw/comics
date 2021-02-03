
import React from 'react';
import { Global, css } from '@emotion/react';
import normalise from './normalise';
import main from './main';

export const GlobalStyle = (props: any) => (
  <Global
    { ...props }
    styles={css`
      ${ normalise }
      ${ main }
    `}
  />
);
