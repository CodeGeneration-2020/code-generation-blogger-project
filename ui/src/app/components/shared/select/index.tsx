import React from 'react';
import { SelectContainer } from './styles';

const Select = ({ title, options, selected, changeHandler }) => {
  return (
    <SelectContainer>
      <select onChange={e => changeHandler(JSON.parse(e.target.value))}>
        {options &&
          [{ value: title, label: title }, ...options].map((o, i) => {
            if (selected.every(e => e.value !== o.value)) {
              return (
                <option key={i} value={JSON.stringify(o)}>
                  {o.label}
                </option>
              );
            }
            return null;
          })}
      </select>
    </SelectContainer>
  );
};

export default Select;
