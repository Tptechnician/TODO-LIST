import React from 'react';
import './Login.scss';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from '../../Hooks/useForm';
import Form from '../Form/Form';
import FormInput from '../Form/FormInput/FormInput';
import UserStore from '../../Store/UserStore';
import todo from '../../Store/TodoStore';

const configurationInput = {
  name: {
    type: 'text',
  },
  password: {
    type: 'password',
  },
};

const styleConfig = {
  formConteiner: 'form__conteiner',
  title: 'form__title',
  inputWraper: 'form__input-wraper',
  inputTitle: 'form__input-title',
  input: 'form__input',
  button: 'form__button form__button_login',
  buttonActive: 'form__button_active',
};

interface useForms {
  values: {
    [key: string]: string;
  };
  resetForm: () => void;
  handleChange?: (e: any) => void;
}

function Login({ login }: any) {
  const history = useHistory();
  const { values, resetForm, handleChange }: useForms = useForm();

  function handleSubmit(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    UserStore.login(values);
    if (localStorage.getItem('login')) {
      login(true);
      history.push('/');
    }

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
