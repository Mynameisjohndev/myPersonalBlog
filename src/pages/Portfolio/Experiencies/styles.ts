import { styled } from 'styled-components';

export const ContainerExperiencePage = styled.section`
  min-height: 100vh;
  max-height: 100%;
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
    height: 460px;
    /* overflow-y: auto; */
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
  }
  @media (max-width: 950px) {
    flex-direction: column;
    .column-experience {
      width: 100%;
    }
  }
  @media (max-height: 500px) {
    .column-experience {
      height: 100%;
    }
  }
`;
