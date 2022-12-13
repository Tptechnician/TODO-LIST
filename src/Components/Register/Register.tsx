import React from 'react';
import './Register.scss';
import { Link } from 'react-router-dom';
import { useForm } from '../../Hooks/useForm';
import Form from '../Form/Form';
import FormInput from '../Form/FormInput/FormInput';
import { useForms, Auth } from '../../interfaces/interfaces';
import { configurationInput, styleConfig } from '../../constants/constants';
import userStore from '../../Store/UserStore';
function Register({ setLoggedin, history }: Auth) {
  const { values, resetForm, handleChange }: useForms = useForm();

  function handleSubmit(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    userStore.registration(values, setLoggedin, history);
    resetForm();
  }

  const linkAuthorization = (
    <p className="form__paragraph">
      Уже зарегистрированы?{' '}
      <Link className="form__link" to="/signin">
        Войти
      </Link>
    </p>
  );
  return (
    <main className="auth">
      <Form
        title="Добро пожаловать!"
        name="register"
        onSubmit={handleSubmit}
        buttonText="Зарегистрироваться"
        linkAuthorization={linkAuthorization}
        styleConfig={styleConfig}
      >
        <FormInput
          title="Имя"
          value={values.name}
          nameInput="name"
          handleChange={handleChange}
          config={configurationInput.name}
          styleConfig={styleConfig}
        />
        <FormInput
          title="Пароль"
          value={values.password}
          nameInput="password"
          handleChange={handleChange}
          config={configurationInput.password}
          styleConfig={styleConfig}
        />
      </Form>
    </main>
  );
}

export default Register;
