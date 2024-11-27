// Show the download box
function showDownloadBox(title, description, imageUrl, linkUrl) {
    const downloadBox = document.getElementById("download-box");
    document.getElementById("download-title").innerText = title;
    document.getElementById("download-description").innerText = description;
    document.getElementById("download-image").src = imageUrl; // Set the image source

    const downloadLink = document.getElementById("download-link");
    downloadLink.href = linkUrl; // Set the unique link
    downloadLink.download = linkUrl.split('/').pop(); // Extract the file name from the URL for download

    downloadBox.style.display = "flex";
}

// Close the download box
function closeDownloadBox() {
    const downloadBox = document.getElementById("download-box");
    downloadBox.style.display = "none";
}

// Show the selected section
function showSection(sectionId) {
    document.getElementById("clients-section").style.display = sectionId === "clients-section" ? "block" : "none";
    document.getElementById("textures-section").style.display = sectionId === "textures-section" ? "block" : "none";
}
