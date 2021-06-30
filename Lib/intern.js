const Employee = require("./Employee");

class Intern extends Employee {
    constructor(props, school) {
        super(props);
        this.school= school;
        this.jobTitle = jobTitle;
    }
    getSchool() {
        return this.school;
    }
    getRole() {
        return this.jobTitle;
    }
}

module.exports = Intern;