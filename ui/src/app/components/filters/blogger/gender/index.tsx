import React from 'react';
import * as Style from './styles';
import maleImg from '../../../../../img/male.svg';
import femaleImg from '../../../../../img/female.svg';

const GenderFilter = props => {
  return (
    <Style.Gender>
      <div className="item">
        <div className="checkbox">
          <input
            id="checkbox-male"
            className="checkbox-input"
            type="checkbox"
            name="gender"
            checked={props.gender && props.gender === 'male'}
            onClick={() => props.setFilter('male', 'gender')}
          />
          <label htmlFor="checkbox-male" className="label">
            <img src={maleImg} alt="male" width="40" height="30" />
          </label>
        </div>
      </div>
      <div className="item">
        <div className="checkbox">
          <input
            id="checkbox-female"
            className="checkbox-input"
            type="checkbox"
            name="gender"
            checked={props.gender && props.gender === 'female'}
            onClick={() => props.setFilter('female', 'gender')}
          />
          <label htmlFor="checkbox-female" className="label">
            <img src={femaleImg} alt="female" width="40" height="25" />
          </label>
        </div>
      </div>
    </Style.Gender>
  );
};

export default GenderFilter;
