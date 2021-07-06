const Manager= require("../Lib/manager.js");

test("Can set office number", () => {
    const testValue = "1";
    const e = new Manager("Chandler", testValue, "test@test.com", "Manager");
    expect(e.officeNumber).toBe(testValue);
});

test("getemployeeRole should return \"Manager\"", () => {
    const testValue = "Manager";
    const e = new Manager("Chandler", "1", "test@test.com", "GitHubUser", testValue);
    expect(e.getRole()).toBe(testValue);
});

test("Can get office number", () => {
    const testValue = "1";
    const e = new Manager("Chandler", testValue, "test@test.com", "Manager");
    expect(e.getOfficeNumber()).toBe(testValue);
});