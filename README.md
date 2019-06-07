# Doctor Doctor Please

  #### JavaScript Application that uses the BetterDoctor API, 6-7-19

  #### By Megan Schulte

  ## Description

  This web application will allow a user to search for doctors in the Portland area by entering either the medical issue they are dealing with or the doctor's name they are looking for. It will then query the BetterDoctor API and return a response that lists either the doctor's name, address, phone number, website and whether they are accepting new patients or a message saying "no doctors meet this search criteria."

  ## Setup/Installation Requirements

  * Make a clone from GitHub at: https://github.com/meganschultepdx/solar-age-calculator.git
  * Open in Atom or similar text editor to view code.
  * Go to the 'Get a free API key' section of the BetterDoctor API site to get your own API key.
  * Enter your API key in value for the API variable on doctor-service.js.
  * all necessary dependencies should be included in the package.json file of project; run $ npm install in command line to install all dependencies.
  * run $ npm run build to compile project
  * run $ npm run start to view project at localhost:8800, this should automatically open in your Chrome browser.
  * you should be able to type a medical issue or doctor name into the search form and receive a response with doctor information.

  ## Specs

  |Objectives|example input|example output|
  |-|-|-|
  |User searches by medical issue but there are no matching doctors. | tiny homunculus growing out of chest | "No doctors meet this criteria" |
  |User searches by doctor name but there are no matching doctors. | Dr Carl Hill | "No doctors meet this criteria" |
  |User searches by medical issue and query matches doctors in the Portland area.| sore throat | "Doctor Jane Doe, 123 Fake St, 555-555-8888, imarealdoctor.com, currently accepting new patients" |
  |API request has error | error 403 | "There was an error processing your request: error 403" |

  ## Known Bugs

  No known bugs

  ## Support and contact details

  Create a pull request on GitHub.

  ## Technologies Used

  * JavaScript
  * Html
  * Webpack
  * npm
  * CSS
  * JQuery
  * Jasmine
  * Karma
  * Bootstrap

  ### License

  GPL, keep information free.

  Copyright (c) 2019 Megan Schulte
