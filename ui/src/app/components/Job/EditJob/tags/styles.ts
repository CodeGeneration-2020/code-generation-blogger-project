import styled from 'styled-components';

export const Tags = styled.div`
  width: 100%;
  margin-top: 35px;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > .select {
    width: 234px;
    display: flex;
    & > .icon {
      margin-top: 8px;
      margin-right: 10px;
    }
    & > .search {
      width: 207px;
    }
  }
  & > .text {
    margin-top: 12px;
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    color: #ffffff;
    margin-bottom: 15px;
  }
  & > .chosen-tags {
    width: 333px;
    height: 47px;
  }
`;
