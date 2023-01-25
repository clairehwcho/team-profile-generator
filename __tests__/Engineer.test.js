const Engineer = require('../lib/Engineer');

describe("Engineer class", () => {
    const name = "jane";
    const id = 1;
    const email = "jane@email.com";
    const github = "janegithub";

    const engineer = new Engineer(name, id, email, github);

    describe("getName method", () => {
        it("should return a string of name with the first letter capitalized", () => {
            const result = engineer.getName();
            const expectedResult = "Jane";
            expect(result).toBe(expectedResult);
        });
    });

    describe("getId method", () => {
        it("should return a numeric id", () => {
            const result = engineer.getId();
            const expectedResult = 1;
            expect(result).toBe(expectedResult);
        });
    });

    describe("getEmail method", () => {
        it("should return a valid email address", () => {
            const result = engineer.getEmail();
            const expectedResult = "jane@email.com";
            expect(result).toBe(expectedResult);
        });
    });

    describe("getGithub method", () => {
        it("should return a valid github username", () => {
            const result = engineer.getGithub();
            const expectedResult = "janegithub";
            expect(result).toBe(expectedResult);
        });
    });

    describe("getRole method", () => {
        it("should return a correct role", () => {
            const result = engineer.getRole();
            const expectedResult = "Engineer";
            expect(result).toBe(expectedResult);
        });
    });
});