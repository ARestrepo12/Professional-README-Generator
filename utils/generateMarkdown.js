// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}
  https://github.com/${data.Github}/${data.Title}

  # Description
  ${data.Description}
  # Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Features](#features)
  * [Tests](#tests)
  * [License](#license)
  * [Badges](#badges)
  * [Collaborators](#collaborators)
  * [Contribute](#contribute)
  * [Contact](#contact)
  # Installation
  The following dependencies are required to run the application. ${data.Installation}.
  # Usage
  For the app to run, please ${data.Usage}.
  # Features
  The features in this project include ${data.Features}.
  # Tests
  The tests you can run in this project include ${data.Tests}.
  # License
  This application has the ${data.License} license.
  # Badges
  This application has the ${data.Badges} Badge.
  # Collaborators
  All who collaborated on this project include ${data.Credits}
  # Contribute
  If you want to contribute to this project, please ${data.Contribute}.
  # Contact
  If you have any questions please contact me here at ${data.Email}
`;
}

module.exports = generateMarkdown;
