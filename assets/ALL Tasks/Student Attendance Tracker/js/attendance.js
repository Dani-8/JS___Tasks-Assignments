import { studentData, attendanceRecords, todayDate, isDataLoaded, markAttendance } from "./utils"
import { navigateTo } from "./app.js"

// RENDER ATTENDANCE VIEW
export let renderAttendanceView = () => {
    if(!isDataLoaded){
        navigateTo("dashboard")
        return ''
    }
    // ----------------------------------

    let todayRecords = studentData.map(student => {
        let status = attendanceRecords[student.id][todayDate()] || "Not Marked"
        return { ...student, status }
    })
    // ----------------------------------

    return `
        

    `
}


































