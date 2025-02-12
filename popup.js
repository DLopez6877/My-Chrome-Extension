document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("toggles-container");

  // Create toggles for each site
  Object.entries(SITES_CONFIG).forEach(([siteKey, siteConfig]) => {
    const toggleContainer = document.createElement("div");
    toggleContainer.className = "checkbox-container";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = `${siteKey}-toggle`;

    const label = document.createElement("label");
    label.htmlFor = `${siteKey}-toggle`;
    label.textContent = siteConfig.name;

    toggleContainer.appendChild(checkbox);
    toggleContainer.appendChild(label);
    container.appendChild(toggleContainer);

    // Load saved state
    chrome.storage.sync.get([`${siteKey}Enabled`], (result) => {
      checkbox.checked = result[`${siteKey}Enabled`] ?? true;
    });

    // Save state on change
    checkbox.addEventListener("change", () => {
      chrome.storage.sync.set({ [`${siteKey}Enabled`]: checkbox.checked });

      // Notify content scripts
      siteConfig.matches.forEach((matchPattern) => {
        chrome.tabs.query({ url: matchPattern }, (tabs) => {
          tabs.forEach((tab) => {
            chrome.tabs.sendMessage(tab.id, {
              type: "toggleStyles",
              site: siteKey,
              enabled: checkbox.checked,
            });
          });
        });
      });
    });
  });
});
