import React from 'react';
import * as Style from './styles';
import { chooseRoleIcons } from '../../../img';
import { bloggerTheme, customerTheme } from '../../../consts/theme';
import BlueButton from '../../components/shared/BlueButton/button.component';

const ChooseRole = () => {
  return (
    <Style.ChooseRoleContainer>
      <Style.Logo>LOGO</Style.Logo>
      <Style.Users>
        <Style.User
          color={bloggerTheme.color}
          logoWidth={'306px'}
          logoHeight={'311px'}
        >
          <div className="logo">
            <img src={chooseRoleIcons.bloggerLogo} alt="logo" />
          </div>
          <div className="role-description">
            <span className="role">I'm a blogger</span>
            <span className="description">
              And I want to sell advertising in my blog.
            </span>
          </div>
          <div className="log-in">
            <BlueButton
              style={{
                width: '316px',
                height: '52px',
                background: bloggerTheme.background,
                hover: false,
              }}
            >
              <div className="btn-content">
                <span className="text">Log in via Facebook</span>
                <img
                  src={chooseRoleIcons.facebook}
                  alt="social-icon"
                  className="icon"
                />
              </div>
            </BlueButton>
            <span className="text">I already have an account</span>
          </div>
        </Style.User>
        <Style.User
          color={customerTheme.color}
          logoWidth={'321px'}
          logoHeight={'307px'}
        >
          <div className="logo">
            <img src={chooseRoleIcons.customerLogo} alt="logo" />
          </div>
          <div className="role-description">
            <span className="role">I'm a customer</span>
            <span className="description">
              And I want to advertise my stuff on a blog.
            </span>
          </div>
          <div className="log-in">
            <BlueButton
              style={{
                width: '316px',
                height: '52px',
                background: customerTheme.background,
                hover: false,
              }}
            >
              <div className="btn-content">
                <span className="text">Log in via Google</span>
                <img
                  src={chooseRoleIcons.google}
                  alt="social-icon"
                  className="icon"
                />
              </div>
            </BlueButton>
            <span className="text">I already have an account</span>
          </div>
        </Style.User>
      </Style.Users>
    </Style.ChooseRoleContainer>
  );
};

export default ChooseRole;
