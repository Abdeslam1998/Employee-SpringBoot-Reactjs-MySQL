import axios from "axios";
const Employee_API = 'http://localhost:8080/api/v1/employees'

class EmployeeService{

    getEmployees(){
        return axios.get(Employee_API)
    }

    createEmployee(employee){
        return axios.post(Employee_API, employee);
    }

    getEmployeeById(employeeId){
        return axios.get(Employee_API +'/'+ employeeId);
    }

    updateEmployee(employee, employeeId){
        return axios.put(Employee_API +'/'+ employeeId, employee)
    }

    deleteEmployee(employeeId){
        return axios.delete(Employee_API +'/'+ employeeId);
    }
}

export default new EmployeeService()