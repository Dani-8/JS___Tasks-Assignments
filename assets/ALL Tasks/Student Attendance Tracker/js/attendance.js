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
        <div class="student-attendance-record">
            <header class="header">
                <div><h1 class="text-3xl font-bold text-gray-800">Mark Attendance</h1><p class="text-lg text-gray-500">Class: 100 | Date: ${todayDate}</p></div>
                <button class="view-attendance-btn" id="view-attendance-btn">Back to Dashboard</button>
            </header>

            <div class="attendance-record-cont">
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Student Name</th>
                                <th>Student ID</th>
                                <th class="record-status-heading">Attendance Status</th>
                                <th class="record-action-heading">Action</th>
                            </tr>
                        </thead>
                        <tbody id="attendance-tbody">
                            ${todayRecords.map(record => `
                                <tr>
                                    <td class="record-nama">${record.name}</td>
                                    <td class="record-id">${record.id}</td>
                                    <td class="record-status">
                                        <span id="status-${record.id}" class="status-block ${record.status === "P" ? "status-present" : record.status === "A" ? "status-absent" : "status-unmarked"}">
                                            ${record.status === "P" ? "Present" : record.status === "A" ? "Absent" : "Unmarked"}
                                        </span>
                                    </td>
                                    <td class="record-action">
                                        <button class="mark-attendance-btn mark-present-btn-default">Mark P</button>
                                        <button class="mark-attendance-btn mark-absent-btn-default">Mark A</button>
                                    </td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `
}


































