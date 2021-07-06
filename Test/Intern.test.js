const Intern= require("../Lib/intern.js");


test("Can set school", () => {
    const testValue = "Smelly-Cat-U";
    const e = new Intern("Phoebe", 1, "test@test.com", testValue, "Intern");
    expect(e.github).toBe(testValue);
});

test("getSchool()", () => {
    const testValue = "Smelly-Cat-U";
    const e = new Intern("Phoebe", 1, "test@test.com", testValue, "Intern");
    expect(e.getRole()).toBe(testValue);
});

test("Can get Role() should return \"Intern\"", () => {
    const testValue = "Intern";
    const e = new Intern("Phoebe", 1, "test@test.com", "Smely-Cat-U", testValue);
    expect(e.getGithub()).toBe(testValue);
});