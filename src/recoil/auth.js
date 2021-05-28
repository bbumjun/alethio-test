import { atom, selector, DefaultValue } from 'recoil';

const localStorageEffect =
  (key) =>
  ({ setSelf, onSet }) => {
    const savedValue = localStorage.getItem(key);
    if (savedValue != null) {
      setSelf(JSON.parse(savedValue));
    }

    onSet((newValue) => {
      if (newValue instanceof DefaultValue) {
        localStorage.removeItem(key);
      } else {
        localStorage.setItem(key, JSON.stringify(newValue));
      }
    });
  };

const tokenState = atom({
  key: 'tokenState',
  default: null,
  effects_UNSTABLE: [localStorageEffect('token')],
});

const authenticatedState = selector({
  key: 'authenticatedState',
  get: ({ get }) => !!get(tokenState),
});

const auth = {
  tokenState,
  authenticatedState,
};
export default auth;
