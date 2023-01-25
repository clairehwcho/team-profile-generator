const Employee = require('../lib/Employee');

describe("Employee class", () => {
    const name = "jane";
    const id = 1;
    const email = "jane@email.com";

    const employee = new Employee(name, id, email);

    describe("getName method", () => {
        it("should return a string of name with the first letter capitalized", () => {
            const result = employee.getName();
            const expectedResult = "Jane";
            expect(result).toBe(expectedResult);
        });
    });

    describe("getId method", () => {
        it("should return a numeric id", () => {
            const result = employee.getId();
            const expectedResult = 1;
            expect(result).toBe(expectedResult);
        });
    });

    describe("getEmail method", () => {
        it("should return a valid email address", () => {
            const result = employee.getEmail();
            const expectedResult = "jane@email.com";
            expect(result).toBe(expectedResult);
        });
    });

    describe("getRole method", () => {
        it("should return a correct role", () => {
            const result = employee.getRole();
            const expectedResult = "Employee";
            expect(result).toBe(expectedResult);
        });
    });
});