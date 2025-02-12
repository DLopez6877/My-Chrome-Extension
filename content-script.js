// Create style element for current site
const styleSheet = document.createElement("style");
document.head.appendChild(styleSheet);

// Find which site config matches current URL
const currentSite = Object.keys(SITES_CONFIG).find((siteKey) => {
  return SITES_CONFIG[siteKey].matches.some((pattern) => {
    const regex = new RegExp("^" + pattern.replace(/\*/g, ".*") + "$");
    return regex.test(window.location.href);
  });
});

if (currentSite) {
  // Load the CSS file content
  fetch(chrome.runtime.getURL(SITES_CONFIG[currentSite].styleFile))
    .then((response) => response.text())
    .then((css) => {
      styleSheet.textContent = css;
      // Check initial state
      chrome.storage.sync.get([`${currentSite}Enabled`], (result) => {
        styleSheet.disabled = !(result[`${currentSite}Enabled`] ?? true);
      });
    });

  // Listen for toggle messages
  chrome.runtime.onMessage.addListener((message) => {
    if (message.type === "toggleStyles" && message.site === currentSite) {
      styleSheet.disabled = !message.enabled;
    }
  });
}
