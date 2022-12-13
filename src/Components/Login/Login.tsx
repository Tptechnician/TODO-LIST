import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../Hooks/useForm';
import Form from '../Form/Form';
import FormInput from '../Form/FormInput/FormInput';
import { useForms, Auth } from '../../interfaces/interfaces';
import { configurationInput, styleConfig } from '../../constants/constants';
import UserStore from '../../Store/UserStore';

function Login({ setLoggedin, history }: Auth) {
  const { values, resetForm, handleChange }: useForms = useForm();

  function handleSubmit(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    UserStore.authorization(values, setLoggedin, history);
    resetForm();
  }

  const linkAuthorization = (
    <p className="form__paragraph">
      Ещё не зарегистрированы?{' '}
      <Link className="form__link" to="/signup">
        Регистрация
      </Link>
    </p>
  );
  return (
    <main className="auth">
      <Form
        title="Рады видеть!"
        name="login"
        onSubmit={handleSubmit}
        buttonText="Войти"
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

export default Login;
