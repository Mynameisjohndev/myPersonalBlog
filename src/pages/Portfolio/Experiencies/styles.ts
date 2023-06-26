import { styled } from 'styled-components';

export const ContainerExperiencePage = styled.section`
  min-height: 100vh;
  min-width: 100%;
  padding: 3rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  transition: 0.3s all;

  .experience-content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: red;
  }

  .column-experience {
    /* background-color: red; */
    transition: 0.3s all;
    width: 65%;
    display: flex;
    flex-direction: column;
    /* height: 460px; */

    &::-webkit-scrollbar {
      display: none;
    }
    h1 {
      transition: 0.3s all;
      font-size: 2.5rem;
      font-weight: bold;
    }
  }
  .ilustration {
    width: 30%;
    /* width: 400px;
    height: 200px; */
  }
  @media (max-width: 950px) {
    flex-direction: column;
    .column-experience {
      width: 100%;
    }
  }
  @media (max-height: 800px) {
    .column-experience {
      /* height: 100%; */
    }
  }
`;
