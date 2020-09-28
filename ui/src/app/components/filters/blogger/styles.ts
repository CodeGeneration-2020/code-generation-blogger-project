import styled from 'styled-components';

export const FiltersContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 2%;
  display: flex;
  flex-direction: column;
  background: #0d0b18;
`;

export const Filters = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const SharedFilters = styled.div`
  width: 74.5%;
  display: flex;
  flex-direction: column;
  margin-right: 24px;
  & > .quantitative-filters {
    margin-bottom: 20px;
    width: 100%;
    height: 100%;
    display: flex;
    & > .subscribers {
      margin-right: 24px;
      width: 40%;
    }
    & > .price {
      width: 60%;
    }
  }
  & > .person-filters {
    width: 100%;
    display: flex;
    align-items: stretch;
    & > .gender {
      margin-right: 24px;
      width: 15%;
    }
    & > .location {
      width: 85%;
    }
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
  width: 23.5%;
`;
