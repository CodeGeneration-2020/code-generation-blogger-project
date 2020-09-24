import styled from 'styled-components';

export const ListJobsContainer = styled.div`
  margin-top: 50px;
  width: 100%;
  height: 100%;
`;
export const JobCard = styled.div`
  width: 95%;
  margin: 0 auto;
  padding: 10px 15px;
  height: 100%;
  display: flex;
  border: 2px solid gray;
  margin-bottom: 10px;
  & > .description {
    width: 70%;
    & > .title {
    }
    & > .budget {
    }
    & > .location {
      & > .country {
        padding-right: 3px;
      }
      & > .city {
      }
    }
  }

  & > .tags {
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    & > .tag {
      width: 100%;
    }
  }
`;
