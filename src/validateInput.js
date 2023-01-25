function validateInput(input) {
    let done = this.async();
    setTimeout(function () {
        if (typeof input !== "number") {
            done("You need to provide a number");
            return;
        }
        done(true);
    }, 3000);
}

module.exports = validateInput;