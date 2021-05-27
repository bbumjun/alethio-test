import Header from 'components/organizms/Header';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from 'common/theme';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { SignUp, Login, Home, MyPage } from 'components/pages';
import { useRecoilValue } from 'recoil';
import auth from 'recoil/auth';
function App() {
  const isAuthenticated = useRecoilValue(auth.authenticatedState);
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/logout"></Route>
          <Route path="/sign-up">
            <SignUp />
          </Route>
          <Route path="/mypage/order">
            {isAuthenticated ? <MyPage /> : <Redirect to="/" />}
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
