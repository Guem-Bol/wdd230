// Get current year for copyright
const currentYear = new Date().getFullYear();
document.getElementById("copyrightYear").textContent = currentYear;

// Get last modified date
const lastModifiedDate = document.lastModified;
document.getElementById("lastModified").textContent = lastModifiedDate;


const lastModifiedParagraph = document.getElementById('lastModified');
const currentDate = new Date();
lastModifiedParagraph.textContent = `Last Modified: ${currentDate.toLocaleString()}`; 