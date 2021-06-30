const Employee = require("./Employee");

class Manager extends Employee {
    constructor(props, officenumber, jobTitle) {
        super(props);
        this.officeumber = officenumber;
        this.jobTitle = jobTitle;
    }
    getOfficeNumber(){
        return this.officenumber;
    }
    getRole() {
        return this.jobTitle;
    }
}

module.exports = Manager;