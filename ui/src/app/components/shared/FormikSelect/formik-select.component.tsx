import React from 'react';
import Select from 'react-select';
import { Error } from './formik-select.styles';

export const FormikSelect = ({
  errors,
  field,
  form,
  options = [],
  isMulti = false,
  defaultValue = [],
}) => {
  const selectStyles = {
    control: base => ({
      ...base,
      '&:hover': { borderColor: 'lightgray' },
      border: 'none',
      borderBottom: '1px solid lightgray',
      borderRadius: 'none',
      boxShadow: 'none',
      marginTop: '1px',
      cursor: 'pointer',
    }),
    valueContainer: styles => {
      return {
        ...styles,
        padding: '0',
      };
    },
    option: (styles, { isFocused }) => {
      return {
        ...styles,
        backgroundColor: isFocused ? '#940303' : 'white',
        color: isFocused ? 'white' : 'black',
        fontFamily: '"KhulaRegular", sans-serif',
        cursor: 'pointer',
      };
    },
    dropdownIndicator: style => ({
      ...style,
      display: 'none',
    }),
    indicatorSeparator: style => ({
      ...style,
      background: 'none',
    }),
    multiValue: styles => {
      return {
        ...styles,
        backgroundColor: '#940303',
        borderColor: '#940303',
        borderRadius: 10,
        paddingLeft: 5,
        paddingRight: 5,
      };
    },
    multiValueLabel: styles => ({
      ...styles,
      color: 'white',
      fontFamily: '"KhulaRegular", sans-serif',
      display: 'flex',
      alignItems: 'center',
      marginTop: 3,
    }),
    multiValueRemove: styles => ({
      ...styles,
      color: 'white',
      borderRadius: 10,
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: '#940303',
        color: 'white',
      },
    }),
    singleValue: styles => ({
      ...styles,
      color: 'black',
      fontSize: 14,
    }),
  };

  const onChange = option => {
    if (!option) {
      return form.setFieldValue(field.name, isMulti ? [] : '');
    }
    form.setFieldValue(field.name, isMulti ? option.map(item => item) : option);
  };

  const getValue = () => {
    if (options) {
      return isMulti
        ? options.filter((option: any) =>
            field.value.some(f => f.value === option.value),
          )
        : options.find((option: any) => option.value === field.value.value);
    } else {
      return isMulti ? defaultValue : '';
    }
  };

  return (
    <>
      <Select
        name={field.name}
        styles={selectStyles}
        defaultValue={defaultValue}
        value={getValue()}
        onChange={onChange}
        onFocus={() => {
          form.touched[field.name] = true;
        }}
        options={options}
        isMulti={isMulti}
      />
      <Error>{errors?.[field.name]}</Error>
    </>
  );
};

export default FormikSelect;
