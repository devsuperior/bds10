import { Router, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from 'components/Navbar';
import history from 'util/history';
import Home from 'pages/Home';
import Admin from 'pages/Admin';

const Routes = () => (
  <Router history={history}>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Redirect from="/admin" to="/admin/employees" exact />
      <Route path="/admin">
        <Admin />
      </Route>
    </Switch>
  </Router>
);

export default Routes;
