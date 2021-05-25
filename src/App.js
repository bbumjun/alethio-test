import Header from 'components/organizms/Header';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from 'common/theme';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Header />
        <Switch>
          <Route exact path="/"></Route>
          <Route path="/login"></Route>
          <Route path="/mypage/order"></Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
