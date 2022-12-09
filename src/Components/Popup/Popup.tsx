import React, { useEffect } from 'react';
import './Popup.scss';
import Form from '../Form/Form';
import FormInput from '../Form/FormInput/FormInput';
import { useForm } from '../../Hooks/useForm';
import todo from '../../Store/TodoStore';

interface PopupProps {
  isOpen: boolean;
  currentUser: string;
  onTogglePopup: () => void;
}

interface useForms {
  values: {
    [key: string]: string;
  };
  resetForm: () => void;
  handleChange?: (e: any) => void;
}

const configurationInput = {
  newTodo: {
    type: 'text',
  },
};

const styleConfig = {
  formConteiner: 'form__conteiner',
  title: 'form__title form__title__popup',
  inputWraper: 'form__input-wraper',
  inputTitle: 'form__input-title',
  input: 'form__input form__input__popup',
  button: 'form__button form__button__popup',
};

function Popup({ isOpen, onTogglePopup, currentUser }: PopupProps) {
  const { values, resetForm, handleChange }: useForms = useForm();

  function handleSubmit(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    if (values.newTodo) {
      todo.addTodo(currentUser, values.newTodo);
      onTogglePopup();
      resetForm();
    }
  }

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleEscClose);
    }
    return () => {
      document.removeEventListener('keydown', handleEscClose);
    };
  }, [isOpen]);

  function handleClickClose(evt: React.MouseEvent) {
    if (evt.target === evt.currentTarget) {
      onTogglePopup();
    }
  }

  function handleEscClose(evt: any) {
    if (evt.key === 'Escape') {
      onTogglePopup();
    }
  }
  return (
    <div onClick={handleClickClose} className={`${isOpen ? 'popup popup_open' : 'popup'}`}>
      <div className="popup__content">
        <button className="popup__close" type="button" onClick={onTogglePopup} />
        <Form
          title="Введите задачу"
          name="addTodo"
          onSubmit={handleSubmit}
          buttonText="Добавить новую задачу"
          styleConfig={styleConfig}
        >
          <FormInput
            title="Новая задача"
            value={values.newTodo}
            nameInput="newTodo"
            handleChange={handleChange}
            config={configurationInput.newTodo}
            styleConfig={styleConfig}
          />
        </Form>
      </div>
    </div>
  );
}

export default Popup;
