import { useCallback, useState } from 'react';

const useValidateInput = (invalidMesage) => {
  const [value, setValue] = useState('');
  const [valid, setValid] = useState(true);
  const onChange = useCallback((e) => {
    setValue(e.target.value);
    e.target.setCustomValidity('');
    e.target.checkValidity();
  }, []);

  const onBlur = useCallback((e) => {
    setValid(e.target.validity.valid);
  }, []);
  const onInvalid = useCallback(
    (e) => {
      if (!e.target.validity.valid) {
        e.target.setCustomValidity(invalidMesage);
      }
    },
    [invalidMesage],
  );
  const validator = {
    onBlur,
    onInvalid,
    onChange,
    valid,
  };
  return [value, validator];
};

export default useValidateInput;
