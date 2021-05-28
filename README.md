## 1. 헤더

- React Router의 NavLink 컴포넌트 사용해 현재 페이지의 액티브 스타일 적용
- 모바일에서 최상위 뷰는 fixed position 사용
- 로그인 state 에 따른 네비게이션 메뉴 조건부 렌더링

## 2. 서비스

- Form , FormInput 컴포넌트 재사용
- recoil authenticated value 통해 로그인 여부 체크

## 3. 회원가입

- Form ,FormInput 컴포넌트 재사용

  ### 유효성 검사

  - useValidateInput hook에서 value, valid state 와 onChange, onBlur,onInvalid 핸들러를 반환한다.
  - onChange 핸들러는 값이 바뀔 때 마다 유효성 검사를 실행하고, 값이 유효하지 않을때 invalid 이벤트를 발생시킨다.
  - onBlur 핸들러는 valid state를 업데이트하여 input element의 style을 업데이트한다.
  - onInvalid 핸들러는 constarint validation api 의 커스텀 메시지를 업데이트한다.
  - handleSubmit 함수는 패스워드 값이 같은 경우에만 데이터를 post한다.

  ### token 저장

  - axios와 try catch 문을 사용해 error code에 따라 에러 메시지를 alert한다.
  - token은 recoil 의 전역상태로 저장된다.

## 4.로그인

- Form, FormInput 컴포넌트 재사용
- 서버로부터 실패응답을 받으면 비밀번호 확인 alert 호출
- 응답 성공시 token 저장

## 5. 마이페이지

- 커스텀 로더 컴포넌트를 만들어 요청시간 동안 로딩 표시
- 로그인 되지 않은 상태에서 뒤로가기로 접근시 홈으로 리다이렉트


> 실행방법
>
> 실행에 필요한 라이브러리 설치
>
> npm install
>
> 개발서버 실행
>
> npm start
