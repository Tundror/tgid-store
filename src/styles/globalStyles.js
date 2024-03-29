import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }

  body{
    font-family:"Roboto", sans-serif;
  }

  ul{
    list-style:none;
  }

  img{
    max-width: 100%;
    display:block;
  }

  a{
    text-decoration:none;
  }
`;

export default GlobalStyles