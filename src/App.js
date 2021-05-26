import Header from 'components/organizms/Header';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from 'common/theme';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import SignUp from 'components/pages/SignUp';
function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <RecoilRoot>
          <Header />
          <Switch>
            <Route exact path="/"></Route>
            <Route path="/login"></Route>
            <Route path="/logout"></Route>
            <Route path="/sign-up">
              <SignUp />
            </Route>
            <Route path="/mypage/order"></Route>
          </Switch>
        </RecoilRoot>
      </ThemeProvider>
    </Router>
  );
}

export default App;
