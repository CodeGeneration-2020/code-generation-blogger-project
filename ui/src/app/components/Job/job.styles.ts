import styled from 'styled-components';

export const JobContainer = styled.div`
  width: 95%;
  height: 100%;
  margin: 0 auto;
`;
export const JobHeader = styled.div`
  padding-top: 20px;
  width: 100%;
  height: 100%;
  display: flex;
`;
export const Description = styled.div`
  width: 50%;
  & > .title {
    color: lightgreen;
  }
  & > .budget {
    padding-top: 10px;
  }
  & > .short-description {
    padding-top: 15px;
  }
`;

export const Tags = styled.div`
  width: 50%;
`;

export const Contact = styled.div`
  padding-top: 15px;
`;

export const AdditionalContact = styled.div`
  padding-top: 20px;
`;

export const Location = styled.div`
  padding-top: 15px;
  & > .country {
  }
  & > .city {
  }
`;

export const Attachments = styled.div`
  padding-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Buttons = styled.div`
  padding-top: 15px;
  display: flex;
  justify-content: center;
  & > .edit {
    margin: 0 5px;
  }
  & > .close {
    margin: 0 5px;
  }
`;
