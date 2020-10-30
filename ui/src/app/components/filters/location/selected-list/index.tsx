import React from 'react';
import * as Style from './styles';
import { v4 as uuidv4 } from 'uuid';
import BlueButton from '../../../shared/BlueButton/button.component';
import withTheme from '../../../../../HOC/withTheme';

const SelectedList = ({ ...props }) => {
  const [hoverCountry, setHoverCountry] = React.useState<string>();
  return (
    <Style.SelectedContainer theme={props.theme}>
      <div className="countries">
        {props.selectedCountry &&
          props.selectedCountry.map(c => {
            return (
              <span
                key={uuidv4()}
                className="item"
                onClick={() => props.removeCountry(c.value)}
              >
                <BlueButton
                  style={{ height: '32px' }}
                  onMouseEnter={() => setHoverCountry(c.value)}
                  onMouseLeave={() => setHoverCountry('')}
                >
                  {c.label}
                </BlueButton>
              </span>
            );
          })}
      </div>
      <div className="cities">
        {props.selectedCity &&
          props.selectedCity.map(c => {
            return (
              <span
                key={uuidv4()}
                className="item"
                onClick={() => props.removeCity(c.value)}
              >
                <BlueButton
                  style={
                    c.countryId === hoverCountry
                      ? { height: '32px', background: 'fff', color: 'black' }
                      : { height: '32px' }
                  }
                >
                  <span className="city">{c.label}</span>
                </BlueButton>
              </span>
            );
          })}
      </div>
    </Style.SelectedContainer>
  );
};

export default withTheme(SelectedList);
