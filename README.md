# Custom Site Styler Chrome Extension

A Chrome extension that allows you to apply and toggle custom CSS styles for different websites. The extension is built with scalability in mind, making it easy to add styles for new websites.

## Features

- Toggle custom styles for different websites via popup menu
- Persistent settings across browser sessions
- Easy to add new website styles
- Real-time style toggling without page reload

## Installation

1. Clone this repository or download the source code
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" in the top right
4. Click "Load unpacked" and select the extension directory
5. Click on the extension icon in the Chrome toolbar
6. Toggle the styles you want to apply

## Directory Structure

- `manifest.json`: Extension configuration
- `popup.html`: Popup menu UI
- `popup.js`: Popup menu logic
- `popup.css`: Popup menu styles
- `content-script.js`: Content script for applying styles
- `config.js`: Configuration for different websites
- `styles/`: Directory for website-specific styles

## Usage

1. Open Chrome and navigate to the website you want to style
2. Click on the extension icon in the Chrome toolbar
3. Toggle the styles you want to apply

## Adding New Styles

1. Create a new CSS file in the `styles/` directory
2. Add the CSS rules you want to apply to the website
3. Add the new site to the `config.js` file with the following format:

```javascript
{
    name: "New Site",
    matches: ["https://www.newsite.com/*"],
    styleFile: "styles/newsite.css"
}
```

After making changes, be sure to refresh the page or reload the extension to see the changes. You can reload the extension by navigating to `chrome://extensions/` and clicking "Reload" on the extension.

## Contributing

1. Fork the repository
2. Create a new branch
3. Make your changes and commit them
4. Push to your fork and create a pull request

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
