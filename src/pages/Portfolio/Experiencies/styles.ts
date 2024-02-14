import { styled } from 'styled-components';

export const ContainerExperiencePage = styled.section`
  min-height: 100vh;
  min-width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  transition: 0.3s all;
  padding: 3rem;

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
    transition: 0.3s all;
    width: 65%;
    display: flex;
    flex-direction: column;
    &::-webkit-scrollbar {
      display: none;
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
`;
