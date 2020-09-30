import styled from 'styled-components';

export const Location = styled.div`
  width: 100%;
  padding: 0 4%;
  display: flex;
`;

export const Search = styled.div`
  width: 17.5%;
  margin-right: 2.5%;
  & > .item {
    margin-bottom: 10px;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const LocationList = styled.div`
  width: 80%;
  height: 100%;
`;
