import { darken } from 'polished';
import styled, { css } from 'styled-components';

import { IProject } from '../../interfaces/project';

const CardProjectContainer = styled.div<IProject>`
  display: flex;
  width: 90%;
  /* background-color: blue; */
  flex-direction: ${({ index }) => (index % 2 === 0 ? 'row' : 'row-reverse')};
  @media (max-width: 1100px) {
    flex-direction: column;
  }
  justify-content: space-between;
  margin-bottom: 2rem;
  align-self: center;
  padding: 3rem;
  transition: 0.3s all;

  .align-project {
    width: 100%;
    display: flex;
  }

  .column-project {
    /* background-color: red; */
    transition: 0.3s all;
    display: flex;
    flex-direction: column;
    /* width: 350px; */
    p {
      transition: 0.3s all;
      width: 80%;
    }
    h1 {
      transition: 0.3s all;
      color: ${({ theme }) => theme.COLORS.GREEN_30};
    }
    button {
      transition: 0.3s all;
      height: 40px;
      width: 100px;
      border: 0;
      margin-top: 0.4rem;
      border-radius: 0.2rem;
      /* padding: 1rem 2rem; */
      ${({ theme }) => css`
        color: ${theme.COLORS.WHITE};
        background-color: ${theme.COLORS.GREEN_30};
        &:hover {
          background-color: ${darken(0.1, theme.COLORS.GREEN_30)};
        }
      `}
    }
  }
  .column-image {
    /* background-color: green; */
    ${({ index }) =>
      index % 2 === 0
        ? css`
            margin-left: 4rem;
          `
        : css`
            margin-right: 4rem;
          `}
    transition: 0.3s all;
    display: flex;
    flex-direction: column;
    img {
      width: 450px;
      height: 250px;
      &::before {
        content: '';
        display: block;
        width: 1.2rem;
        border-radius: 0.6rem;
        height: 100%;
        background-color: green;
      }
    }
    .row-techs {
      transition: 0.3s all;
      display: flex;
      flex-direction: row;
    }
    span {
      transition: 0.3s all;
      margin-right: 0.6rem;
      font-size: 1rem;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`;

export { CardProjectContainer };
