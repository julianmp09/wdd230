document.addEventListener('DOMContentLoaded', () => {
    const visitCountElement = document.getElementById('visitCount');
    let visitCount = localStorage.getItem('visitCount');

    if (!visitCount) {
        visitCount = 0;
    } else {
        visitCount = parseInt(visitCount, 10) + 1;
    }

    localStorage.setItem('visitCount', visitCount);
    visitCountElement.textContent = visitCount;
});