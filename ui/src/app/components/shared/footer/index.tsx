import React from 'react';
import * as Style from './styles';
import withTheme from '../../../../HOC/withTheme';

const Footer = ({ ...props }) => {
  return (
    <Style.Footer>
      <div className="background-img">
        <svg
          viewBox="0 0 1920 195"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M3337 385.255L-1417.02 385.256L-49.0972 0.810751L1969.06 0.810575L1969.53 0.946225L3337 385.255ZM-1391.88 381.864L3311.84 381.864L1968.05 4.20233L-48.0848 4.20251L-1391.88 381.864Z"
            fill={`${props.theme && props.theme.color}`}
          />
          <path
            d="M-109.935 21.4439L2029.92 21.4438L2029.92 18.052L-109.935 18.0522L-109.935 21.4439Z"
            fill={`${props.theme && props.theme.color}`}
          />
          <path
            d="M-179.246 40.9241L2099.21 40.9239L2099.21 37.5321L-179.246 37.5323L-179.246 40.9241Z"
            fill={`${props.theme && props.theme.color}`}
          />
          <path
            d="M-258.141 63.0948L2178.12 63.0946L2178.12 59.7028L-258.141 59.703L-258.141 63.0948Z"
            fill={`${props.theme && props.theme.color}`}
          />
          <path
            d="M-348.782 88.5669L2268.76 88.5667L2268.76 85.1749L-348.782 85.1751L-348.782 88.5669Z"
            fill={`${props.theme && props.theme.color}`}
          />
          <path
            d="M-454.004 118.143L2373.98 118.143L2373.98 114.751L-454.004 114.751L-454.004 118.143Z"
            fill={`${props.theme && props.theme.color}`}
          />
          <path
            d="M-577.622 152.886L2497.6 152.886L2497.6 149.494L-577.622 149.494L-577.622 152.886Z"
            fill={`${props.theme && props.theme.color}`}
          />
          <path
            d="M-724.916 194.277L2644.9 194.277L2644.9 190.885L-724.916 190.885L-724.916 194.277Z"
            fill={`${props.theme && props.theme.color}`}
          />
          <path
            d="M-930.265 385.085L154.303 3.9411L151.951 0.937936L-932.617 382.082L-930.265 385.085Z"
            fill={`${props.theme && props.theme.color}`}
          />
          <path
            d="M-457.192 384.841L356.401 3.92859L353.5 1.14901L-460.093 382.062L-457.192 384.841Z"
            fill={`${props.theme && props.theme.color}`}
          />
          <path
            d="M16.1139 384.727L558.514 3.74185L554.849 1.40155L12.4497 382.386L16.1139 384.727Z"
            fill={`${props.theme && props.theme.color}`}
          />
          <path
            d="M489.448 384.33L760.626 3.29221L756.056 1.83301L484.878 382.871L489.448 384.33Z"
            fill={`${props.theme && props.theme.color}`}
          />
          <path
            d="M957.459 383.557L962.521 383.557L962.521 2.504L957.459 2.504L957.459 383.557Z"
            fill={`${props.theme && props.theme.color}`}
          />
          <path
            d="M1430.51 384.22L1435.08 382.761L1163.94 1.69605L1159.37 3.15552L1430.51 384.22Z"
            fill={`${props.theme && props.theme.color}`}
          />
          <path
            d="M1903.99 384.744L1907.65 382.404L1365.21 1.47296L1361.55 3.81291L1903.99 384.744Z"
            fill={`${props.theme && props.theme.color}`}
          />
          <path
            d="M2377.22 384.992L2380.12 382.212L1566.56 1.16685L1563.66 3.94673L2377.22 384.992Z"
            fill={`${props.theme && props.theme.color}`}
          />
          <path
            d="M2850.35 385.037L2852.7 382.035L1767.86 1.48278L1765.51 4.48485L2850.35 385.037Z"
            fill={`${props.theme && props.theme.color}`}
          />
        </svg>
      </div>
    </Style.Footer>
  );
};

export default withTheme(Footer);
