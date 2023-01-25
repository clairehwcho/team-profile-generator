const Manager = require('../lib/Manager');
describe("Manager class", () => {
    const name = "jane";
    const id = 1;
    const email = "jane@email.com";
    const officeNumber = 123;

    const manager = new Manager(name, id, email, officeNumber);

    describe("getName method", () => {
        it("should return a string of name with the first letter capitalized", () => {
            const result = manager.getName();
            const expectedResult = "Jane";
            expect(result).toBe(expectedResult);
        });
    });

    describe("getId method", () => {
        it("should return a numeric id", () => {
            const result = manager.getId();
            const expectedResult = 1;
            expect(result).toBe(expectedResult);
        });
    });

    describe("getEmail method", () => {
        it("should return a valid email address", () => {
            const result = manager.getEmail();
            const expectedResult = "jane@email.com";
            expect(result).toBe(expectedResult);
        });
    });

    describe("officeNumber property", () => {
        it("should return a office number", () => {
            const result = manager.officeNumber;
            const expectedResult = 123;
            expect(result).toBe(expectedResult);
        });
    });

    describe("getRole method", () => {
        it("should return a correct role", () => {
            const result = manager.getRole();
            const expectedResult = "Manager";
            expect(result).toBe(expectedResult);
        });
    });
});