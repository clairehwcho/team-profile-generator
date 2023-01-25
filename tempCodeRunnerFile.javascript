let arr = [
    {"role": "Manager"},
    {"role": "Engineer"},
    {"role": "Intern"},
    {"role": "Intern"},
    {"role": "Engineer"},
    {"role": "Intern"},
]


arr.sort((a, b) => {
    if (a.role === "Engineer" && b.role === "Intern") {
        return -1;
    }
    if (a.role === "Intern" && b.role === "Engineer") {
        return 1;
    }
    return 0;
});

console.log(arr);