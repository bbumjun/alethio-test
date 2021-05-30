import { useCallback, useState } from 'react';

const useFormInput = (invalidMessage: string) => {
  const [value, setValue] = useState<string>('');
  const [isValid, setValid] = useState(true);
  const handleChange = useCallback((e) => {
    setValue(e.target.value);
    e.target.setCustomValidity('');
    e.target.checkValidity();
  }, []);

  const handleBlur = useCallback((e) => {
    setValid(e.target.validity.valid);
  }, []);

  const handleInvalid = useCallback(
    (e) => {
      if (!e.target.validity.valid) {
        e.target.setCustomValidity(invalidMessage);
      }
    },
    [invalidMessage],
  );

  return { value, handleChange, handleBlur, handleInvalid, isValid };
};

export default useFormInput;
