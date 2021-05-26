import { useState } from 'react';

const useFormInput = (inValidMesage) => {
  const [value, setValue] = useState('');
  const [valid, setValid] = useState(true);
  const onChange = (e) => {
    setValue(e.target.value);
    e.target.setCustomValidity('');
    e.target.checkValidity();
  };

  const onBlur = (e) => {
    setValid(e.target.validity.valid);
  };
  const onInvalid = (e) => {
    if (!e.target.validity.valid) {
      e.target.setCustomValidity(inValidMesage);
    }
  };
  const validator = {
    onBlur,
    onInvalid,
    onChange,
    valid,
  };
  return [value, validator];
};

export default useFormInput;
