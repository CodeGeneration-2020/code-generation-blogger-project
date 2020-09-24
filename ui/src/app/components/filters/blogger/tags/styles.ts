import styled from 'styled-components';

export const Tags = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

export const SelectContainer = styled.div`
  display: flex;
  width: 95%;
  margin: 0 auto;
  margin-bottom: 2rem;
  align-items: center;
  & > .icon {
    display: flex;
    justify-content: flex-end;
    margin-right: 3%;
    width: 5%;
    font-size: 20px;
    color: #0091ea;
    font-weight: 700;
  }
  & > .select {
    width: 55%;
    display: flex;
    align-items: center;
  }
  & > .button {
    width: 40%;
    padding-left: 2%;
    height: 25px;
    & .text-button {
      font-weight: 700;
      font-size: 12px;
      @media screen and (max-width: 850px) {
        font-size: 10px;
      }
    }
  }
`;

export const ListTags = styled.div`
  display: flex;
  margin: 0 auto;
  width: 90%;
  justify-content: space-between;
  flex-wrap: wrap;
  & > .tag {
    margin: 2px 1.5px;
  }
`;
