# QR-CODE-GENERATOR

Table of Contents

1. Introduction
   - Brief overview of the purpose of the web page.

2. HTML Structure
   - Description of the overall structure of the HTML file.

3. Head Section
   - Explanation of the metadata and external resources linked in the `<head>` section.

4. Body Section
   - Breakdown of the different components in the `<body>` section.

5. QR Header
   - Description of the header section containing title, input field, and size selection.

6. QR Body
   - Explanation of the container for displaying the generated QR code.

7. QR Footer
   - Description of the footer containing "Generate" and "Download" buttons.

8. Script Sources
   - Explanation of the JavaScript libraries used for generating QR codes.

9. JavaScript Logic
   - Overview of the JavaScript logic for generating and displaying QR codes.

 10. Introduction

The QR Code Generator is a web page designed to allow users to generate QR codes for their desired text or URL along with selecting the size of the QR code. This documentation provides an overview of the different sections and functionalities of the web page.

 1. HTML Structure

The HTML file follows a standard structure with the `<head>` and `<body>` sections. The main components are placed within the `<body>` section.

 2. Head Section

In the `<head>` section of the HTML file, several meta tags and external resources are included:

- charset: Defines the character encoding of the document.
- viewport: Specifies how the page should appear on various devices.
- title: Sets the title of the web page.
- link: Connects an external stylesheet (style.css) to control the page's visual presentation.

 3. Body Section

The main content of the web page is included in the `<body>` section. It consists of three main parts:

 4. QR Header

This section includes:

- <h1>: A heading displaying "QR Code Generate".
- <input>: A text input field where users can enter the text or URL for the QR code.
- <select>: A dropdown menu for selecting the size of the QR code.

 5. QR Body

This section is a container where the generated QR code will be displayed.
 6. QR Footer

This section includes:

- <a>: A link with the id "generateBtn" that users can click to generate the QR code.
- <a>: A link with the id "downloadBtn" that users can click to download the generated QR code as an image file.

 7. Script Sources

- The [qrcode.min.js](https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js) library is linked from a content delivery network (CDN). This library enables the generation of QR codes.

8. JavaScript Logic

The JavaScript logic for generating and displaying QR codes is included in the "script.js" file. This logic likely performs the following tasks:

- Retrieves the user input from the text field and selected size from the dropdown.
- Generates a QR code using the input data and selected size.
- Displays the generated QR code in the designated container.
- Provides functionality for the "Generate" button to trigger QR code generation.
- Provides functionality for the "Download" button to allow users to download the generated QR code image.

