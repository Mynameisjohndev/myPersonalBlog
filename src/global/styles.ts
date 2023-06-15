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
    background-color: #313131; 
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

  html{
    background-color: #313131; 
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
  /* overflow-y: auto; */
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
`;

export { GlobalStyle, ContainerPage, Column, Row };
