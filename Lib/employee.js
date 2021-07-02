// import React, {Component} from 'react';
const React = require("../node_modules/react");

class Employee extends React.Component {
    constructor(props, employeeName, employeeID, emailAddress, JobTitle) {
        super(props);
        this.employeeName = employeeName;
        this.employeeID = employeeID;
        this.emailAddress = emailAddress;
        this.JobTitle = JobTitle;
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
        return this.JobTitle;
    }
};

module.exports = Employee;