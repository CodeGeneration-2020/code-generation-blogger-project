import React from 'react';
import * as Styled from './slider.style';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { v4 as uuidv4 } from 'uuid';
import LeftArrow from '../../../../img/leftVector.svg';
import RightArrow from '../../../../img/rightVector.svg';

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <Styled.SliderNext className={className} onClick={onClick}>
      <img src={RightArrow} alt="prevVector" />
    </Styled.SliderNext>
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <Styled.SliderPrev className={className} onClick={onClick}>
      <img src={LeftArrow} alt="prevVector" />
    </Styled.SliderPrev>
  );
}

const SliderComponent: React.FC<{
  location: any;
  setLocation: any;
}> = ({ location, setLocation }) => {
  let settings = {
    slidesToShow: 6,
    slidesToScroll: 6,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
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
    <Styled.SliderContainer className="slider-container">
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
