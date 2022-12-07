import { useState } from 'react';

export function useForm() {
  const [values, setValues] = useState({});

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    setValues({ ...values, [name]: value });
  }

  function resetForm() {
    setValues({});
  }
  return { values, resetForm, handleChange, setValues };
}
