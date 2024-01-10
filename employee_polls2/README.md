# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# This application has 8 automated tests organized in 5 test suites:
Header.test.js
- verifies the navigation bar displays all expected links

Loign.test.js
- snapshot test for the file
- DOM test for at least one file which uses the fireEvent function. For example use fireEvent.click() for clicking a button and verifying that something changed in a component or fireEvent.change() to add text to an input field or select an option in a dropdown. After doing this, verify the UI changed in some way using the expect() method from jest
- verifies that a user name field, password field, and submit button are present on the page.
- Verifies that a user entering an incorrect username or password and clicking submit will see an error on the page.


Poll.test.js
- verifies that the percentage of people who voted for an option is calculated and displayed correctly

_Data.test.js
#1 async unit test for _saveQuestion to verify that the saved question is returned and all expected fields are populated when correctly formatted data is passed to the function.
#2 an async unit test for _saveQuestion to verify that an error is returned if incorrect data is passed to the function
#3 an async unit test for _saveQuestionAnswer to verify that an error is returned if incorrect data is passed to the function.
#4 async unit test for _saveQuestionAnswer to verify that the saved question answer is returned and all expected fields are populated when correctly formatted data is passed to the function.

Leaderboard.test.js
- Verifies that the leaderboard is displaying the correct user name, number of questions asked, and number of questions answered.


# Dependencies to be installed
npm install react-redux-loading-bar
npm install redux
npm install react-redux
npm install react-redux-loading-bar
npm install react-router-dom
npm install --save-dev @babel/plugin-proposal-private-property-in-object
npm install redux-thunk
npm install redux react-redux
npm install @reduxjs/toolkit
if the _connect method gives error try
    rm -rf node_modules
    npm install
npm install Jest --> npm install --save-dev jest
npm install npm install --save-dev @babel/preset-react
npm install npm install --save-dev redux-mock-store for the jest redux testing
npm install npm install --save-dev babel-jest
npm install npm install --save-dev @babel/preset-env
npm install npm install --save-dev jsdom

package.json should look like
"babel": {
    "presets": [
      "@babel/preset-react",
      "@babel/preset-env"
    ]
  },
  "jest": {
    "testEnvironment": "jsdom",
    "transform": {
      "^.+\\.jsx?$": "babel-jest"
    }
  }
