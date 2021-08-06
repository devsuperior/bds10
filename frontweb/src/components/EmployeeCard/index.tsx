import { Employee } from "types/employee"

import './styles.css';

type Props = {
    employee: Employee;
}

const EmployeeCard = ({ employee }: Props) => {

    return (
        <div className="employee-card-container">
            <div className="employee-card-name">{employee.name}</div>
            <div className="employee-card-email">{employee.email}</div>
        </div>
    )
}

export default EmployeeCard;
