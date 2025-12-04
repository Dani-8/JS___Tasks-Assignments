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

        let row = statusEl.closest("tr")
        // row.querySelector(".")
        
        if(status === "P"){
            row
        }
    
    }



}

















