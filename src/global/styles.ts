import { createGlobalStyle, styled } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }


  ::-webkit-scrollbar {
    width: 15px;
  }
 
  ::-webkit-scrollbar-corner 
  {
    background: transparent; 
  }

  ::-webkit-scrollbar-track {
    background: #aaa; 
    border-radius: 0.6rem;
  }
 
  ::-webkit-scrollbar-thumb {
    background: #bbb;
    border-radius: 10px; 
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #ccc; 
  }

  input, html{
    font-family: 'Poppins', sans-serif;
    color: #fff;
  }

  html{
    scroll-behavior: smooth;
    background-color: #313131; 
  }
  
  body{
    /* background-color: var(--black-900); */
    /* -webkit-font-smoothing: ; */
  }
  
  button{
    cursor: pointer;
  }

  .page-title{
    transition: 0.3s all;
    font-size: 2.5rem;
    font-weight: bold;
    padding-left: 2rem;
    @media(max-width: 950px){
      font-size: 1.6rem;
    }
  }

`;

const ContainerPage = styled.section`
  height: 100vh;
  width: 100%;
  padding: 2rem;
  background-color: ${({ theme }) => theme.COLORS.BLACK_40};
`;

const Column = styled.div`
  width: 100%;
  margin: 0 auto;
  scroll-behavior: smooth;
  @media (min-width: 1367px) {
    width: 1280px;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export { GlobalStyle, ContainerPage, Column, Row };
