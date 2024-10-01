let student = "Ramadan";
let personAge = 0;
let studentStatus = true;

const classes = {
    junior: "Junior Class",
    senior: "Senior Class",
    advanced: "Advanced Class"
};

if (personAge < 18 && studentStatus) {
    console.log(`${student} is in ${classes.junior}`);
} else {
    console.log(`${student} is not in Junior Class`);
}

if (personAge === 18 && studentStatus) {
    console.log(`${student} is in ${classes.senior}`);
} else {
    console.log(`${student} is not in Senior Class`);
}

if (personAge > 18 && personAge <= 25) {
    console.log(`${student} is in ${classes.advanced}`);
} else {
    console.log(`${student} is not in Advanced Class`);
}

if (!(personAge < 18 || personAge === 18 || (personAge > 18 && personAge <= 25))) {
    console.log(`${student} is not in any class`);
}
