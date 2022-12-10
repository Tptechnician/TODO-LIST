import React from 'react';
import './Form.scss';
import { FormProps } from '../../interfaces/interfaces';

function Form({
  title,
  name,
  onSubmit,
  buttonText,
  linkAuthorization,
  styleConfig,
  children,
}: FormProps) {
  return (
    <section className={`${styleConfig.formConteiner}`}>
      <h3 className={`${styleConfig.title}`}>{title}</h3>
      <form className="form authForm" name={name} noValidate>
        {children}
        <button className={`${styleConfig.button}`} type="button" onClick={onSubmit}>
          {buttonText}
        </button>
        {linkAuthorization}
      </form>
    </section>
  );
}

export default Form;
