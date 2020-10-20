import React from 'react';
import Input from '../../../shared/Input/input.commponent';
import * as Style from './styles';

const Budget = ({ handleBlur, budget, setBudget, errors, touched }) => {
  return (
    <Style.Budget>
      <span className="text">Budget</span>
      <Input
        placeholder={'sum'}
        type="text"
        name="budget"
        onChange={e => setBudget(e.target.value)}
        onBlur={handleBlur}
        value={budget}
        errors={errors}
        touched={touched}
        style={{ width: '115px', height: '56px', fontSize: '20px' }}
      />
    </Style.Budget>
  );
};

export default Budget;
