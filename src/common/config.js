import axios from 'axios';
axios.defaults.baseURL = 'http://106.10.53.116:8099/';
axios.defaults.headers.post['Content-Type'] = 'application/json';
export const serverUrl = 'http://106.10.53.116:8099/';

export const message = {
  error: {
    ERROR_OCCURED: '문제가 발생했습니다.',
    ERROR_BY_CLIENT: '잘못된 요청입니다.',
    ERROR_BY_SERVER: '서버로부터 응답을 받지 못했습니다.',
  },
  success: {
    SIGNUP: '회원가입에 성공했습니다.',
  },
};
