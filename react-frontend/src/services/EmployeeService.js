import {axiosInstance} from "../axiosConfig";

const EMPLOYEE_API_BASE_URL = "api/v1/employees";

export const getEmployees = () => {
    return axiosInstance.get(EMPLOYEE_API_BASE_URL);
}

export const createEmployee = (employee) => {
    return axiosInstance.post(EMPLOYEE_API_BASE_URL, employee);
}

export const getEmployeeById = (employeeId) => {
    return axiosInstance.get(`${EMPLOYEE_API_BASE_URL}/${employeeId}`);
}

export const updateEmployeeById = (employee, employeeId) => {
    return axiosInstance.put(`${EMPLOYEE_API_BASE_URL}/${employeeId}`, employee);
}

export const deleteEmployeeById = (employeeId) => {
    return axiosInstance.delete(`${EMPLOYEE_API_BASE_URL}/${employeeId}`);
}
