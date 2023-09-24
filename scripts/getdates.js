// JavaScript code to populate the current year and last modified date
const currentYear = new Date().getFullYear();
document.getElementById("current-year").textContent = currentYear;

const lastModifiedDate = new Date(document.lastModified);
const options = { year: 'numeric', month: 'long', day: 'numeric' };
const formattedDate = lastModifiedDate.toLocaleDateString(undefined, options);
document.getElementById("lastModified").textContent = "Last Modified: " + formattedDate;
