import { ChangeEvent, useState } from 'react';

const useFormInput = (): {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
} => {
  const [value, setValue] = useState<string>('');
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return { value, onChange };
};

export default useFormInput;
