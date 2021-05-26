import { atom, selector } from 'recoil';

const tokenState = atom({
  key: 'tokenState',
  default: null,
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
