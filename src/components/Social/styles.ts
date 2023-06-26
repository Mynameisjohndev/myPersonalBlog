import styled, { css } from 'styled-components';

const icon = 2.4;

const ContainerSocial = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  margin-top: 1rem;
  width: calc(4 * (${icon}rem + 1rem));
  transition: 0.3s all;
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
        /* transform: scale(1.1); */
      }
    `};
  }
`;

export { ContainerSocial };
