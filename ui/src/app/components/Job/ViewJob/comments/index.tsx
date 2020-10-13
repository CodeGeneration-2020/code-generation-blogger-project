import React from 'react';
import * as Styled from './styles';
import DrawStars from '../../../shared/draw-stars';
import AvaComment from '../../../../../img/Rectangle.svg';
import InfiniteScroll from 'react-infinite-scroll-component';
import { v4 as uuidv4 } from 'uuid';
import BlueButton from '../../../shared/BlueButton/button.component';

const Comments = props => {
  const isBlogger = true;
  const inputCommentRef = React.useRef() as React.MutableRefObject<
    HTMLInputElement
  >;
  return (
    <Styled.CommentsContainer>
      <Styled.List>
        <InfiniteScroll
          className="infinite-scroll"
          dataLength={props.comments.length}
          next={props.getComments}
          hasMore={true}
          loader={props.loading && <h4>Loading...</h4>}
          height={300}
        >
          {props.comments.length > 0 &&
            props.comments.map(c => (
              <div className="item" key={uuidv4()}>
                <Styled.UserInfo>
                  <div className="ava">
                    <img src={AvaComment} alt="ava-comment" />
                  </div>
                  <div className="info">
                    <span className="full_name">{c.bloggerId.full_name}</span>
                    <span className="score">
                      <DrawStars count={c.score} />
                    </span>
                  </div>
                </Styled.UserInfo>
                <Styled.Comment>{c.comment}</Styled.Comment>
              </div>
            ))}
        </InfiniteScroll>
      </Styled.List>
      {isBlogger && (
        <Styled.AddComment>
          <textarea
            ref={inputCommentRef as any}
            placeholder="Write a comment"
            id="comment-input"
          />
          <BlueButton
            style={{ width: '100px', height: '32px' }}
            onClick={() => {
              if (inputCommentRef.current.value) {
                props.createComment(inputCommentRef.current.value);
                inputCommentRef.current.value = '';
              }
            }}
          >
            Send
          </BlueButton>
        </Styled.AddComment>
      )}
    </Styled.CommentsContainer>
  );
};

export default Comments;
