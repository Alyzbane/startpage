# Minimal Startpage

This project is a custom startpage for your browser, designed using HTML and CSS. It includes various static assets such as icons, images, and JS.

## Project Structure

```bash
New folder/Project/HTML and CSS/startpage/
├── LICENSE
├── README.md
├── index.html
├── manifest.json # For local extension
└── static
    ├── icons
    ├── images
    │   ├── 1.png # Replace images here
    |   |── ..... 
    │   └── default.png
    └── js
        ├── hover.js  # Hovering to list will change the image
        └── search.js # Add command search here
```

## Files

- **index.html**: The main HTML file for the startpage.
- **manifest.json**: The manifest file for the Chrome extension.
- **static/**: Directory containing static assets.
  - **icons/**: Directory containing icon files.
  - **images/**: Directory containing image files.
  - **js/**: Directory containing JavaScript files.

## Usage

1. Clone the repository to your local machine.
2. Open `index.html` in your browser to view the startpage.
3. Deploy it locally or host it on a service like GitHub Pages. Use the generated link to access the hosted site, ensuring it points to the index page.

### Optional

To use as a extension, load the project folder as an unpacked extension in Chrome. [guide](https://stackoverflow.com/questions/39916079/how-to-create-a-chrome-extension-to-change-the-default-tab)

> Loading this project as an extension is optional. If you choose to, ensure your browser focuses on this project index page instead of the search bar 🫡.

## License

This project is licensed under the terms of the Unlicense.