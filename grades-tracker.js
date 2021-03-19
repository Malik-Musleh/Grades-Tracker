const studArr = []

const add = () => {

    let neme = $("#name").val();
    let grade = $("#grade").val();
    let speciality = $("#speciality").val();

    let result = "fail"
    if (grade >= 50) result = "success"
    studArr.push({ "neme": neme, "grade": grade, "speciality": speciality, "result": result })

    localStorage.setItem('student', JSON.stringify(studArr));

    $("#list").append(`<li> &#8287name:${neme} |&#8287grade:${grade} |&#8287result:${result}
    |&#8287speciality:${speciality}<li>`);
}


async function start()  {
    let lsArr = await localStorage.getItem("student")
    lsArr=await JSON.parse(lsArr)
    
    lsArr.forEach(e => {
        $("#list").append(`<li> &#8287Name:${e.neme} |&#8287Grade:${e.grade} |&#8287Result:${e.result}
        |&#8287Speciality:${e.speciality}<li>`);
    });
}
$(document).ready(function(){

    start();
    });



