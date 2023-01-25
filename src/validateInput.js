const validateNameInput = (input) => {
    if (!isNaN(input) || !input.trim().length) {
        return "Name must be a non-empty string";
    }
    return true;
}

const validateIdInput = (input) => {
    if (isNaN(input) || !input.trim().length || input < 0) {
        return "ID must be a non-negative number";
    }
    return true;
}

const validateEmailInput = (input) => {
    isValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input)
    if (!isValid) {
        return "Please enter a valid email.";
    }
    return true;
}

const validateOfficeNumberInput = (input) => {
    if (isNaN(input) || !input.trim().length || input < 0) {
        return "Office number must be a non-negative number";
    }
    return true;
}

const validateGithubInput = (input) => {
    if (!input.trim().length){
        return "Please enter a valid GitHub username";
    }
    return true;
}

const validateSchoolInput = (input) => {
    if (!isNaN(input) || !input.trim().length) {
        return "Please enter a school name";
    }
    return true;
}

module.exports = {
    validateNameInput,
    validateIdInput,
    validateEmailInput,
    validateOfficeNumberInput,
    validateGithubInput,
    validateSchoolInput

}