import styled from 'styled-components';

export const SelectedContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  & > .countries {
    width: 100%;
    height: 50%;
    margin-bottom: 10px;
  }
  & > .cities {
    width: 100%;
    height: 50%;
  }
  .item {
    margin-right: 6px;
    &:last-child {
      margin-right: none;
    }
  }
`;
