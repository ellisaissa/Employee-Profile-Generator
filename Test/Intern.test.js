const Intern= require("../Lib/intern.js");


test("Can set school", () => {
    const testValue = "UofM";
    const e = new Intern("Phoebe", 1, "test@test.com", testValue, "Intern");
    expect(e.github).toBe(testValue);
});

test("getSchool()", () => {
    const testValue = "UofM";
    const e = new Intern("Phoebe", 1, "test@test.com", "GitHubUser", "Intern");
    expect(e.getRole()).toBe(testValue);
});

test("Can get Role() should return \"Intern\"", () => {
    const testValue = "Intern";
    const e = new Intern("Phoebe", 1, "test@test.com", testValue, "Intern");
    expect(e.getGithub()).toBe(testValue);
});