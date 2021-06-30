const Engineer= require("../Lib/engineer");

test("Can set GitHUb account.", () => {
    const testValue = "GitHubUser";
    const e = new Engineer("Rachel", 1, "test@test.com", testValue, "Engineer");
    expect(e.github).toBe(testValue);
});

test("getemployeeRole should return \"Engineer\"", () => {
    const testValue = "Engineer";
    const e = new Engineer("Rachel", 1, "test@test.com", "GitHubUser", "Engineer");
    expect(e.getRole()).toBe(testValue);
});

test("Can get GitHub username", () => {
    const testValue = "GitHubUser";
    const e = new Engineer("Rachel", 1, "test@test.com", testValue, "Engineer");
    expect(e.getGithub()).toBe(testValue);
});