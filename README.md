![Angular.js](https://upload.wikimedia.org/wikipedia/commons/f/fc/AngularJS-large.png)

# Angular.js demonstration application

Discussion forum consisting of three views. 
Lists of all topics, a single topic with a discussion about it, and a user profile view. 
The project consists of progressive phases.

Task 1: Implementation of views - done  
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

- [angular.js](https://github.com/angular/angular.js) - The platform for handling routing, pagination, sorting, search, voting, etc.
- [material](https://github.com/angular/material) - For handling modal windows
- [bootstrap-css-only](https://github.com/fyockm/bootstrap-css-only) - For a base to custom styling
- [normalize.css](https://github.com/necolas/normalize.css) - For CSS resets
- [lodash](https://github.com/lodash/lodash) - For complex operations with data
- [pug](https://github.com/pugjs/pug) - For building complex templates
- [babel](https://github.com/babel/babel) - For write code in ECMAScript 6
- [webpack](https://github.com/gulpjs/gulp) - For generating elegant views from Pug templates and CSS styles from Sass 

## Application Structure

- `client/`
    - `app/`
        - `components/` - Configuration for aplication's components
        - `config/` - Base configuration for views loader, readonly default values and routing configuration
        - `controllers/` - This folder contains configuration for aplication's controllers
        - `filters/` - Filters for data transformations 
        - `modules/` - Configuration for app modules
            - `app.module.js` - The entry point to the application.
        - `services/` - Services to organize and share code across the application
        - `styles/` - Custom Sass styles
        - `templates/` - Pug templates
    - `assets/` - Images & fonts
- `dist/` - This folder contains builded and bundled application

