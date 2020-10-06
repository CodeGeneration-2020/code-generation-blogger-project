import React from 'react';
import * as Styled from './SideBar.style';

export const openSlideMenu = () => {
  let menu: any = document.getElementById('menu');
  menu.classList.add('nav-open');
  document.body.classList.add('stop-scrolling');
};

export const closeSlideMenu = () => {
  const menu: any = document.getElementById('menu');
  menu.classList.remove('nav-open');
  document.body.classList.remove('stop-scrolling');
};

const SideBar = ({ children }) => {
  return (
    <Styled.SideBarContainer>
      <div id="menu" className="nav">
        <div className="nav-items">
          <div>{children}</div>
        </div>
        <div className="nav-overlay" onClick={closeSlideMenu} />
      </div>
    </Styled.SideBarContainer>
  );
};

export default SideBar;
