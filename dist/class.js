"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Department {
    employees = [];
    addEmployee(employee) {
        this.employees.push(employee);
    }
    showEmployee() {
        for (const employee of this.employees) {
            console.log(employee);
        }
    }
}
class ItDepartment extends Department {
    itEmployee = [];
    addEmployee(employee) {
        this.itEmployee.push(employee);
    }
    showEmployee() {
        console.log(this.itEmployee);
    }
}
// const departmentObj = new ItDepartment();
// departmentObj.addEmployee("Tara");
// departmentObj.showEmployee();
class Person {
    name = "";
    age = 0;
    setName(name) {
        this.name = name;
    }
    greet() {
        console.log(`Hi ${this.name}! nice to meet you `);
    }
}
const personObj = new Person();
personObj.setName("Tara");
personObj.greet();
//# sourceMappingURL=class.js.map