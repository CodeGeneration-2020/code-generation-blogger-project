import styled from 'styled-components';

export const Location = styled.div`
  width: 100%;
  display: flex;
`;

export const Search = styled.div`
  & > .item {
    height: 32px;
    width: 120px;
    margin: 0 18px 7px 30px;
    &:last-child {
      margin-bottom: 0;
    }
    @media screen and (max-width: 1180px) {
      margin: 0 12px 7px 20px;
    }
    @media screen and (max-width: 980px) {
      width: 100px;
      margin: 0 8px 7px 12px;
    }
  }
`;

export const LocationList = styled.div`
  width: 100%;
`;
