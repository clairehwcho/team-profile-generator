const Employee = require('../lib/Employee');

describe("Employee class", () => {
    const name = "jane";
    const id = 1;
    const email = "jane@email.com";

    const employee = new Employee(name, id, email);

    const expectedName = "Jane";
    const expectedId = 1;
    const expectedEmail = "jane@email.com";
    const expectedRole = "Employee";

    describe("getName method", () => {
        it("should return a string of name with the first letter capitalized", () => {
            expect(employee.getName()).toBe(expectedName);
        });
    });

    describe("getId method", () => {
        it("should return a numeric id", () => {
            expect(employee.getId()).toBe(expectedId);
        });
    });

    describe("getEmail method", () => {
        it("should return a valid email address", () => {
            expect(employee.getEmail()).toBe(expectedEmail);
        });
    });

    describe("getRole method", () => {
        it("should return a correct role", () => {
            expect(employee.getRole()).toBe(expectedRole);
        });
    });
});