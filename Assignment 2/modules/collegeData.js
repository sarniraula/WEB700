const fs = require('fs');      //to import the fs module

class Data {                    
    constructor(students, courses) {
        this.students = students;
        this.courses = courses;
    }
}

let dataCollection = null;

const initialize = () => {
    return new Promise((resolve, reject) => { 
        fs.readFile('./data/students.json', 'utf8', (err, studentData) => {        // When we read files asynchronously (which is what fs.readFile does),  
            if (err) {                                                             //it means that it starts reading the file, 
                reject("Unable to read students.json");                            //but we don't wait around for it to finish. Instead, 
                return;                                                            //we give it a function to call when it's done (the callback function).
            }
            let students = JSON.parse(studentData);

            fs.readFile('./data/courses.json', 'utf8', (err, courseData) => {       //nesting fs.readfile so that the second file read only starts after the first one has completed.
                if (err) {
                    reject("Unable to read courses.json");
                    return;
                }
                let courses = JSON.parse(courseData);
                dataCollection = new Data(students, courses);       //This only runs after fs.readfile job is completed.
                resolve();
            });
        });
    });
};

const getAllStudents = () => {
    return new Promise((resolve, reject) => {
        if (dataCollection.students.length === 0) {
            reject("No results.");
        } else {
            resolve(dataCollection.students);
        }
    });
};

const getTAs = () => {
    return new Promise((resolve, reject) => {
        const TAs = dataCollection.students.filter(student => student.TA === true);
        if (TAs.length === 0) {
            reject("No results.");
        } else {
            resolve(TAs);
        }
    });
};

const getCourses = () => {
    return new Promise((resolve, reject) => {
        if (dataCollection.courses.length === 0) {
            reject("no results returned");
        } else {
            resolve(dataCollection.courses);
        }
    });
};

module.exports = {
    initialize,
    getAllStudents,
    getTAs,
    getCourses
};