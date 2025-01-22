document.addEventListener('DOMContentLoaded', () => {
    const visitMessage = document.getElementById('visit-message');
    const lastVisit = localStorage.getItem('lastVisit');
    const currentVisit = Date.now();
    
    if (lastVisit) {
        const daysBetween = Math.floor((currentVisit - lastVisit) / (1000 * 60 * 60 * 24));
        
        if (daysBetween < 1) {
            visitMessage.textContent = "Welcome back! Great to see you again so soon!";
        } else if (daysBetween === 1) {
            visitMessage.textContent = "You last visited 1 day ago.";
        } else {
            visitMessage.textContent = `You last visited ${daysBetween} days ago.`;
        }
    } else {
        visitMessage.textContent = "Welcome! If you have any questions, let us know.";
    }
    
    localStorage.setItem('lastVisit', currentVisit);
});