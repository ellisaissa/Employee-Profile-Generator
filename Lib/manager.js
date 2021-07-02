const Employee = require("./Employee");

class Manager extends Employee {
    constructor(props, officenumber, JobTitle) {
        super(props);
        this.officeumber = officenumber;
        this.JobTitle = JobTitle;
    }
    getRole() {
        return this.JobTitle;
    }
    getOfficeNumber(){
        return this.officenumber;
    }
}

module.exports = Manager;