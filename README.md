## 헤더

- React Router의 NavLink 컴포넌트 사용해 현재 페이지의 액티브 스타일 적용
- 모바일에서 최상위 뷰는 fixed position 사용
- 로그인 state 에 따른 nav bar 조건부 렌더링

### 회원가입 유효성검사

- useValidateInput hook에서 value, valid state 와 onChange, onBlur,onInvalid 핸들러를 반환한다.
- onChange 핸들러는 값이 바뀔 때 마다 유효성 검사를 실행하고, 값이 유효하지 않을때 invalid 이벤트를 발생시킨다.
- onBlur 핸들러는 valid state를 업데이트하여 input element의 style을 업데이트한다.
- onInvalid 핸들러는 constarint validation api 의 커스텀 메시지를 업데이트한다.
- handleSubmit 함수는 패스워드 값이 같은 경우에만 데이터를 post한다.
- try catch 문을 사용해 error code에 따라 에러 메시지를 alert한다.
- token은 recoil 의 전역상태로 저장된다.
