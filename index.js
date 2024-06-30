// Write your solution in this file!
const employee = {
    name : "Sam",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const updatedEmployee = {...employee, "streetAddress": "11 Broadway"};
    return updatedEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee,key, value){
    employee.streetAddress = "12 Broadway";
    return employee;
}

function deleteFromEmployeeByKey(employee, key){
    const newEmployee = {...employee};
    delete newEmployee.name;
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee.name;
    return employee;
}
    
