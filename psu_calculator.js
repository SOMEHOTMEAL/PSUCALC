function calculatePSU() {
    let cpuTDP = parseInt(document.getElementById("cpu-tdp").value) || 0;
    let gpu1TDP = parseInt(document.getElementById("gpu1-tdp").value) || 0;
    let gpu2TDP = parseInt(document.getElementById("gpu2-tdp").value) || 0; // Second GPU
    let ramSticks = parseInt(document.getElementById("ram-sticks").value) || 0;
    let storageDrives = parseInt(document.getElementById("storage-drives").value) || 0;
    let caseFans = parseInt(document.getElementById("case-fans").value) || 0;
    let aioCooler = parseInt(document.getElementById("aio").value) || 0;

    // Basic Power Estimation (Including Second GPU)
    let totalPower = cpuTDP + gpu1TDP + gpu2TDP + (ramSticks * 5) + (storageDrives * 10) + (caseFans * 3) + (aioCooler * 10);
    
    // Add some headroom (20% extra)
    let recommendedPSU = Math.ceil(totalPower * 1.2);

    // Determine PSU Suggestion
    let psuSuggestion = "Unknown";
    if (recommendedPSU <= 400) psuSuggestion = "450W PSU";
    else if (recommendedPSU <= 550) psuSuggestion = "650W PSU";
    else if (recommendedPSU <= 750) psuSuggestion = "850W PSU";
    else if (recommendedPSU <= 1000) psuSuggestion = "1000W PSU";
    else psuSuggestion = "1200W+ PSU (for high-end setups)";

    // Display Results
    document.getElementById("result").innerText = `Recommended PSU Wattage: ${recommendedPSU} W`;
    document.getElementById("psu-suggestion").innerText = `Suggested PSU: ${psuSuggestion}`;
}

function calculatePSUEfficiency() {
    let psuWattage = parseInt(document.getElementById("psu-wattage").value) || 0;
    let efficiencyRating = parseFloat(document.getElementById("psu-efficiency").value) || 0;

    // Calculate real power output
    let usablePower = Math.floor(psuWattage * efficiencyRating);

    // Display Result
    document.getElementById("efficiency-result").innerText = `Approx. Peak Wattage: ${usablePower} W`;
}
