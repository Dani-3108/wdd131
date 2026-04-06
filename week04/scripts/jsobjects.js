let aCourse = {
    code: "WDD131",
    title: "Dynamic Web Fundamentals",
    credits: 2,
    sections: [
        { section: "001", enrolled: 95, instructor: "Roberto Diaz Rodriguez" },
        { section: "002", enrolled: 80, instructor: "Sarah Gobble" }
    ]
    //Create a function named setCourseInformation() to display the course code and title in HTML.
    //Pass the course object as a parameter.
    //Use dot notation to access the properties you need and update the element with id courseName.
};

function setCourseInformation(aCourse) {
    document.querySelector("#courseName").innerHTML = `${aCourse.code} - ${aCourse.title}`;
}
function renderSections() {
    const tbody = document.querySelector("sections")
    let rows = "";
    for (const section of aCourse.sections) {
        rows += `<tr>
            <td>${section.section}</td>
            <td>${section.enrolled}</td>
            <td>${section.instructor}</td>
        </tr>`;
    }
    tbody.innerHTML = rows;
}