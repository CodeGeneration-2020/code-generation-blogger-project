import React from 'react';
import { connect } from 'react-redux';
import * as Styled from './loader.style';

const Loader = props => {
  return (
    props.isLoading && (
      <Styled.LoaderContainer>
        <Styled.Loader
          xmlns="http://www.w3.org/2000/svg"
          width="200px"
          height="200px"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid"
        >
          <g transform="rotate(0 50 50)">
            <rect
              x="45.5"
              y="16.5"
              rx="4.5"
              ry="4.5"
              width="9"
              height="9"
              fill="#d9d5d6"
            >
              <animate
                attributeName="opacity"
                values="1;0"
                keyTimes="0;1"
                dur="1s"
                begin="-0.9s"
                repeatCount="indefinite"
              ></animate>
            </rect>
          </g>
          <g transform="rotate(36 50 50)">
            <rect
              x="45.5"
              y="16.5"
              rx="4.5"
              ry="4.5"
              width="9"
              height="9"
              fill="#d9d5d6"
            >
              <animate
                attributeName="opacity"
                values="1;0"
                keyTimes="0;1"
                dur="1s"
                begin="-0.8s"
                repeatCount="indefinite"
              ></animate>
            </rect>
          </g>
          <g transform="rotate(72 50 50)">
            <rect
              x="45.5"
              y="16.5"
              rx="4.5"
              ry="4.5"
              width="9"
              height="9"
              fill="#d9d5d6"
            >
              <animate
                attributeName="opacity"
                values="1;0"
                keyTimes="0;1"
                dur="1s"
                begin="-0.7s"
                repeatCount="indefinite"
              ></animate>
            </rect>
          </g>
          <g transform="rotate(108 50 50)">
            <rect
              x="45.5"
              y="16.5"
              rx="4.5"
              ry="4.5"
              width="9"
              height="9"
              fill="#d9d5d6"
            >
              <animate
                attributeName="opacity"
                values="1;0"
                keyTimes="0;1"
                dur="1s"
                begin="-0.6s"
                repeatCount="indefinite"
              ></animate>
            </rect>
          </g>
          <g transform="rotate(144 50 50)">
            <rect
              x="45.5"
              y="16.5"
              rx="4.5"
              ry="4.5"
              width="9"
              height="9"
              fill="#d9d5d6"
            >
              <animate
                attributeName="opacity"
                values="1;0"
                keyTimes="0;1"
                dur="1s"
                begin="-0.5s"
                repeatCount="indefinite"
              ></animate>
            </rect>
          </g>
          <g transform="rotate(180 50 50)">
            <rect
              x="45.5"
              y="16.5"
              rx="4.5"
              ry="4.5"
              width="9"
              height="9"
              fill="#d9d5d6"
            >
              <animate
                attributeName="opacity"
                values="1;0"
                keyTimes="0;1"
                dur="1s"
                begin="-0.4s"
                repeatCount="indefinite"
              ></animate>
            </rect>
          </g>
          <g transform="rotate(216 50 50)">
            <rect
              x="45.5"
              y="16.5"
              rx="4.5"
              ry="4.5"
              width="9"
              height="9"
              fill="#d9d5d6"
            >
              <animate
                attributeName="opacity"
                values="1;0"
                keyTimes="0;1"
                dur="1s"
                begin="-0.3s"
                repeatCount="indefinite"
              ></animate>
            </rect>
          </g>
          <g transform="rotate(252 50 50)">
            <rect
              x="45.5"
              y="16.5"
              rx="4.5"
              ry="4.5"
              width="9"
              height="9"
              fill="#d9d5d6"
            >
              <animate
                attributeName="opacity"
                values="1;0"
                keyTimes="0;1"
                dur="1s"
                begin="-0.2s"
                repeatCount="indefinite"
              ></animate>
            </rect>
          </g>
          <g transform="rotate(288 50 50)">
            <rect
              x="45.5"
              y="16.5"
              rx="4.5"
              ry="4.5"
              width="9"
              height="9"
              fill="#d9d5d6"
            >
              <animate
                attributeName="opacity"
                values="1;0"
                keyTimes="0;1"
                dur="1s"
                begin="-0.1s"
                repeatCount="indefinite"
              ></animate>
            </rect>
          </g>
          <g transform="rotate(324 50 50)">
            <rect
              x="45.5"
              y="16.5"
              rx="4.5"
              ry="4.5"
              width="9"
              height="9"
              fill="#d9d5d6"
            >
              <animate
                attributeName="opacity"
                values="1;0"
                keyTimes="0;1"
                dur="1s"
                begin="0s"
                repeatCount="indefinite"
              ></animate>
            </rect>
          </g>
        </Styled.Loader>
      </Styled.LoaderContainer>
    )
  );
};

const mapStateToProps = state => {
  const { LOADER_REDUCER } = state;
  return {
    isLoading: LOADER_REDUCER.isLoading,
  };
};

export default connect(mapStateToProps, null)(Loader);
