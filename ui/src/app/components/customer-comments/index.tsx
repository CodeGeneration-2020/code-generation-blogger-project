import React from 'react';
import * as Style from './styles';
import AvaComment from '../../../img/Rectangle.svg';
import withTheme from '../../../HOC/withTheme';
import DrawStars from '../shared/draw-stars';
import { v4 as uuidv4 } from 'uuid';
import BlueButton from '../shared/BlueButton/button.component';
import InfiniteScroll from 'react-infinite-scroll-component';

const CustomerComments = props => {
  const isBlogger = true;
  const commentRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;
  const [score, setScore] = React.useState<number>(0);
  return (
    <>
      {isBlogger && (
        <Style.AddComment>
          <textarea
            ref={commentRef as any}
            className="input-comment"
            placeholder={'Write the comment'}
          />
          <div className="score">
            <DrawStars
              count={5}
              className={'star'}
              score={score}
              setScore={s => {
                setScore(s);
              }}
            />
            <span className="prompt">Score the customer</span>
          </div>
          <BlueButton
            style={{ width: '105px', height: '54px' }}
            onClick={() => {
              if (score && commentRef.current.value) {
                props.createComment(commentRef.current.value, score);
                commentRef.current.value = '';
              }
            }}
          >
            <span className="add-comment">Add Comment</span>
          </BlueButton>
        </Style.AddComment>
      )}
      <Style.CommentsCustomerContainer theme={props.theme}>
        <InfiniteScroll
          className="infinite-scroll"
          dataLength={props.comments.length}
          next={props.getComments}
          hasMore={true}
          loader={props.loading && <h4>Loading...</h4>}
          height={300}
        >
          {props.comments &&
            props.comments.map(c => (
              <div className="comment" key={uuidv4()}>
                <div className="user-info">
                  <div className="ava">
                    <img src={AvaComment} alt="ava" />
                  </div>
                  <div className="info">
                    <div className="fullname">{c.bloggerId.full_name}</div>
                    <div className="score">
                      <DrawStars count={c.score} className={'star'} />
                    </div>
                  </div>
                </div>
                <div className="text">{c.comment}</div>
              </div>
            ))}
        </InfiniteScroll>
      </Style.CommentsCustomerContainer>
    </>
  );
};

export default withTheme(CustomerComments);
