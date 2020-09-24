import styled, { createGlobalStyle, css } from 'styled-components';

export const colors = {
	white          : '#fff',
	black          : '#000',
	lightGrey      : '#f4f4f4',
	mediumGrey     : '#dedede',
	darkGrey       : '#a9a9a9',
	primary        : '',
	primaryLight   : '',
	primaryDark    : '',
	secondary      : '',
	secondaryLight : '',
	secondaryDark  : ''
};

export const GlobalStyle = createGlobalStyle`
  html{
    font-size: 62.5%;
  }
 
  *,*::after,*::before{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  ul{
    list-style: none;
  }

  a{
    text-decoration: none;
  }

  h1{
    font-size: 6rem;
  }

  h2{
    font-size: 5rem;
  }

  h3{
    font-size: 4rem;
  }

  h4{
    font-size: 3rem;
  }
 
  p{
    font-size: 1.6rem;
  }
`;
