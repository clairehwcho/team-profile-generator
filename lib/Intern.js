const Employee = require('./Employee');

class Intern extends Employee {
    constructor (name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getSchool () {
        let words = this.school.toLowerCase().split(" ");
        words.map((word, i) => {
            if (word === "of") {
            }
            else {
                words[i] = word[0].toUpperCase() + word.slice(1);
            }
        })
        this.school = words.join(" ");
        return this.school;
    }

    getRole () {
        return "Intern";
    }
}

module.exports = Intern;