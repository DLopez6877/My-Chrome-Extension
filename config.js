const SITES_CONFIG = {
  youtube: {
    name: "YouTube Styles",
    matches: ["https://www.youtube.com/*"],
    styleFile: "styles/youtube-styles.css",
  },
  chess: {
    name: "Chess Styles",
    matches: ["https://www.chess.com/*"],
    styleFile: "styles/chess-styles.css",
  },
  // Add new sites here following the same pattern
};

// Export for use in other files
if (typeof module !== "undefined" && module.exports) {
  module.exports = SITES_CONFIG;
}
