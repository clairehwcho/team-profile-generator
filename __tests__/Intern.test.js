const Intern = require('../lib/Intern');

describe("Intern class", () => {
    const name = "jane";
    const id = 1;
    const email = "jane@email.com";
    const school = "university Of washington";
    const role = "Intern";

    const intern = new Intern(name, id, email, school);

    const expectedName = "Jane";
    const expectedId = 1;
    const expectedEmail = "jane@email.com";
    const expectedSchool = "University of Washington";
    const expectedRole = "Intern";

    describe("getName method", () => {
        it("should return a string of name with the first letter capitalized", () => {
            expect(intern.getName()).toBe(expectedName);
        });
    });

    describe("getId method", () => {
        it("should return a numeric id", () => {
            expect(intern.getId()).toBe(expectedId);
        });
    });

    describe("getEmail method", () => {
        it("should return a valid email address", () => {
            expect(intern.getEmail()).toBe(expectedEmail);
        });
    });

    describe("getSchool method", () => {
        it("should return a school name with the first letter capitalized", () => {
            expect(intern.getSchool()).toBe(expectedSchool);
        });
    });

    describe("getRole method", () => {
        it("should return a correct role", () => {
            expect(intern.getRole()).toBe(expectedRole);
        });
    });
});