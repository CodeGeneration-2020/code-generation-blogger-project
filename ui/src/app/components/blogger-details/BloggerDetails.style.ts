import styled from 'styled-components';

export const BloggerDetailsContainer = styled.div`
  width: 95%;
  margin: auto;
  & .charts {
    display: flex;
    @media screen and (max-width: 1200px) {
      flex-direction: column;
    }
    & .sex {
      width: 50%;
      @media screen and (max-width: 900px) {
        margin: auto;
        width: 100%;
      }
    }
    & .city {
      width: 50%;
      @media screen and (max-width: 1200px) {
        width: 100%;
      }
    }
  }
  & .age {
    width: 50%;
    @media screen and (max-width: 1200px) {
      width: 100%;
    }
  }
`;
