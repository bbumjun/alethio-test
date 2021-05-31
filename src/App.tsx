import Header from 'components/organisms/Header';
import { ThemeProvider } from 'styled-components';
import theme from 'common/theme';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { SignUp, Login, Home, MyPage, MyOrderDetail } from 'components/pages';
import { useRecoilValue } from 'recoil';
import auth from 'recoil/auth';
import { ReactElement } from 'react';
function App(): ReactElement {
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
          <Route path="/logout">
            <Redirect to="/" />
          </Route>
          <Route path="/sign-up">
            <SignUp />
          </Route>
          <Route exact path="/mypage/order">
            {isAuthenticated ? <MyPage /> : <Redirect to="/" />}
          </Route>
          <Route path="/mypage/order/:id">
            {isAuthenticated ? <MyOrderDetail /> : <Redirect to="/" />}
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
