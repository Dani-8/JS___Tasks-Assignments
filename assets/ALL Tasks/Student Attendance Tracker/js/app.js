import { renderLoginForm, handleLogin } from './login.js';
import { renderDashboardView } from './dashboard.js';
import { renderAttendanceView } from './attendance.js';
import { parseCSV, loadParsedData, todayDate, markAttendance } from './utils.js';

let currentView = 'login';
// ==================================================================================

export let navigateTo = (view) => {
    currentView = view
    renderApp();
}

// RENDER APP BASED ON CURRENT VIEW
let renderApp = () => {
    let app = document.getElementById("app")

    if(currentView === "login"){
        app.innerHTML = renderLoginForm()
        document.getElementById("login-form").addEventListener("submit", handleLogin)
    }else if(currentView === "dashboard"){
        app.innerHTML = renderDashboardView()
    }else if(currentView === "attendance"){
        app.innerHTML = renderAttendanceView()
    }
}

// FILE UPLOAD HANDLER
window.handleFileSelect = (e) => {
    let file = e.target.files[0]
    let errorEl = document.getElementById("file-error")
    if (errorEl) errorEl.textContent = ''
    if (!file || !file.name.endsWith('.csv')) {
        if (errorEl) errorEl.textContent = 'Please select a valid CSV file.'
        return;
    }
    // -------------------------------------------------------------------------

    let render = new FileReader()
    render.onload = (e) => {
        let csvData = parseCSV(e.target.result)
        if(csvData.error){
            if (errorEl) errorEl.textContent = csvData.error
            return
        }

        loadParsedData(csvData.data)
        navigateTo('dashboard')
        renderApp()
    }
    render.readAsText(file)
}



renderApp()









