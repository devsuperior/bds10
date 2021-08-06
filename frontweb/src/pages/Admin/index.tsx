import { Switch } from 'react-router-dom';
import PrivateRoute from 'components/PrivateRoute';
import Employees from './Employees';

import './styles.css';

const Admin = () => {
  return (
    <div className="admin-container">
      <div className="container admin-content-container">
        <Switch>
          <PrivateRoute path="/admin/employees">
            <Employees />
          </PrivateRoute>
        </Switch>
      </div>
    </div>
  );
};

export default Admin;
