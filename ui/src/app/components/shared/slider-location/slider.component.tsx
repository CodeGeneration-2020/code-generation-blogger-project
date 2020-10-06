import React from 'react';
import * as Styled from './slider.style';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { v4 as uuidv4 } from 'uuid';
import { ITheme } from '../../../../types';

function SampleNextArrow(props) {
  const { className, onClick, color } = props;
  return (
    <Styled.SliderNext className={className} onClick={onClick}>
      <svg viewBox="0 0 29 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1.59444 10.523L22.6404 10.523L18.0166 15.1467C17.3789 15.7845 17.3789 16.7411 18.0166 17.3789C18.6544 18.0166 19.611 18.0166 20.2488 17.3789L27.583 10.0447C28.2207 9.40692 28.2207 8.45029 27.583 7.81253L20.2488 0.478349C19.611 -0.159405 18.6544 -0.159406 18.0166 0.478349C17.3789 1.11611 17.3789 2.07274 18.0166 2.71049L22.6404 7.33422L1.59444 7.33422C0.797246 7.33422 5.23626e-05 7.97197 5.2279e-05 8.9286C5.21953e-05 9.88524 0.797246 10.523 1.59444 10.523Z"
          fill={color}
        />
      </svg>
    </Styled.SliderNext>
  );
}

function SamplePrevArrow(props) {
  const { className, onClick, color } = props;
  return (
    <Styled.SliderPrev className={className} onClick={onClick}>
      <svg viewBox="0 0 29 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M26.4668 7.33418L5.42092 7.33418L10.0446 2.71046C10.6824 2.0727 10.6824 1.11607 10.0446 0.478315C9.40689 -0.15944 8.45026 -0.15944 7.8125 0.478315L0.478318 7.8125C-0.159437 8.45026 -0.159437 9.40689 0.478318 10.0446L7.8125 17.3788C8.45026 18.0166 9.40689 18.0166 10.0446 17.3788C10.6824 16.7411 10.6824 15.7844 10.0446 15.1467L5.42092 10.523L26.4668 10.523C27.264 10.523 28.0612 9.8852 28.0612 8.92857C28.0612 7.97193 27.264 7.33418 26.4668 7.33418Z"
          fill={color}
        />
      </svg>
    </Styled.SliderPrev>
  );
}

const SliderComponent: React.FC<{
  location: any;
  setLocation: any;
  theme: ITheme;
}> = ({ location, setLocation, theme }) => {
  let settings = {
    slidesToShow: 6,
    slidesToScroll: 6,
    nextArrow: <SampleNextArrow color={theme.color} />,
    prevArrow: <SamplePrevArrow color={theme.color} />,
    responsive: [
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
    className: 'slides',
  };

  return (
    <Styled.SliderContainer className="slider-container" theme={theme}>
      <Slider {...settings}>
        {location.map(location => {
          return (
            <div
              key={uuidv4()}
              className="item"
              onClick={() => setLocation(location)}
            >
              <span className="title">{location.label}</span>
            </div>
          );
        })}
      </Slider>
    </Styled.SliderContainer>
  );
};

export default SliderComponent;
