import { css, styled } from 'styled-components';

export const ContainerAboutPage = styled.section`
  /* height: 100vh; */
  min-height: 100vh;
  min-width: 100%;
  padding: 3rem;
  /* padding-top: calc(3rem + 100px); */
  display: flex;
  align-items: flex-end;
  justify-content: center;

  ${({ theme }) => css`
    background-color: ${theme.COLORS.BLACK_40};
    .container-description {
      display: flex;
      flex-direction: row;
      width: 70%;
      &::before {
        content: '';
        display: block;
        width: 1.2rem;
        border-radius: 0.6rem;
        min-height: 100%;
        background-color: ${theme.COLORS.GREEN_30};
      }

      .column-description {
        padding-left: 1rem;
        h2 {
          color: ${theme.COLORS.GREEN_30};
          font-size: 2rem;
        }
        h1 {
          font-size: 7rem;
          font-weight: bolder;
          color: ${theme.COLORS.WHITE};
        }
        p {
          font-size: 1.4rem;
          color: ${theme.COLORS.WHITE};
        }
        a {
          font-size: 1.4rem;
          color: ${theme.COLORS.GREEN_30};
          text-decoration: none;
          cursor: pointer;
        }
      }
    }
  `}

  .user_profile_photo {
    width: 350px;
    height: 350px;
    margin-bottom: 5rem;
    @media (max-width: 750px) {
      width: 200px;
      height: 200px;
    }
  }

  @media (max-width: 950px) {
    .user_profile_photo {
      margin-bottom: 0;
    }
    flex-direction: column-reverse;
    .container-description {
      width: 100%;
      .column-description {
        h2 {
          font-size: 1.4rem;
        }
        h1 {
          font-size: 4rem;
        }
        p,
        a {
          font-size: 1rem;
        }
      }
    }
  }
  @media (max-width: 525px) {
    padding: 2rem;
    .user_profile_photo {
      align-self: flex-start;
    }
    .container-description {
      width: 100%;
      .column-description {
        h2 {
          font-size: 1rem;
        }
        h1 {
          font-size: 2.5rem;
        }
        /* p,
        a {
          font-size: 1rem;
        } */
      }
    }
  }
`;