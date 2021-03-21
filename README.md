
# Quick Start

Naviagate in cmd to this file and `npm i` and then `npm run start`

# Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

# TASK Front-end Technical Test

Render a simple list of the comments included in data.json with related user and topic details

## Evaluation
 - We are looking for a clean and simple solution to managing data on the UI
 - Solution must scale to thousands of records being displayed with minimal performance drop
 - Keep the CSS minimal - less is more, no excessive styling needed (we're not going to disregard you for missing out on shiny unicorns!)
 - Feel free to use whatever scaffolding you want to - we prefer React/Redux related solutions if possible.

## Publishing
Please send us back your solution in a compressed format

#### Hint
We really are interested in your thinking and not your knowledge about using frameworks/tools

> Note: We estimate you should be able to finish this in no more than 4 hours.

# Review of Task
To complete this task i have gone for a simple webpage which loads the the JSON file and displays the results


## Overview of the files
App.css contains all styles used by the webpage

App.tsx contains the methods for loading in the json files data. Also it contains the pages header and how the topics are displayed

Topic.tsx contains how a single topic will be rendered with its comments

types.ts contains all the custom types that are used with in the project

## Overview of data types

On load of JSON file comments are combined with their associated topics so that they become one continuous data type.  
Users are loaded as they are found inm the JSON file.

## Added Extras

A textbox can be found in the header that filters the topics by name. It also disallows you from entering special characters.  
Also i have added responses on the UI if their are no topics to render and if the topics have yet to load to the page  
