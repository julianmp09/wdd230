window.addEventListener('DOMContentLoaded', () => {
    const yearSpan = document.getElementById('currentYear');
    const lastModified = document.getElementById('lastModified');

    yearSpan.textContent = new Date().getFullYear();
    lastModified.textContent = `Last Modified: ${document.lastModified}`;
});