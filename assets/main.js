/**
 * *eikane all data-k map()/for_each() er maddome final result shit make kora hobe console.log er maddome.
 * * prompt er maddome konow ek student er name,rool,registraiotn-number nibo
 * er por bangla ,somaj,english,biggan,math, a total koto paise and
 * pass or fail korse naki and total GRADE AND GPA findout korbo
 * FInal REsult find out mane (pass korso naki failed korso?)
 * FInal REsult Kokhon ase>? Jokhon all Subject a pass kore tokhon but any chance 1 ta te failed korlei asbe na
 * FInal GPA find-out kmne? all subject plus kore VAG korte hobe than avg: bahir hobe.
 * FInal GRade as like same as FINAL GPA
 */


const Student_Roll = prompt('rollNumber')
const Student_Regi=prompt('regiNumber')

students_name.forEach((items, index) => {
    // console.log(items,index);
    if (rollNumber[index] == Student_Roll && regiNumber[index] == Student_Regi) {
        // console.log(`Hello ${students_name[index]} How are you today`);

        console.log(`
            Name = ${items}
            Age = ${age[index]}
            Regi = ${regiNumber[index]}
            Rool= ${rollNumber[index]}
            =============================================
            SUB==> MARK==> GPA==> GRADE
            Bang=>${bang[index]}->${studentGpa(bang[index])}->${studentGrade(bang[index])}
            Eng=>${eng[index]}->${studentGpa(eng[index])}=>${studentGrade(eng[index])}
            Math=>${math[index]}->${studentGpa(math[index])}=>${studentGrade(math[index])}
            Sci=>${sc[index]}->${studentGpa(sc[index])}=>${studentGrade(sc[index])}
            Geo=>${geo[index]}->${studentGpa(geo[index])}=>${studentGrade(geo[index])}
          ======================================================================================
           -FinalGpa => ${finalGpa(bang[index], eng[index], math[index], sc[index], geo[index])}  
        =========================================================================================
         -FinalGRADE:=>${finalGrade(bang[index], eng[index], math[index], sc[index], geo[index])}
        =========================================================================================
        -FinalRESULT:=> ${result_isPassed(bang[index],eng[index],math[index],sc[index],geo[index])?"Passed":"Failed"}
        `);

    }

      
    
}) 