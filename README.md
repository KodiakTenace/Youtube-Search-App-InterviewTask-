Youtube-Search-App (Zero&One Task)
================================================
React Native project with two functionalities:
- Youtube search
- Simple Counter

## Prerequisites
- [Node JS > 12](https://nodejs.org/) and npm
- [React Native CLI Environment Setup](https://reactnative.dev/docs/environment-setup) for Android

## Base dependencies
- [axios](https://github.com/axios/axios) for networking.
- [react-navigation](https://reactnavigation.org/) navigation library.
- [react-native-dotenv](https://github.com/zetachang/react-native-dotenv) for importing environment variables.
- [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons) for icons.
- [redux](https://redux.js.org/) for state management.
- [redux-saga](https://redux-saga.js.org/) to dispatch asynchronous actions.
- [jest](https://facebook.github.io/jest/) and [react-native-testing-library](https://callstack.github.io/react-native-testing-library/) for testing.

## Usage

### Using Youtube-Search-App

You can start by cloning this repository. 

`$ git clone https://github.com/KodiakTenace/Youtube-Search-App-InterviewTask-.git`

After that you should proceed with following:
- Go to your project's root folder and run `npm install`.
- Copy `.env.example` and rename it to `.env` to store your Youtube API Key. Remember to not commit this file, since it can store sensible information of your product.
- Run  `npx react-native start` to start metro server.
- Run  `npx react-native run-android` to start your application!


### Getting a Youtube Data API key
This application loads information using the [Youtube Data API v3](https://developers.google.com/youtube/v3/docs/).

**Below, you'll find a step by step explanation on how to get Youtube API Key**

1. Head over to the [Google developers console](https://console.developers.google.com)
2. Create a new project by clicking on `Select project` drop down right next to the logo. Click the `New Project` button an give it a speaking name.
3. Select your project by choosing it in the `Select Dropdown` directly next to the logo in the header.
4. Click the `Enable APIs and Services` button
5. Search for `youtube data`
6. Click on the `Youtube Data API v3`
7. Click the blue enable button
8. In the dashboard, click `Credentials` on the left sidebar
9. Click the `Create Credential` button
10. Which API are you using: `Youtube Data API v3`
11. Where will you be calling the API from: `Web browser`
12. What data are you accessing: `Public data`
13. Click the `What credentials do I need button`
14. Copy the API key
15. Paste API Key in `.env` 

[reference](https://raw.githubusercontent.com/productioncoder/youtube-react/master/README.md)


## Folder structure
This project follows a very simple project structure:
- `src`: This folder is the main container of all the code inside your application.
  - `components`: Folder to store any component that you use through your app
  - `redux`: Folder that contains redux store, actions, and reducers.
  - `sagas`: Folder that contains redux-sagas handlers and requests.
  - `navigation`: Folder to store the navigators.
  - `reducers`: This folder should have all your reducers, and expose the combined result using its `index.js`
  - `screens`: Folder that contains all your application screens.
- `App.js`: Main component that starts your whole app.
- `index.js`: Entry point of your application as per React-Native standards.

## TODO
Additional unit testing 



