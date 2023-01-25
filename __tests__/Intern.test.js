const Intern = require('../lib/Intern');

describe("Intern class", () => {
    const name = "jane";
    const id = 1;
    const email = "jane@email.com";
    const school = "university Of washington";
    const role = "Intern";

    const intern = new Intern(name, id, email, school);

    describe("getName method", () => {
        it("should return a string of name with the first letter capitalized", () => {
            const result = intern.getName();
            const expectedResult = "Jane";
            expect(result).toBe(expectedResult);
        });
    });

    describe("getId method", () => {
        it("should return a numeric id", () => {
            const result = intern.getId();
            const expectedResult = 1;
            expect(result).toBe(expectedResult);
        });
    });

    describe("getEmail method", () => {
        it("should return a valid email address", () => {
            const result = intern.getEmail();
            const expectedResult = "jane@email.com";
            expect(result).toBe(expectedResult);
        });
    });

    describe("getSchool method", () => {
        it("should return a school name with the first letter capitalized", () => {
            const result = intern.getSchool();
            const expectedResult = "University of Washington";
            expect(result).toBe(expectedResult);
        });
    });

    describe("getRole method", () => {
        it("should return a correct role", () => {
            const result = intern.getRole();
            const expectedResult = "Intern";
            expect(result).toBe(expectedResult);
        });
    });
});