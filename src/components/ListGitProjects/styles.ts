import styled from 'styled-components';

const ListGitProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 30px;
  align-self: center;
  width: 1120px;
  transition: 0.3s all;
  @media (max-width: 1220px) {
    width: 840px;
  }
  @media (max-width: 950px) {
    width: 560px;
  }
  @media (max-width: 660px) {
    width: 280px;
  }
  .card {
    background-color: red;
    width: 250px;
    height: 250px;
    margin: auto;
    transition: 0.3s all;
    border-radius: 0.25rem;
    cursor: pointer;
    &:hover {
      -webkit-box-shadow: 0px 5px 18px -3px #000000;
      box-shadow: 0px 5px 18px -3px #000000;
    }
  }
`;

export { ListGitProjectsContainer };
