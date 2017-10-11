![Angular.js] (https://commons.wikimedia.org/wiki/File:AngularJS_logo.svg)

# Angular.js demonstration application

The project consists of progressive phases.

Task 1: Implement views - done  
Task 2: Make them responsive - done  
Task 3: Connect modal to users - done  
Task 4: Use templates - done  
Task 5: Add pagination and sorting - done  
Task 6: Add search - done  
Task 7: Implement voting - done  
Task 8: Add routing - done  

# Getting started

To get the server running locally:

- Clone this repo
- `npm install` to install all required dependencies
- `npm run-script start` for a dev server. Navigate to `http://localhost:8080/`. The app will automatically reload if you change any of the source files.

# Code Overview

## Dependencies

- [angular.js] (https://github.com/angular/angular.js) - The platform for handling routing, pagination, sorting, search, voting, etc.
- [material] (https://github.com/angular/material) - For handling modal windows
- [bootstrap-css-only] (https://github.com/fyockm/bootstrap-css-only) - For a base to custom styling
- [normalize.css] (https://github.com/necolas/normalize.css) - For CSS resets
- [lodash] (https://github.com/lodash/lodash) - For complex operations with data
- [pug] (https://github.com/pugjs/pug) - For building complex templates
- [babel] (https://github.com/babel/babel) - For write code in ECMAScript 6
- [webpack] (https://github.com/gulpjs/gulp) - For generating elegant views from Pug templates and CSS styles from Sass 

## Application Structure

- `client/`
    - `app/`
        - `components/` - This folder contains configuration for aplication's components
        - `config/` - This folder contains base configuration for views loader, readonly default values and the route definitions
        - `controllers/` - This folder contains configuration for aplication's controllers
        - `filters/` - This folder contains filters for data transformations 
        - `modules/` - This folder contains configuration for app modules
            - `app.module.js` - The entry point to the application.
        - `services/` - This folder contains services to organize and share code across the application
        - `styles/` - This folder contains custom Sass styles
        - `templates/` - This folder contains Pug templates
    - `assets/` - This folder contains images and fonts
- `dist/` - This folder contains builded and bundled application

