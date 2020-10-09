import styled from 'styled-components';

export const SideBarContainer = styled.div`
  & .nav-items {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 200;
    height: 100%;
    width: 70%;
    background: #0d0b18;
    transform: translateX(100%);
    transition: transform 0.3s;
    /* scroll style */
    overflow: auto;
    ::-webkit-scrollbar {
      width: 0px;
    }
    /* end scroll style */
  }
  & .nav-open {
    & .nav-items {
      transform: translateX(0);
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
    }
    & .nav-overlay {
      visibility: visible;
      opacity: 1;
    }
  }
  & .nav-overlay {
    z-index: 100;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(2px);
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.3s;
  }
`;
