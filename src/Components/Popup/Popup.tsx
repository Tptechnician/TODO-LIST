import React, { useEffect } from 'react';
import './Popup.scss';
import Form from '../Form/Form';
import FormInput from '../Form/FormInput/FormInput';
import { useForm } from '../../Hooks/useForm';
import { KeyboardEvent } from '../../interfaces/interfaces';
import { styleConfigPopup } from '../../constants/constants';
import { configurationInput } from '../../constants/constants';
import { PopupProps, useForms } from '../../interfaces/interfaces';
import todo from '../../Store/TodoStore';
import UserStore from '../../Store/UserStore';

function Popup({ isOpen, onTogglePopup }: PopupProps) {
  const { values, resetForm, handleChange }: useForms = useForm();

  function handleSubmit(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    if (values.newTodo) {
      todo.addTodo(UserStore.userStore, values.newTodo);
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

  function handleEscClose(evt: KeyboardEvent) {
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
          styleConfig={styleConfigPopup}
        >
          <FormInput
            title="Новая задача"
            value={values.newTodo}
            nameInput="newTodo"
            handleChange={handleChange}
            config={configurationInput.newTodo}
            styleConfig={styleConfigPopup}
          />
        </Form>
      </div>
    </div>
  );
}

export default Popup;
