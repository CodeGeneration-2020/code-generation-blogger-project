import React from 'react';
import Select from 'react-select';
import { SelectContainer } from './select.styles';
import withTheme from '../../../../HOC/withTheme';

const RSelect: React.FC<{
  options;
  changeHandler;
  selected;
  placeholder;
  theme?;
  name?;
  errors?;
}> = ({
  options,
  changeHandler,
  selected,
  placeholder,
  theme,
  name,
  errors,
}) => {
  const selectStyles = {
    input: provided => ({
      ...provided,
      minHeight: '1px',
      color: '#90A1AC',
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontSize: '14px',
      lineHeight: '20px',
      paddingTop: '-3px',
    }),
    placeholder: base => ({
      ...base,
      color: '#90A1AC',
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontSize: '14px',
      lineHeight: '20px',
    }),
    control: base => ({
      ...base,
      '&:hover': { borderColor: 'none' },
      border: '1px solid #414D55',
      boxSizing: 'border-box',
      background: '#1A1E24',
      borderRadius: '8px',
      boxShadow: 'none',
      marginTop: '1px',
      cursor: 'pointer',
      height: 32,
      minHeight: 32,
    }),
    valueContainer: styles => {
      return {
        ...styles,
        paddingLeft: '15px',
      };
    },
    option: (styles, { isFocused }) => {
      return {
        ...styles,
        backgroundColor: isFocused ? theme && theme.color : '#1A1E24',
        borderRadius: isFocused ? `15px` : 'none',
        width: '80%',
        marginLeft: '10px',
        color: isFocused ? 'white' : theme && theme.color,
        fontFamily: '"KhulaRegular", sans-serif',
        cursor: 'pointer',
        borderBottom: '1px solid #414D55',
      };
    },
    menu: (provided, state) => ({
      ...provided,
      border: '1px solid #414D55',
      boxSizing: 'border-box',
      borderRadius: '8px',
      boxShadow: 'none',
      background: '#1a1e24',
    }),
    dropdownIndicator: style => ({
      ...style,
      paddingTop: 0,
      paddingBottom: 0,
      display: 'none',
    }),
    indicatorSeparator: style => ({
      ...style,
      background: 'none',
    }),
  };

  const getOptions = options => {
    return options.filter(
      option => selected.every(e => e.value !== option.value) && option,
    );
  };

  return (
    <SelectContainer theme={theme}>
      <Select
        className="react-select"
        placeholder={placeholder}
        name={placeholder}
        styles={selectStyles}
        value={''}
        onChange={option => option && changeHandler(option[0])}
        options={getOptions(options)}
        isMulti={true}
        onFocus={_ => {}}
      />
      {errors && <span className="error">{errors[name]}</span>}
    </SelectContainer>
  );
};

export default withTheme(RSelect);
