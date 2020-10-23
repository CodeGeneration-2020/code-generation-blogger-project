import styled from 'styled-components';

export const Location = styled.div`
  margin: 27px auto 0;
  width: 300px;
  & > .item {
    display: flex;
    margin-bottom: 7px;
    &:last-child {
      margin-bottom: 0px;
    }
    & > .search {
      width: 120px;
      margin-right: 19px;
    }
    & > .chosen-location {
      width: 161px;
    }
  }
`;
