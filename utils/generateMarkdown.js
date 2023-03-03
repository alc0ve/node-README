// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return `![License: MIT](https://img.shields.io/badge/License-MIT-blueviolet.svg)`
  } else if (license === 'Apache 2.0') {
    return `![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`
  } else if (license === 'None') {
    return ''
  }
  // if(license !== 'None'){
  //   return `![License: ${license}](https://img.shields.io/badge/License-${license}-blueviolet.svg)`
  // }
  // return " "
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return `https://opensource.org/licenses/MIT`
  } else if (license === 'Apache 2.0') {
    return `https://opensource.org/licenses/Apache-2.0`
  } else if (license === 'None') {
    return ''
  }
//   if(license !== 'None'){
//   return `https://opensource.org/licenses/${license}`
//  }
//   return "";
 }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None'){
  return `${license}

  Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
  
  The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
  
  THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
  `
}
return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  ${renderLicenseBadge(data.license)}
# ${data.title}

## Description

${data.description}

## Table of Contents

✦[Installation](#Installation)

✦[Usage](#Usage)

✦[License](#License)

✦[Contribute](#Contribute)

✦[Tests](#Tests)

✦[Contact Me](#Contact-me)

## Installation ⚙️

${data.installation}

## Usage

${data.usage}

## License

${renderLicenseLink(data.license)}

${renderLicenseSection(data.license)}

## How to Contribute

${data.contributing}

## Tests

${data.tests}

## Contact me

[GitHub](${data.github})

[Email](${data.email})
`;
}

module.exports = generateMarkdown;
