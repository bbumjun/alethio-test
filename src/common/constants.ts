import axios from 'axios';

axios.defaults.baseURL = 'http://106.10.53.116:8099';
axios.defaults.headers.post['Content-Type'] = 'application/json';

export const messages = {
  SIGN_UP: {
    SUCCESS: '회원가입이 완료되었습니다.',
    FAILURE: '회원가입이 실패했습니다.',
  },
  LOGIN: {
    SUCCESS: '로그인 되었습니다.',
    FAILURE: '로그인에 실패했습니다.',
    REQUIRE: '로그인이 필요합니다.',
  },

  LOGOUT: {
    SUCCESS: '로그아웃 되었습니다.',
    FAILURE: '로그아웃이 실패했습니다.',
  },
  ORDER: {
    CONFIRM: '주문하시겠습니까?',
    SUCCESS: '주문이 완료되었습니다.',
    FAILURE: '주문에 실패했습니다.',
  },
  EMAIL: {
    HINT: '이메일을 입력해주세요.',
    CONFIRM: '이메일을 다시 확인해주세요.',
  },
  PASSWORD: {
    HINT: '비밀번호를 입력해주세요.',
    CONFIRM: '비밀번호를 다시 확인해주세요.',
    DISCORDANCE: '비밀번호가 불일치합니다.',
  },
  PASSWORD_AGAIN: {
    HINT: '입력한 비밀번호와 같게 입력해주세요.',
  },
  MOBILE: {
    HINT: '전화번호를 입력해주세요.',
    CONFIRM: '전화번호를 다시 확인해주세요.',
  },
  ERROR: {
    BAD_REQUEST: '잘못된 요청입니다.',
    UNAUTHORIZED: '로그인이 필요합니다.',
    FORBIDDEN: '접근할 수 있는 권한이 없습니다.',
    NOT_FOUND: '찾을 수 없는 페이지입니다.',
    INTERNAL_SERVER_ERROR: '서버에 문제가 있어 요청을 수행할 수 없습니다.',
    SOMETHING_WRONG: '오류가 발생했습니다.',
  },
};
