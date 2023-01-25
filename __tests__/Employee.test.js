const Employee = require('../lib/Employee');

describe("Employee class", () => {
    // describe("getName method", () => {
    //     it("should throw an error if 'name' is not a string or an empty string", () => {
    //         const employee = new Employee(3, 1, "jane@email.com");
    //         const err = new Error("Expected parameter 'name' to be a non-empty string");

    //         expect(employee.getName()).toThrowError(err);
    //     });
    // });

    describe('validate input', () => {
        it('should throw an error ', () => {
            const result = confirmAnswerValidator('blah');
            expect(result).toBe('Incorrect asnwer');
        });
    });

    // it("should throw an error if 'id' is not a number", () => {
    //     const cb = () => new Employee("Jane", "1", "jane@email.com");
    //     const err = new Error("Expected parameter 'id' to be a non-negative number");

    //     expect(cb).toThrowError(err);
    // });

    // it("should throw an error if 'id' is less than 0", () => {
    //     const cb = () => new Employee("Jane", -1, "jane@email.com");
    //     const err = new Error("Expected parameter 'age' to be a non-negative number");

    //     expect(cb).toThrowError(err);
    // });
});
});