const studArr = []

const add = () => {
    let neme = $("#name").val();
    let grade = $("#grade").val();
    let speciality = $("#speciality").val();
    let result = "fail"
    if (grade >= 50) result = "success"
    studArr.push({ "neme": neme, "grade": grade, "speciality": speciality, "result": result })
    localStorage.setItem('student', JSON.stringify(studArr));
    console.log(neme, grade, speciality, result);
    $("#list").append(`<li> &#8287name:${neme} |&#8287grade:${grade} |&#8287result:${result}
    |&#8287speciality:${speciality}<li>`);
}


async function start()  {
    const lsArr = await localStorage.getItem("student")
    console.log(lsArr);
    JSON.parse(lsArr).forEach(e => {
        $("#list").append(`<li> &#8287Name:${e.neme} |&#8287Grade:${e.grade} |&#8287Result:${e.result}
        |&#8287Speciality:${e.speciality}<li>`);
    });
}
start();




