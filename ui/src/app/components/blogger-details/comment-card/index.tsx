import React from 'react';
import * as Style from './styles';
import AvaComment from '../../../../img/ava-comment.svg';
import StarIcon from '../../../../img/star.svg';
import { v4 as uuidv4 } from 'uuid';

const CommentCard = props => {
  return (
    <Style.CommentCard>
      <Style.UserInfo>
        <div className="ava">
          <img src={AvaComment} alt="ava-comment" />
        </div>
        <div className="info">
          <span className="full_name">Cool manager</span>
          <span className="text">Plahta fashion</span>
          <span className="score">
            {Array(5)
              .fill(' ')
              .map(_ => (
                <img
                  src={StarIcon}
                  alt="star"
                  className="star"
                  key={uuidv4()}
                />
              ))}
          </span>
        </div>
      </Style.UserInfo>
      <Style.Rating>
        <span className="count">13055</span>
        <div className="text">
          <span className="left-part">subs</span>
          <span className="right-part">came</span>
        </div>
      </Style.Rating>
      <Style.Comment>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam iaculis
        arcu et lectus interdum, et venenatis turpis pharetra. Aliquam erat
        volutpat. Nam hendrerit ex mi.
      </Style.Comment>
    </Style.CommentCard>
  );
};

export default CommentCard;
