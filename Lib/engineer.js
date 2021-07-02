const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(props, github) {
        super(props);
        this.github = github;
    }
    getGithub() {
        return this.github;
    }
    getRole() {
        return this.jobTitle;
    }
};

module.exports = Engineer;