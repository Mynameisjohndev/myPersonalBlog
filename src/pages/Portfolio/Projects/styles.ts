import { styled } from 'styled-components';

export const ContainerProjects = styled.section`
  min-height: 100vh;
  max-height: 100%;
  min-width: 100%;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  /* background-color: whitesmoke; */
  z-index: 3;
  /* align-items: center; */
  /* justify-content: center; */

  h1 {
    transition: 0.3s all;
    font-size: 2.5rem;
    font-weight: bold;
  }
  @media (max-width: 950px) {
  }
`;
