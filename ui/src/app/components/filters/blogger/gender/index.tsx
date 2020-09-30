import React from 'react';
import * as Style from './styles';

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
            onClick={() =>
              props.setFilter(
                `${props.gender === 'male' ? '' : 'male'}`,
                'gender',
              )
            }
          />
          <label htmlFor="checkbox-male" className="label" />
        </div>
        <div className="icon-male">
          <svg
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.3595 0V2.36554H16.9618L12.8033 6.52407C11.4685 5.53379 9.81582 4.9478 8.02614 4.9478C3.59342 4.9478 0 8.54118 0 12.9739C0 17.4066 3.59342 21 8.0261 21C12.4588 21 16.0522 17.4066 16.0522 12.9739C16.0522 11.1842 15.4662 9.53154 14.4759 8.19673L18.6345 4.03823V9.64052H21V0L11.3595 0ZM8.0261 18.3566C5.05329 18.3566 2.64333 15.9467 2.64333 12.9739C2.64333 10.001 5.05329 7.59109 8.0261 7.59109C10.9989 7.59109 13.4089 10.001 13.4089 12.9739C13.4089 15.9467 10.9989 18.3566 8.0261 18.3566Z"
              fill={props.gender === 'male' ? '#28B5E1' : 'white'}
            />
          </svg>
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
            onClick={() =>
              props.setFilter(
                `${props.gender === 'female' ? '' : 'female'}`,
                'gender',
              )
            }
          />
          <label htmlFor="checkbox-female" className="label" />
        </div>
        <div className="icon-female">
          <svg
            width="17"
            height="29"
            viewBox="0 0 17 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.5277 8.26387C16.5277 3.69988 12.8279 0 8.26387 0C3.69982 0 0 3.69988 0 8.26387C0 12.2687 2.84891 15.6078 6.63052 16.366V22.2118H3.12498V25.4785H6.63052V29H9.89721V25.4785H13.4028V22.2118H9.89721V16.366C13.6789 15.6078 16.5277 12.2687 16.5277 8.26387ZM3.12498 8.26387C3.12498 5.42572 5.42572 3.12498 8.26387 3.12498C11.102 3.12498 13.4028 5.42572 13.4028 8.26387C13.4028 11.102 11.102 13.4028 8.26387 13.4028C5.42572 13.4028 3.12498 11.102 3.12498 8.26387Z"
              fill={props.gender === 'female' ? '#28B5E1' : 'white'}
            />
          </svg>
        </div>
      </div>
    </Style.Gender>
  );
};

export default GenderFilter;
