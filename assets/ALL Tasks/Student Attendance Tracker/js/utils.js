export let todayDate = new Date().toISOString().split("T")[0]
// console.log(todayDate)
// ---------------------------------------------------

export let studentData = []
export let attendanceRecords = {}
export let isDataLoaded = false
export let allDates = []
// --------------------------------

export let CSVData = (csv) => {
    let lines = csv.split("\n").filter(line => line.trim() !== "")
    if(lines.length <= 1) return {studentData: [], attendanceRecords: {}, allDates: [], error: "CSV file is empty or invalid."}

    let headers = lines[0].split(",").map(h => h.trim())
    let dateHeaders = headers.slice(2)
    // console.log(dateHeaders)
    
    let students = []
    let attendanceRecords = {}
    let allDates = new Set()

    for(let i = 1; i < lines.length; i++){
        let values = lines[i].split(",").map(v => v.trim())

        if(values.length < headers.length){
            return {studentData: [], attendanceRecords: {}, allDates: [], error: `Data format error on line ${i + 1}.`}
        }

        let studentId = values[0]
        let studentName = values[1] || values[0] || `Unknown`

        if(!studentId) studentId = `S${i}`

        studentData.push({ id: studentId, name: studentName })
        attendanceRecords[studentId] = {}  

        dateHeaders.forEach((date, index) => {
            let status = values[index + 2] || ""
            if(status){
                attendanceRecords[studentId][date] = status
                allDates.add(date)
            }
        })
    }
    // ----------------------------------------------------------------

    if(studentData.length === 0){
        return {studentData: [], attendanceRecords: {}, allDates: [], error: "No student data found in the CSV."}
    }

    return {studentData, attendanceRecords, allDates: Array.from(allDates).sort()}
}
// -------------------------------------------------------------------------


export let loadCSVData = (data) => {
    studentData = data.studentData
    attendanceRecords = data.attendanceRecords
    allDates = data.allDates
    isDataLoaded = true
}
// -------------------------------------------------


export let markAttendance = (studentId, status) => {
    let statusEl = document.getElementById(`status-${studentId}`)
    if(statusEl){
        statusEl.textContent = status === "P" ? "Present" : "Absent"
        statusEl.className = status === "P" ? "status-present" : "status-absent"
    }
    
    let row = statusEl.closest("tr")
    let pBtn = row.querySelector(".mark-attendance-btn mark-present-btn-default")
    let aBtn = row.querySelector(".mark-attendance-btn mark-absent-btn-default")

    if(status === "P"){
        pBtn.className = "mark-attendance-btn mark-present-btn-marked"
        aBtn.className = "mark-attendance-btn mark-absent-btn-default"
    }else if(status === "A"){
        aBtn.className = "mark-attendance-btn mark-absent-btn-marked"
        pBtn.className = "mark-attendance-btn mark-present-btn-default"
    }


    if(!attendanceRecords[studentId]){
        attendanceRecords[studentId] = {}
    }
    attendanceRecords[studentId][todayDate] = status

    if(!allDates.includes(todayDate)){
        allDates.push(todayDate)
        allDates.sort()
    }
}
// --------------------------------------------------------------------------------------


/**
 * =====================
 * CALCULATE STATS
 * =====================
 */

export let calculateStats = () => {
    let studentAttendanceStats = []
    let totalPresentCount = 0
    let totalPossibleCount = 0
    let studentAbsentCounts = {}
    let todayPresentCount = 0
    // ------------------------------

    let allUniqueDates = new Set(allDates)
    if(studentData.length > 0 && !allUniqueDates.has(todayDate)){
        allUniqueDates.add(todayDate)
    }
    // --------------------------------------------

    totalPossibleCount = allUniqueDates.size
    let totalStudentsCount = studentData.length


    studentData.forEach(student => {
        let attendance = attendanceRecords[student.id] || {}
        let studentPresent = 0
        let absentCount = 0

        allUniqueDates.forEach(date => {
            let status = attendance[date] || ""

            if(status === "P"){
                studentPresent++
                totalPossibleCount++

                if(date === todayDate){
                    todayPresentCount++
                }
            }else if(status === "A"){
                absentCount++
                studentAbsentCounts[student.id] = (studentAbsentCounts[student.id] || 0) + 1
            }
        })
        // ------------------------------------------------

        let attendanceRate = totalPossibleCount === 0 ? 0 : (studentPresent / totalPossibleCount) * 100

        studentAttendanceStats.push({
            ...student,
            absentDay: studentAbsentCounts[student.id] || 0,
            presentDay: studentPresent,
            totalDays: totalPossibleCount,
            attendanceRate: attendanceRate
        })
    })
    // -------------------------------------------------

    
    let overallRate = totalPossibleCount > 0 && totalStudentsCount > 0 ? 
        (totalPresentCount / (totalStudentsCount * totalPossibleCount)) * 100 
        : 0 

    let todayAttendanceRate = totalStudentsCount > 0 && totalStudentsCount > 0 ?
        (todayPresentCount / totalStudentsCount) * 100
        : 0

    let needsAttention = studentAttendanceStats
        .filter(stat => stat.absentCount > 2)
        .sort((a, b) => b.absentCount - a.absentCount)
    
    let top10Students = studentAttendanceStats
        .sort((a, b) => b.attendanceRate - a.attendanceRate)
        .slice(0, 10)


    return { totalStudents: studentData.length, overallRate, todayAttendanceRate, needsAttention, top10Students }
}
// -----------------------------------------------------------------------------------------------------------------


