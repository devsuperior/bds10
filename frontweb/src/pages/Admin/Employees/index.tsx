import { Route, Switch } from "react-router-dom";
import Form from "./Form";
import List from "./List";

const Employee = () => {

    return (
        <Switch>
            <Route path="/admin/employees" exact>
                <List />
            </Route>
            <Route path="/admin/employees/:employeeId">
                <Form />
            </Route>
        </Switch>
    )
}

export default Employee;
