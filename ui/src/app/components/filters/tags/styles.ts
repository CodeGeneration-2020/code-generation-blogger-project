import styled from 'styled-components';

export const Tags = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding: 0 7.3%;
`;

export const SelectContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  & > .icon {
    margin-right: 10px;
    font-size: 25px;
    color: #0091ea;
    font-weight: 700;
  }
  & > .select {
    width: 100%;
  }
`;

export const ListTags = styled.div`
  margin-top: 40px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  & > .tag {
    margin-left: 5px;
    margin-bottom: 5px;
    &:first-child {
      margin-left: none;
    }
  }
`;
