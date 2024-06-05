/*********************************************************************************
*  WEB700 – Assignment 2
*  I declare that this assignment is my own work in accordance with Seneca Academic Policy.
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
*  
*  Name: Saroj Niraula Student ID:154184238  Date:6/4/2024 
*
********************************************************************************/

const collegeData = require('./modules/collegeData');

collegeData.initialize()
    .then(() => {
        return collegeData.getAllStudents();    //retrieve all the students
    })
    .then((students) => {
        console.log(`Successfully retrieved ${students.length} students`);
        return collegeData.getCourses();        //retrieve the courses
    })
    .then((courses) => {
        console.log(`Successfully retrieved ${courses.length} courses`);
        return collegeData.getTAs();        //retrieve the students who has TA
    })
    .then((TAs) => {
        console.log(`Successfully retrieved ${TAs.length} TAs`);
    })
    .catch((err) => {
        console.error(err);
    });
