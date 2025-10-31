let students = []
let totalMarks = 400 // Total marks for 4 subjects

// -------------------------------------------------------

function calculateMarks(marks){
    let total = marks.html + marks.css + marks.javascript + marks.react
    let percentage = (total / totalMarks) * 100

    return {
        totalMarks: total,
        percentage: percentage.toFixed(2)
    }
}
// -------------------------------------------------------------------------------------------------


function addStudent(event){
    event.preventDefault()

    let name = document.getElementById("studentName").value
    let html = parseInt(document.getElementById("html").value)
    let css = parseInt(document.getElementById("css").value)
    let javascript = parseInt(document.getElementById("javascript").value)
    let react = parseInt(document.getElementById("react").value)
    // -----------------------------------------------------------------------

    // SHOW ALERT
    if(name === "" || isNaN(html) || isNaN(css) || isNaN(javascript) || isNaN(react)){
        alert("Please fill all the fields correctly.")
        return
    }


    if(name){
        name = name.toLowerCase().split(" ").map((word) => {
            return word.charAt(0).toUpperCase() + word.slice(1)
        }).join(" ")    
    }


    let marks = {html, css, javascript, react}
    let calculated = calculateMarks(marks)


    let studentObj = {
        id: Date.now(),
        name: name,
        marks: marks,
        totalMarks: calculated.totalMarks,
        percentage: calculated.percentage
    }

    students.push(studentObj)


    renderStudents()

    document.getElementById("student-form").reset()
    document.getElementById("studentName").focus()
}
// -------------------------------------------------------------------------------------------------


function renderStudents(){
    let container = document.getElementById("student-table-cont")

    if(students.length === 0){
        container.innerHTML = "<p>No students added yet....</p>"
        return
    }
    // -----------------------------------------------------------------------

    let html = `
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Total</th>
                    <th>Percentge</th>
                    <th>Action</th>
                </tr>
            </thead>

            <tbody>
        `

    students.forEach((student) => {
        html += `
            <tr>
                <td>${student.name}</td>
                <td>${student.totalMarks}</td>
                <td style="font-weight: bold; ${student.percentage >= 75 ? 'color: rgb(13, 144, 8);' : 'color: rgb(243, 56, 23);'}">${student.percentage}%</td>
                <td>
                    <button onclick="showMarksheet(${student.id})">
                        Marksheet
                    </button>
                </td>
            </tr>
        `
    })

    html += `
                </tbody>
            </table>
        `

    container.innerHTML = html
}
// -------------------------------------------------------------------------------------------------


function showMarksheet(studentId){
    let student = students.find((s) => s.id === studentId)
    
    if(!student){
        alert("Student not found!")
        return
    }
    // -------------------------------------------------------

    let marksheetContent = document.getElementById("marksheet-content")
    let status = student.percentage >= 75 ? 'Excellent' : (student.percentage >= 50 ? 'Good' : 'Needs Improvement')


    marksheetContent.innerHTML = `
        <div class="marksheet-heading">
            <h2>Marksheet</h2>
            <p id="marksheet-student-name">Student: ${student.name}</p>
        </div>

        <div class="marksheet-data">
            <table>
                <thead>
                    <tr>
                        <th>Subject</th>
                        <th>Marks (Out of 100)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>HTML</td>
                        <td>${student.marks.html}</td>
                    </tr>
                    <tr>
                        <td>CSS</td>
                        <td>${student.marks.css}</td>
                    </tr>
                    <tr>
                        <td>JavaScript</td>
                        <td>${student.marks.javascript}</td>
                    </tr>
                    <tr>
                        <td>React</td>
                        <td>${student.marks.react}</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="marksheet-summary">
            <p>
                <span class="summary-heading">Total Marks:</span>
                <span id="marksheet-total-marks" style="font-weight: bold;">${student.totalMarks}</span>
            </p>
            <p>
                <span class="summary-heading">Percentage:</span>
                <span id="marksheet-percentage" style="font-weight: bold; ${student.percentage >= 75 ? 'color: rgb(13, 144, 8);' : 'color: rgb(243, 56, 23);'}">${student.percentage}%</span>
            </p>
            <p>
                <span class="summary-heading">Status:</span>
                <span id="marksheet-status">${status}</span>
            </p>
        </div>
    `

    let marksheetModal = document.getElementById("marksheet-modal")
    marksheetModal.classList.remove("hidden")
}

function closeMarksheet(){
    let marksheetModal = document.getElementById("marksheet-modal")
    marksheetModal.classList.add("hidden")
}
// -----------------------------------------------------------------------------------------------------



let submitBtn = document.getElementById("add-btn")
submitBtn.addEventListener("click", addStudent)

document.getElementById('student-form')?.addEventListener('keydown', e => {
    if (e.key === 'Enter') { e.preventDefault(); document.getElementById('add-btn')?.click(); }
});
// -----------------------------------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', renderStudents);




