import React, { SetStateAction } from 'react';
import { RouterChildContext } from 'react-router-dom';

export interface FormProps {
  title: string;
  name: string;
  onSubmit: (e: any) => void;
  buttonText: string;
  linkAuthorization?: JSX.Element;
  styleConfig: {
    title: string;
    formConteiner: string;
    button: string;
    buttonActive?: string;
  };
  children: React.ReactNode;
}

export default interface inputProps {
  title: string;
  nameInput: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
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

export interface useForms {
  values: {
    [key: string]: string;
  };
  resetForm: () => void;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface Auth {
  setLoggedin: React.Dispatch<SetStateAction<boolean>>;
  history: RouterChildContext['router']['history'];
}

export interface PopupProps {
  isOpen: boolean;
  onTogglePopup: () => void;
}

export interface TodoConteinerProps {
  onTogglePopup: () => void;
  setLoggedin: React.Dispatch<SetStateAction<boolean>>;
  history: RouterChildContext['router']['history'];
}

export interface TodoItemProps {
  _id: string;
  title: string;
  made: boolean;
  autor: string;
}

export interface Item {
  task: {
    id: string;
    title: string;
    made: boolean;
    autor: string;
  };
}

export interface Data {
  url: string;
  headers: {
    [key: string]: string;
  };
}

export interface KeyboardEvent {
  key: string;
}
