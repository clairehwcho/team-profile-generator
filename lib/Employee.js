class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName () {
        let words = this.name.split(" ");
        words.map((word, i) => {
            words[i] = word[0].toUpperCase() + word.slice(1);
        })
        this.name = words.join(" ");
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