/**
 * =====================
 * RENDER ATTENDANCE CHART
 * =====================
 */

export let renderAttendanceChart = (topStudents) => {
    let ctx = document.getElementById('attendanceChart')
    if(!ctx) return;
    // -------------------------------------------------

    let labels = topStudents.map(student => student.name)
    let data = topStudents.map(student => student.attendanceRate)
    let backgroundColors = topStudents.map(rate => rate >= 90 ? '#34D399' : rate >= 80 ? '#FBBF24' : '#F87171')
    // --------------------------------------------

    if(window.attendanceChartInstance){
        window.attendanceChartInstance.destroy()
    }
    // ------------------------------------------

    window.attendanceChartInstance = new Chart(ctx, {
        type: "bar",
        data: {
            labels: labels,
            datasets: [{
                label: 'Attendance Rate (%)',
                data: data,
                backgroundColor: backgroundColors,
                borderWidth: 1, 
                borderRadius: 5
            }]
        },
        options: {
            reponsive: true,
            maintainAspectRatio: false,
            scales: {y : {beginAtZero: true, max: 100}},
            plugins: { legend: { display: false }},
        }
    })
}


/**
 * =====================
 * RENDER TABLE
 * =====================
 */

export let generateRawTableBody = (students) => {
    return students.map(student => {
        let studentRecords = attendanceRecords[student.id] || {}
        let dateCells = allDates.map(date => {
            let status = studentRecords[date] || "-"
            return `<td class="status-${status}">${status}</td>`
        }).join("")

        return `
            <tr>
                <td>${student.name}</td>
                <td>${student.id}</td>
                ${dateCells}
            </tr>
        `

    }).join("")
}
window.generateRawTableBody = generateRawTableBody
// ----------------------------------------------------------------

/**
 * ========================
 * RENDER FILTER + RAW DATA
 * ========================
 */

window.filterAndRenderRawData = () => {
    let searchInput = document.getElementById("student-search-raw").value.toLowerCase()
    let statusFilter = document.getElementById("student-filter-raw").value


    let filteredStudent = studentData.filter(student => {
        let studentId = student.id.toLowerCase()
        let studentName = student.name.toLowerCase()

        let matchesSearch = studentName.includes(searchInput) || studentId.includes(statusFilter)
        if(!matchesSearch) return false


        if (statusFilter === 'All') return true;

        let studentRecord = attendanceRecords[student.id] || {}

        




    })



}













/**
 * =====================
 * RENDER RAW DATA TABLE
 * =====================
 */


export let renderRawDataTable = () => {
    let headerRows = `
        <tr>
            <th>Student Name</th>
            <th>Student ID</th>
            ${allDates.map(date => `<th>${date}</th>`).join('')}
        </tr>
    `
    // --------------------------------------------

    return `
        <div class="render-table-and-filter-cont">
            <h1>Raw Attendance Data (Spreadsheet View)</h1>

            <div class="filter-items-cont">
                <input id="student-search-raw" oninput="" type="text" placeholder="Search by Name or ID...">
                <select id="student-filter-raw" onchange="" name="" id="">
                    <option value="All">Filter by Status (Any Day)</option>
                    <option value="P">Present (P)</option>
                    <option value="A">Absent (A)</option>
                    <option value="-">Unmarked (-)</option>
                </select>
            </div>

            <div class="table-cont">
                <table class="table">
                    <thead><tr>
                        ${headerRows}
                    </tr></thead>
                    <tbody><tr>${generateRawTableBody(studentData)}</tr></tbody>
                </table>
            </div>
        </div>
    `

}
// -------------------------------------------------------------------------------