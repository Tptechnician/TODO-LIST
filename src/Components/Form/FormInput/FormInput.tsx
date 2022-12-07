import React from 'react';
import './FormInput.scss';

interface inputProps {
  title: string;
  nameInput: string;
  handleChange: (e: any) => void;
  value: string;
  styleConfig: {
    inputWraper: string;
    inputTitle: string;
    input: string;
  };
  config?: {
    type: string;
  };
}

function FormInput({ title, value, nameInput, handleChange, config, styleConfig }: inputProps) {
  return (
    <label className={`${styleConfig.inputWraper}`}>
      <h6 className={`${styleConfig.inputTitle}`}>{title}</h6>
      <input
        className={`${styleConfig.input}`}
        value={value || ''}
        name={nameInput}
        {...config}
        required
        onChange={handleChange}
      />
    </label>
  );
}

export default FormInput;
