import React from 'react';
import * as Styled from './SideBar.style';

export const openSlideMenu = () => {
  let menu: any = document.getElementById('menu');
  menu.classList.add('nav-open');
};

export const closeSlideMenu = () => {
  const menu: any = document.getElementById('menu');
  menu.classList.remove('nav-open');
};

const SideBar = ({ children }) => {
  return (
    <Styled.SideBarContainer>
      <div id="menu" className="nav">
        <div className="nav-items">{children}</div>
        <div className="nav-overlay" onClick={closeSlideMenu} />
      </div>
    </Styled.SideBarContainer>
  );
};

export default SideBar;
