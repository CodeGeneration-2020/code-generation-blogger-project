import React from 'react';
import * as Style from './styles';
import AvaComment from '../../../../img/ava-comment.svg';
import StarIcon from '../../../../img/star.svg';
import { v4 as uuidv4 } from 'uuid';
import InfiniteScroll from 'react-infinite-scroll-component';

const CommentCard = ({ comments, loading, getPaginationComments }) => {
  return (
    <Style.CommentList>
      <InfiniteScroll
        dataLength={comments.length}
        next={() => getPaginationComments()}
        hasMore={true}
        loader={loading && <h4>Loading...</h4>}
      >
        {comments &&
          comments.map(c => {
            return (
              <Style.CommentCard>
                <Style.UserInfo>
                  <div className="ava">
                    <img src={AvaComment} alt="ava-comment" />
                  </div>
                  <div className="info">
                    <span className="full_name">{c.customerId.full_name}</span>
                    <span className="score">
                      {Array(c.score)
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
                  <span className="count">{c.subs_came}</span>
                  <div className="text">
                    <span className="left-part">subs</span>
                    <span className="right-part">came</span>
                  </div>
                </Style.Rating>
                <Style.Comment>{c.comment}</Style.Comment>
              </Style.CommentCard>
            );
          })}
      </InfiniteScroll>
    </Style.CommentList>
  );
};

export default CommentCard;
