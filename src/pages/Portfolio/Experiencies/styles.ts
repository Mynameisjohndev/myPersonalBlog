import { styled } from 'styled-components';

export const ContainerExperiencePage = styled.section`
  /* height: 100vh; */
  min-height: 100vh;
  min-width: 100%;
  padding: 3rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  transition: 0.3s all;
  .column-experience {
    transition: 0.3s all;
    width: 65%;
    display: flex;
    flex-direction: column;
    height: 400px;
    h1 {
      transition: 0.3s all;
      font-size: 2.5rem;
      font-weight: bold;
    }
  }
  .ilustration {
    width: 30%;
  }
  @media (max-width: 950px) {
    flex-direction: column;
    .column-experience {
      width: 100%;
      margin-bottom: 1rem;
    }
  }
  @media (max-height: 500px) {
    .column-experience {
      height: 100%;
    }
  }
`;
