class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName () {
        if (typeof this.name !== "string" || !this.name.trim().length) {
            throw new Error("Expected parameter 'name' to be a non-empty string");
        }
        return this.name;
    }

    getId () {
        return this.id;
    }

    getEmail () {
        return this.email;
    }

    getRole () {
        return "Employee";
    }
};

module.exports = Employee;