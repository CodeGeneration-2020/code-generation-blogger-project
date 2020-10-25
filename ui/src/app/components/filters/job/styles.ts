import styled from 'styled-components';

export const FiltersContainer = styled.div`
  box-sizing: border-box;
  max-width: 1170px;
  width: 100%;
  margin: 0 auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #0d0b18;
  margin-bottom: 100px;
`;

export const Filters = styled.div`
  display: flex;
  width: 100%;
`;

export const SharedFilters = styled.div`
  width: 872px;
  display: flex;
  flex-direction: column;
  margin-right: 23px;
  & > .price {
    width: 100%;
    height: 180px;
    margin-bottom: 20px;
  }
  & > .location {
    width: 100%;
    height: 204px;
  }

  .slider-handles {
    & > .handle:first-child {
      margin-left: 6px;
      margin-top: 1px;
    }
    & > .handle:last-child {
      margin-left: -10px;
      margin-top: 1px;
    }
  }
`;

export const Tags = styled.div`
  width: 275px;
`;
