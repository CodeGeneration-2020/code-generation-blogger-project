import React from 'react';
import * as Styled from './styles';
import DrawStars from '../../../shared/draw-stars';
import AvaComment from '../../../../../img/Rectangle.svg';
import InfiniteScroll from 'react-infinite-scroll-component';

const Comments = props => {
  const isBlogger = true;
  return (
    <Styled.CommentsContainer>
      <Styled.List>
        <InfiniteScroll
          className="infinite-scroll"
          dataLength={3}
          next={() => {}}
          hasMore={true}
          loader={props.loading && <h4>Loading...</h4>}
          height={300}
        >
          <div className="item">
            <Styled.UserInfo>
              <div className="ava">
                <img src={AvaComment} alt="ava-comment" />
              </div>
              <div className="info">
                <span className="full_name">Coll Blogger</span>
                <span className="score">
                  <DrawStars count={3} />
                </span>
              </div>
            </Styled.UserInfo>
            <Styled.Comment>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              iaculis arcu et lectus interdum, et venenatis turpis pharetra.
              Aliquam erat volutpat. Nam hendrerit ex mi.
            </Styled.Comment>
          </div>
        </InfiniteScroll>
      </Styled.List>
      {isBlogger && (
        <Styled.AddComment>
          <textarea placeholder="Write a comment" id="comment-input" />
        </Styled.AddComment>
      )}
    </Styled.CommentsContainer>
  );
};

export default Comments;
