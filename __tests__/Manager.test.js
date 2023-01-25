const Manager = require('../lib/Manager');
describe("Manager class", () => {
    const name = "Jane";
    const id = 1;
    const email = "jane@email.com";
    const officeNumber = "123";
    const role = "Manager";

    const manager = new Manager(name, id, email, officeNumber);

    describe("getName method", () => {
        it("should return 'name'", () => {
            expect(manager.getName()).toBe(name);
        });
    });

    describe("getId method", () => {
        it("should return 'id'", () => {
            expect(manager.getId()).toBe(id);
        });
    });

    describe("getEmail method", () => {
        it("should return 'email'", () => {
            expect(manager.getEmail()).toBe(email);
        });
    });

    describe("getOfficeNumber method", () => {
        it("should return 'officeNumber'", () => {
            expect(manager.officeNumber).toBe(officeNumber);
        });
    });

    describe("getRole method", () => {
        it("should return 'role'", () => {
            expect(manager.getRole()).toBe(role);
        });
    });
});