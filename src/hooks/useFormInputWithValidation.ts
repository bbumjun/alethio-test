import {
  ChangeEvent,
  FocusEvent,
  InvalidEvent,
  useCallback,
  useState,
} from 'react';

const useFormInputWithValidation = (invalidMessage: string) => {
  const [value, setValue] = useState<string>('');
  const [isValid, setValid] = useState(true);
  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    e.target.setCustomValidity('');
    e.target.checkValidity();
  }, []);

  const handleBlur = useCallback((e: FocusEvent<HTMLInputElement>) => {
    setValid(e.target.validity.valid);
  }, []);

  const handleInvalid = useCallback(
    (e: InvalidEvent<HTMLInputElement>) => {
      if (!e.target.validity.valid) {
        e.target.setCustomValidity(invalidMessage);
      }
    },
    [invalidMessage],
  );

  return { value, handleChange, handleBlur, handleInvalid, isValid };
};

export default useFormInputWithValidation;
