import React from 'react';
import * as Style from './styles';
import AvaComment from '../../../../img/Rectangle.svg';
import withTheme from '../../../../HOC/withTheme';
import DrawStars from '../draw-stars';
import { v4 as uuidv4 } from 'uuid';

const CustomerComments = props => {
  return (
    <Style.ListCustomerContainer theme={props.theme}>
      <div className="comment">
        <div className="user-info">
          <div className="ava">
            <img src={AvaComment} alt="ava" />
          </div>
          <div className="info">
            <div className="fullname">Cool Blogger</div>
            <div className="score">
              <DrawStars count={5} className={'star'} />
            </div>
          </div>
        </div>
        <div className="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          iaculis arcu et lectus interdum,
        </div>
      </div>
    </Style.ListCustomerContainer>
  );
};

export default withTheme(CustomerComments);
