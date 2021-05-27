import axios from 'axios';

axios.defaults.baseURL = 'http://106.10.53.116:8099';
axios.defaults.headers.post['Content-Type'] = 'application/json';

export const message = {
  error: {
    ERROR_OCCURED: '문제가 발생했습니다.',
    ERROR_BY_CLIENT: '잘못된 요청입니다.',
    ERROR_BY_SERVER: '서버로부터 응답을 받지 못했습니다.',
    DIFFERENT_PASSWORD: '비밀번호가 일치하지 않습니다.',
  },
  success: {
    SIGNUP: '회원가입에 성공했습니다.',
    LOGOUT: '로그아웃 되었습니다.',
    ORDER: '주문이 완료되었습니다.',
  },
  confirm: {
    EMAIL: '이메일을 다시 확인해주세요.',
    PASSWORD: '비밀번호를 다시 확인해주세요.',
    MOBILE: '전화번호를 다시 확인해주세요.',
  },
  type: {
    EMAIL: '이메일을 입력해주세요.',
    PASSWORD: '비밀번호를 입력해주세요.',
    PASSWORD_AGAIN: '비밀번호 확인',
    MOBILE: '전화번호를 입력해주세요.',
  },
  failure: {
    LOGIN: '로그인에 실패했습니다.',
    SIGNUP: '회원가입에 실패헀습니다.',
    FETCH: '데이터를 불러오는데 실패했습니다.',
  },
  require: {
    LOGIN: '로그인이 필요합니다.',
  },
  question: {
    ORDER: '이 제품을 주문하시겠습니까?',
  },
};
