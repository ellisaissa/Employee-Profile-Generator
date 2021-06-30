class Intern {
    constructor(employeeName, employeeID, emailAddress, jobTitle) {
        this.employeeName = employeeName;
        this.employeeID = employeeID;
        this.emailAddress = emailAddress;
        this.jobTitle = jobTitle;
    }
    getemployeeName() {
        return this.employeeName;
    }
    getemployeeID() {
        return this.employeeID;
    }
    getEmail() {
        return this.emailAddress;
    }
    getRole() {
        return this.jobTitle;
    }
}

module.exports = Intern;