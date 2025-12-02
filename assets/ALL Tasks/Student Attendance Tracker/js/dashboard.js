


export let renderDashboardView = () => {
    if(!isDataLoaded){
        return `
            <div class="loading-data-cont">
                <h1>Welcome, Teacher!</h1>
                <p class="desc">Your dashboard is empty because no student data has been loaded yet.</p>
                <svg class="mx-auto h-16 w-16 text-indigo-400 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>

                <label for="csv-file-input">
                    Load Student Data via CSV
                    <input type="file" id="csv-file-input" accept=".csv" onchange="window.handleFileSelect(event)">
                </label>
                <p id="upload-error" class="upload-error"></p>
            </div>
        `
    }
    // -------------------------------------------------------------------------------------------------------------------


    
}
















