// CCS0043L AppDev Midterms
/*
  Program: Computation of Grades using Function
  Programmer: Jan Lawrence M. Delos Santos
  Section: BSCS AN22
*/
let studentGrades = [];

for (let i = 1; i <= 5; i++) {
  let name = prompt("Student Name:");

  let enaSum = 0;
  for (let j = 1; j <= 5; j++) {
    let enaGrade = parseInt(prompt("Enabling Assessment " + j + ":"));
    enaSum += enaGrade;
  }

  let summSum = 0;
  for (let k = 1; k <= 3; k++) {
    let sumGrade = parseInt(prompt("Summative Assessment " + k + ":"));
    summSum += sumGrade;
  }

  let majorGrade = parseInt(prompt("Major Exam Grade:"));

  let enAverage = Math.round(enaSum / 5);
  let sumAverage = Math.round(summSum / 3);
  let grade = Math.round((enAverage * 0.3) + (sumAverage * 0.3) + (majorGrade * 0.4));

  let letterGrade;
  if (grade >= 90 && grade <= 100) {
    letterGrade = "A";
  } else if (grade >= 80 && grade <= 89) {
    letterGrade = "B";
  } else if (grade >= 70 && grade <= 79) {
    letterGrade = "C";
  } else if (grade >= 60 && grade <= 69) {
    letterGrade = "D";
  } else {
    letterGrade = "F";
  }

  studentGrades.push({
    "Name": name,
    "Class Participation": enAverage,
    "Summative Grade": sumAverage,
    "Grade": grade,
    "Letter Grade": letterGrade
  });
}

for (let i = 0; i < studentGrades.length; i++) {
  let student = studentGrades[i];
   console.log(`Name of student: ${student.Name} | Class Participation: ${student['Class Participation']} | Summatives Assessment: ${student['Summative Grade']} | Exam Grade: ${student.Grade} | Letter Grade: ${student['Letter Grade']}`);
}
