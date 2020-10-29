import React from 'react';
import * as Style from './styles';
import Ava from '../../../../img/ava.svg';
import withTheme from '../../../../HOC/withTheme';

const Header = ({ ...props }) => {
  return (
    <Style.Header>
      <div className="background-img">
        <svg
          preserveAspectRatio="none"
          viewBox="0 0 1920 195"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-1418 -190.55H3336.98L1968.78 194.49H-49.7843L-50.257 194.354L-1418 -190.55ZM3311.83 -187.153H-1392.83L-48.7716 191.093H1967.77L3311.83 -187.153Z"
            fill={`${props.theme && props.theme.color}`}
            fillOpacity="0.5"
          />
          <path
            d="M2029.63 173.825H-110.652V177.222H2029.63V173.825Z"
            fill={`${props.theme && props.theme.color}`}
            fillOpacity="0.5"
          />
          <path
            d="M2098.96 154.315H-179.959V157.712H2098.96V154.315Z"
            fill={`${props.theme && props.theme.color}`}
            fillOpacity="0.5"
          />
          <path
            d="M2177.87 132.11H-258.887V135.507H2177.87V132.11Z"
            fill={`${props.theme && props.theme.color}`}
            fillOpacity="0.5"
          />
          <path
            d="M2268.53 106.598H-349.547V109.995H2268.53V106.598Z"
            fill={`${props.theme && props.theme.color}`}
            fillOpacity="0.5"
          />
          <path
            d="M2373.77 76.9761H-454.79V80.3731H2373.77V76.9761Z"
            fill={`${props.theme && props.theme.color}`}
            fillOpacity="0.5"
          />
          <path
            d="M2497.41 42.1797H-578.432V45.5767H2497.41V42.1797Z"
            fill={`${props.theme && props.theme.color}`}
            fillOpacity="0.5"
          />
          <path
            d="M2644.74 0.724609H-725.756V4.12162H2644.74V0.724609Z"
            fill={`${props.theme && props.theme.color}`}
            fillOpacity="0.5"
          />
          <path
            d="M2850.1 -190.45L1765.34 191.355L1767.69 194.363L2852.45 -187.442L2850.1 -190.45Z"
            fill={`${props.theme && props.theme.color}`}
            fillOpacity="0.5"
          />
          <path
            d="M2376.93 -190.201L1563.2 191.368L1566.1 194.152L2379.83 -187.416L2376.93 -190.201Z"
            fill={`${props.theme && props.theme.color}`}
            fillOpacity="0.5"
          />
          <path
            d="M1903.52 -190.074L1361.05 191.555L1364.71 193.899L1907.18 -187.729L1903.52 -190.074Z"
            fill={`${props.theme && props.theme.color}`}
            fillOpacity="0.5"
          />
          <path
            d="M1430.09 -189.65L1158.89 192.005L1163.46 193.467L1434.66 -188.188L1430.09 -189.65Z"
            fill={`${props.theme && props.theme.color}`}
            fillOpacity="0.5"
          />
          <path
            d="M962.022 -188.852H956.958V192.791H962.022V-188.852Z"
            fill={`${props.theme && props.theme.color}`}
            fillOpacity="0.5"
          />
          <path
            d="M488.871 -189.513L484.3 -188.051L755.495 193.604L760.066 192.142L488.871 -189.513Z"
            fill={`${props.theme && props.theme.color}`}
            fillOpacity="0.5"
          />
          <path
            d="M15.3033 -190.039L11.6385 -187.694L554.11 193.934L557.775 191.59L15.3033 -190.039Z"
            fill={`${props.theme && props.theme.color}`}
            fillOpacity="0.5"
          />
          <path
            d="M-458.03 -190.286L-460.932 -187.501L352.795 194.133L355.696 191.349L-458.03 -190.286Z"
            fill={`${props.theme && props.theme.color}`}
            fillOpacity="0.5"
          />
          <path
            d="M-931.253 -190.332L-933.605 -187.324L151.28 194.317L153.631 191.309L-931.253 -190.332Z"
            fill={`${props.theme && props.theme.color}`}
            fillOpacity="0.5"
          />
        </svg>
      </div>
      <div className="logo">LOGO</div>
      <div className="user-info">
        <img src={Ava} alt="ava" className="ava" />
        <span className="user-name">Ralpf</span>
      </div>
    </Style.Header>
  );
};

export default withTheme(Header);
