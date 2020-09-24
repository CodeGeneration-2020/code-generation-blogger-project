import styled from 'styled-components';

export const FiltersContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #000;
  padding: 5px;
`;

export const Filters = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const SharedFilters = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  & > .quantitative-filters {
    width: 100%;
    height: 100%;
    display: flex;
    & > .subscribers {
      width: 40%;
      margin-right: 10px;
    }
    & > .price {
      width: 60%;
      margin-right: 10px;
    }
  }
  & > .person-filters {
    width: 100%;
    /* height: 100%; */
    display: flex;
    align-items: stretch;
    margin-top: 20px;
    & > .gender {
      width: 20%;
      margin-right: 10px;
    }
    & > .location {
      width: 80%;
      margin-right: 10px;
    }
  }

  .slider-handles {
    & > .handle:first-child {
      margin-left: 2px;
    }
    & > .handle:last-child {
      margin-left: -6px;
    }
  }
`;

export const Tags = styled.div`
  width: 25%;
`;
