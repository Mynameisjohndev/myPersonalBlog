import { css, styled } from 'styled-components';

const icon = 2.4;

export const ContainerAboutPage = styled.section`
  min-height: 100vh;
  min-width: 100%;
  padding: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s all;
  flex-direction: row;

  @media (max-width: 950px) {
    flex-direction: column;
  }
  .contact-info {
    transition: 0.3s all;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    margin-left: 3rem;
    width: 60%;
    p {
      transition: 0.3s all;
      font-size: 2rem;
      transition: 0.3s all;
      @media (max-width: 950px) {
        font-size: 1.5rem;
      }
      @media (max-width: 650px) {
        font-size: 1.1rem;
      }
    }
    .row-contacts {
      transition: 0.3s all;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row;
      svg {
        margin-right: 1rem;
        width: ${icon}rem;
        height: ${icon}rem;
        cursor: pointer;
        transition: 0.3s all;
        ${({ theme }) => css`
          color: ${theme.COLORS.WHITE};
          &:hover {
            color: ${({ theme }) => theme.COLORS.GREEN_30};
          }
        `};
      }
    }
    .button-buy-coffe {
      text-decoration: none;
      @media (max-width: 950px) {
        width: 100%;
      }
      button {
        svg {
          width: ${icon}rem;
          height: ${icon}rem;
          margin-right: 0.6rem;
          transition: 0.3s all;
        }
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        transition: 0.3s all;
        border-radius: 0.6rem;
        padding: 1rem;
        border: 0;
        background-color: ${({ theme }) => theme.COLORS.GREEN_30};
        font-size: 1.3rem;
        font-weight: bold;
        color: ${({ theme }) => theme.COLORS.WHITE};
        &:hover {
          filter: brightness(0.9);
        }
        @media (max-width: 950px) {
          width: 100%;
        }
        @media (max-width: 650px) {
          font-size: 1rem;
          svg {
            width: 1rem;
            height: 1rem;
            margin-right: 0.1rem;
            transition: 0.3s all;
          }
        }
      }
    }
  }
  @media (max-width: 950px) {
    .contact-ilustration {
      width: 70%;
    }
  }
  .align-contact-info {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    transition: 0.3s all;
  }
`;
