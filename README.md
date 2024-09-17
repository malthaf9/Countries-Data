# Countries Data Project

# Deployment Link
 - https://countries-data-beta.vercel.app/

This project displays detailed information about countries, such as capital, currency, language, and more, using React and styled with Tailwind CSS.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This project is a React application that displays various details about countries using data from an API. The application is styled with Tailwind CSS to ensure a responsive and modern design.

## Features

- Display country information such as capital, currency, language, etc.
- Responsive design using Tailwind CSS
- Search functionality to find specific countries
- Filter countries based on various criteria

## Technologies Used

- **Frontend**: React
- **Styling**: Tailwind CSS
- **Data Fetching**: Axios
- **API**: REST Countries API

## Installation

Follow these steps to set up the project locally.

### Prerequisites

- Node.js and npm installed on your machine
- Git installed on your machine

### Steps

1. **Clone the repository**
    ```bash
    git clone https://github.com/malthaf9/Countries-Data.git
    cd countries-data-project
    ```

2. **Install dependencies**
    ```bash
    npm install
    ```

3. **Start the development server**
    ```bash
    npm start
    ```

    The application will open in your default browser at `http://localhost:3000`.

## Usage

### How to use the application

1. **Search for a country**
   - Use the search bar to find specific countries by name.

2. **View country details**
   - Click on a country name to view detailed information including capital, currency, languages, and more.

3. **Filter countries**
   - Use the filter options to filter countries based on region, subregion, or other criteria.

## Project Structure

Here's an overview of the project structure:

countries-data-project/
├── public/
│ ├── favicon.ico
│ ├── index.html
│ ├── logo192.png
│ ├── logo512.png
│ ├── manifest.json
│ └── robots.txt
├── src/
│ ├── components/
│ │ ├── Body.js
│ │ ├── CountryContainer.js
│ │ ├── CountryData.js
│ │ ├── Filter.js
│ │ ├── Header.js
│ │ ├── Search.js
│ │ ├── Shimmer.js
│ │ └── SingleCountry.js
│ ├── App.css
│ ├── App.js
│ ├── App.test.js
│ ├── index.css
│ ├── index.js
│ ├── logo.svg
│ ├── reportWebVitals.js
│ └── setupTests.js
├── .DS_Store
├── .gitignore
├── README.md
├── package-lock.json
├── package.json
└── tailwind.config.js


## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. **Fork the repository**
   - Navigate to the repository you want to contribute to.
   - Click the "Fork" button in the top right corner of the repository page. This will create a copy of the repository in your GitHub account.
     
2. **Clone your forked repository**
    ```bash
    git clone https://github.com/malthaf9/Countries-Data.git
    cd countries-data-project
    ```
3. **Create a new branch**
    ```bash
    git checkout -b feature-name
    ```
4. **Make your changes**
   -  Make the necessary changes in your local repository.
6. **Commit your changes**
    ```bash
    git commit -m "Add some feature"
    ```
7. **Push to the branch**
    ```bash
    git push origin feature-name
    ```
8. **Create a Pull Request**
   - Navigate to the original repository on GitHub.
   - Click on the "Pull requests" tab.
   - Click the "New pull request" button.
   - Select the branch you created in your forked repository and compare it with the original repository's `main` branch.
   - Add a title and description to your pull request explaining what changes you have made.
   - Click the "Create pull request" button.

9. **Conclusion**
    -This project showcases how to use React and Tailwind CSS to create a dynamic, responsive web application for displaying country information. Contributions 
     are welcome to improve and expand the project. Thank you for your interest and happy coding!

