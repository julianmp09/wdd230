// Show banner only on Monday, Tuesday, and Wednesday
function checkBannerVisibility() {
    const today = new Date();
    const day = today.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
  
    const banner = document.getElementById("banner");
  
    // Show the banner if today is Monday (1), Tuesday (2), or Wednesday (3)
    if (day >= 1 && day <= 3) {
      banner.style.display = "block";
    }
  }
  
  // Close banner when the "close" button is clicked
  function setupCloseBanner() {
    const closeButton = document.getElementById("close-banner");
  
    closeButton.addEventListener("click", () => {
      const banner = document.getElementById("banner");
      banner.style.display = "none";
    });
  }
  
  // Initialize banner functionality
  function initBanner() {
    checkBannerVisibility();
    setupCloseBanner();
  }
  
  // Run the banner setup on page load
  document.addEventListener("DOMContentLoaded", initBanner);
  