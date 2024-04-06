// Write your solution in this file!
const employee = {
    name: "Sylvia Tata",
    streetAddress: "00604 Kabete Rd"
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee,
        [key]: value
    };
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}

console.log("Original Employee:", employee);

const updatedEmployee = updateEmployeeWithKeyAndValue(employee, "city", "Nairobi");
console.log("Updated Employee (Non-destructive):", updatedEmployee);

destructivelyUpdateEmployeeWithKeyAndValue(employee, "city", "Nairobi");
console.log("Updated Employee (Destructive):", employee);

const deletedEmployee = deleteFromEmployeeByKey(employee, "streetAddress");
console.log("Employee after deletion (Non-destructive):", deletedEmployee);

destructivelyDeleteFromEmployeeByKey(employee, "streetAddress");
console.log("Employee after deletion (Destructive):", employee);

