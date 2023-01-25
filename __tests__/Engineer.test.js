const Engineer = require('../lib/Engineer');

describe("Engineer class", () => {
    const name = "jane";
    const id = 1;
    const email = "jane@email.com";
    const github = "janegithub";

    const engineer = new Engineer(name, id, email, github);

    const expectedName = "Jane";
    const expectedId = 1;
    const expectedEmail = "jane@email.com";
    const expectedGithub = "janegithub";
    const expectedRole = "Engineer";

    describe("getName method", () => {
        it("should return a string of name with the first letter capitalized", () => {
            expect(engineer.getName()).toBe(expectedName);
        });
    });

    describe("getId method", () => {
        it("should return a numeric id", () => {
            expect(engineer.getId()).toBe(expectedId);
        });
    });

    describe("getEmail method", () => {
        it("should return a valid email address", () => {
            expect(engineer.getEmail()).toBe(expectedEmail);
        });
    });

    describe("getGithub method", () => {
        it("should return a valid github username", () => {
            expect(engineer.getGithub()).toBe(expectedGithub);
        });
    });

    describe("getRole method", () => {
        it("should return a correct role", () => {
            expect(engineer.getRole()).toBe(expectedRole);
        });
    });
});