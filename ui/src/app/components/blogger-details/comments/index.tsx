import React from 'react';
import * as Style from './styles';
import AvaComment from '../../../../img/ava-comment.svg';
import DrawStars from '../../shared/draw-stars';
import { v4 as uuidv4 } from 'uuid';
import InfiniteScroll from 'react-infinite-scroll-component';
import withTheme from '../../../../HOC/withTheme';
import { ITheme } from '../../../../types';

const Comments: React.FC<{
  comments;
  loading;
  getPaginationComments;
  theme?: ITheme;
}> = ({ comments, loading, getPaginationComments, theme }) => {
  return (
    <Style.CommentList theme={theme}>
      <InfiniteScroll
        className="infinite-scroll"
        dataLength={comments.length}
        next={() => getPaginationComments()}
        hasMore={true}
        loader={loading && <h4>Loading...</h4>}
        height={300}
      >
        {comments &&
          comments.map(c => {
            return (
              <Style.CommentCard key={uuidv4()}>
                <Style.UserInfo>
                  <div className="ava">
                    <img src={AvaComment} alt="ava-comment" />
                  </div>
                  <div className="info">
                    <span className="full_name">{c.customerId.full_name}</span>
                    <span className="score">
                      <DrawStars count={c.score} />
                    </span>
                  </div>
                </Style.UserInfo>
                <Style.Rating theme={theme}>
                  <span className="count">{c.subs_came}</span>
                  <div className="text">
                    <span className="left-part">subs</span>
                    <span className="right-part">came</span>
                  </div>
                </Style.Rating>
                <Style.Comment theme={theme}>{c.comment}</Style.Comment>
              </Style.CommentCard>
            );
          })}
      </InfiniteScroll>
    </Style.CommentList>
  );
};

export default withTheme(Comments);
