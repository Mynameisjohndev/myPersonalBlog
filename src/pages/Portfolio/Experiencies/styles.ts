import { styled } from 'styled-components';

export const ContainerExperiencePage = styled.section`
  height: 100vh;
  min-width: 100%;
  padding: 3rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  transition: 0.3s all;
  /* align-items: center; */
  /* justify-content: center; */
  .column-experience {
    transition: 0.3s all;
    width: 67%;
    h1 {
      transition: 0.3s all;
      font-size: 2.5rem;
      font-weight: bold;
    }
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  .ilustration {
    width: 30%;
    height: 230px;
  }
  @media (max-width: 950px) {
    flex-direction: column;
    .column-experience {
      width: 100%;
    }
    .ilustration {
      width: 250px;
      height: 250px;
    }
  }
`;
