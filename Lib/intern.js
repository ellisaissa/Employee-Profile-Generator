const Employee = require("./Employee");

class Intern extends Employee {
    constructor(props, school) {
        super(props);
        this.school= school;
        this.JobTitle = JobTitle;
    }
    getRole() {
        return this.JobTitle;
    }
    getSchool() {
        return this.school;
    }
};

module.exports = Intern;