const Employee = require("../Lib/employee");

test("Can set employee", () => {
  const e = new Employee();
  expect(typeof (e)).toBe("object");
});

test("Can set employee name", () => {
  const name = "Ross";
  const e = new Employee(name);
  expect(e.name).toBe(name);
});

test("Can set employee id", () => {
  const testValue = 100;
  const e = new Employee("Rachel", testValue);
  expect(e.id).toBe(testValue);
});


test("Can set employee email", () => {
  const testValue = "test@test.com";
  const e = new Employee("Rachel", 1, testValue);
  expect(e.email).toBe(testValue);
});

test("Can get name via getName()", () => {
  const testValue = "Phoebe";
  const e = new Employee(testValue);
  expect(e.getemployeeName()).toBe(testValue);
});

test("Can get id via getemployeeName()", () => {
  const testValue = 100;
  const e = new Employee("Rachel", testValue);
  expect(e.getemployeeName()).toBe(testValue);
});

test("Can get email via getemployeeEmail()", () => {
  const testValue = "test@test.com";
  const e = new Employee("Rachel", 1, testValue);
  expect(e.getemployeeEmail()).toBe(testValue);
});

test("getRole() should return \"Employee\"", () => {
  const testValue = "Employee";
  const e = new Employee("Phoebe", 1, "test@test.com", "Employee");
  expect(e.getRole()).toBe(testValue);
});

test("Can instantiate Employee instance", () => {
  const e = new Employee();
  expect(typeof (e)).toBe("object");
});

test("Can set email via constructor argument", () => {
  const testValue = "test@test.com";
  const e = new Employee("Rachel", 1, testValue);
  expect(e.email).toBe(testValue);
});

test("Can get employee name()", () => {
  const testValue = "Phoebe";
  const e = new Employee(testValue);
  expect(e.getemployeeName()).toBe(testValue);
});

test("Can get id()", () => {
  const testValue = 100;
  const e = new Employee("Rachel", testValue);
  expect(e.getemployeeName()).toBe(testValue);
});

test("Can get email()", () => {
  const testValue = "test@test.com";
  const e = new Employee("Rachel", 1, testValue);
  expect(e.getemailAddress()).toBe(testValue);
});

test("getRole() should return \"Employee\"", () => {
  const testValue = "Employee";
  const e = new Employee("Phoebe", 1, "test@test.com", "Employee");
  expect(e.getemployeeTitle()).toBe(testValue);
});
