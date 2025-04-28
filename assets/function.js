
/**
 * *eikahne kiso function thakbe like- student er (GPA/GRADE/FINAL_RESULT/FINAL_GPA/FINAL_GRADE)
 * GO TO MAIN.JS FOLDER
 * FInd All Subject FInal Gpa
 * Getting All Subject Final Grade.
 * Getting All Subject FInal Result.
 */


/*
const gpa = (mark) => {
    
   switch (mark) {
    case mark>=0 && mark<33:
        gpa=0.00
        return gpa;
       case mark >= 33 && mark < 40:
           gpa = 1.0
           return gpa;
       case mark >= 40 && mark < 50:
           gpa = 2.00
           return gpa;
       case mark >= 50 && mark < 60:
           gpa = 3.00
           return gpa;
       case mark >= 60 && mark < 70:
           gpa = 4.00
           return gpa;
       case mark >= 70 && mark < 80:
           gpa = 4.50
           return gpa;
       case mark >= 80 && mark < 100:
           gpa = 5.00
           return gpa
       default:
           gpa = "Its complecated GPA"
           return gpa;
            
    }
 
}
*/

/*
const grade = (mark) => {
    
    switch (mark) {
        case mark>=0 && mark<33:
            grade = "F"
            return grade;
        case mark >= 33 && mark < 40:
            grade = "D"
            return grade;
        case mark >= 40 && mark < 50:
            grade = "C"
            return grade;
        case mark >= 50 && mark < 60:
            grade = "B"
            return grade;
        case mark >= 60 && mark < 70:
            grade = "A"
            return grade;
        case mark >= 70 && mark < 80:
            grade = "A-"
            return grade;
        case mark >= 80 && mark < 100:
            grade = "A+"
            return grade;
        default:
            grade="Its Complicated GRADe"
            return grade;
    }
    
}
*/

/**1st(Get student (GPA) depent on mark) */
const studentGpa = (mark) => {
    if (mark >= 0 && mark < 33) {
        return gpa = 0.00;
    } else if (mark >= 33 && mark < 40) {
        return gpa = 1.00;
    } else if (mark >= 40 && mark < 50) {
        return gpa = 2.00;
    } else if (mark >= 50 && mark < 60) {
        return gpa = 3.00;
    } else if (mark >= 60 && mark < 70) { 
        return gpa = 4.00;
    } else if (mark >= 70 && mark < 80) {
        return gpa = 4.50;
    } else if (mark >= 80 && mark < 100) {
        return gpa=5.00
    } else {
        return gpa="unnessary GPA"
    }
}


const studentGrade = (mark) => {
    if (mark >= 0 && mark < 33) {
        return grade ="F";
    } else if (mark >= 33 && mark < 40) {
        return grade = "D"
    } else if (mark >= 40 && mark < 50) {
        return grade = "C"
    } else if (mark >= 50 && mark < 60) {
        return grade = "B"
    } else if (mark >= 60 && mark < 70) {
        return grade = "A"
    } else if (mark >= 70 && mark < 80) {
        return grade = "A-"
    } else if (mark >= 80 && mark < 100) {
        return grade= "A+"
    } else {
        return grade="unnessary GPA"
    }
}

/**Get all subject CGPA */
const finalGpa = (s1, s2, s3, s4, s5) => {
    if (s1 >= 33 && s2 >= 33 && s3 >= 33 && s4 >= 33 && s5 >= 33) {
        let total_gpa = studentGpa(s1 ) + studentGpa(s2) + studentGpa(s3 ) + studentGpa(s4 ) + studentGpa(s5 )
        return total_gpa / 5
    } else {
        return 0
   }
}

/**Get subject wise FInal Grade */
const finalGrade = (eng, math, sc, geo, bang) => {
    let mark_gpa = finalGpa(eng, math, sc, geo, bang);
    if (mark_gpa >= 0 && mark_gpa < 1) {
        return grade = "F"
    } else if (mark_gpa >= 1 && mark_gpa < 2) {
        return grade = "D"
    } else if (mark_gpa >= 2 && mark_gpa < 3) {
        return grade = "B"
    } else if (mark_gpa >= 3 && mark_gpa < 4) {
        return grade = "A"
    } else if (mark_gpa >= 4 && mark_gpa < 5) {
        return grade="A-"
    } else if (mark_gpa >= 5) {
        return grade ="A+"
    } else {
        return grade="unvillable"
    }
}

/**@Find Final Result(all-subject passed tahole final result asbe neither not) */
const result_isPassed = (eng,bang,math,sc,geo)=>{
    if (eng >= 33 && bang >= 33 && sc >= 33 && math >= 33 && geo >= 33) {
        return true;
    } else {
        return false;
    }
}
