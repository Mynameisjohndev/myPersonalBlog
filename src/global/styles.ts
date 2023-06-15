import { createGlobalStyle, styled } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: 0.3s all;
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
    font-family: 'Inter', sans-serif;
  }

  button{
    cursor: pointer;
  }
`;

const ContainerPage = styled.section`
  height: 100vh;
  width: 100%;
  padding: 2rem;
  background-color: ${({ theme }) => theme.COLORS.BLACK_40};
`;

const Column = styled.div`
  display: flex;
  /* height: 100vh; */
  /* background-color: red; */
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
`;

export { GlobalStyle, ContainerPage, Column, Row };
