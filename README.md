# React + Antd + Redux Boilerplate

> Boilerplate was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)

This boilerplate lets you easily start project with React, Redux, Antd and etc. tools included and configured.

## Included:

- [Redux](https://redux.js.org/api/api-reference) - state container
- [Redux Starter Kit](https://redux-starter-kit.js.org/) - for simple redux boilerplate handle
- [Redux thunk](https://github.com/reduxjs/redux-thunk) - Thunk middleware for Redux
- [Reselect](https://github.com/reduxjs/reselect) - Selector library for Redux
- [Antd](https://ant.design/docs/react/introduce) - React UI Library
- [React Router Dom](https://reacttraining.com/react-router/web/api/BrowserRouter) - Routing
- [history](https://github.com/ReactTraining/history) - Manage session history with JavaScript
- [Axios](https://github.com/axios/axios) - Promise based HTTP client for the browser and node.js
- [React Hook Form](https://react-hook-form.com/) - Performant, flexible and extensible forms with easy to use for validation.
- [i18next](https://www.i18next.com/) - internationalization-framework
- [react-i18next](https://github.com/i18next/react-i18next) - Higher order component and append i18next to context.
- [i18next-browser-languagedetector](https://github.com/i18next/i18next-browser-languageDetector) - language detector used in browser environment for i18next
- [framer-motion](https://www.framer.com/motion/) - React library to power production-ready animations.
- [react-transition-group](https://reactcommunity.org/react-transition-group/) - simple components useful for defining entering and exiting transitions.
- [node-sass](https://github.com/sass/node-sass) - Node.js bindings to libsass
- [moment](https://momentjs.com/docs/) - Parse, validate, manipulate, and display dates and times in JavaScript.
- [prop-types](https://github.com/facebook/prop-types) - Runtime type checking for React props and similar objects
- [react-icons](https://react-icons.netlify.com/#/) - Include popular icons in your React projects
- [react-text-mask](https://www.npmjs.com/package/react-text-mask) - input mask library
- [@sweetalert/with-react](https://github.com/chentsulin/sweetalert-react) - Declarative SweetAlert in React
- [universal-cookie](https://github.com/reactivestack/cookies) - Load and save cookies within your React application
- [@craco/craco](https://github.com/sharegate/craco) - Create React App Configuration Override
- [craco-antd](https://github.com/DocSpring/craco-antd) - A craco plugin to use Ant Design with create-react-app

## Getting Started

#### Clone repo

### `git clone https://github.com/Haqverdi/react-antd-boilerplate`

#### Make it your own

`rm -rf .git`

`git add remote ...`

#### Install dependencies

### `npm install`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.

### `npm run eject`

It will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

## Folder Structure

    .
    ├── public                  # Public folder
    ├── src                     # Source files
      ├── components            # React Components
        ├── SomeComponent       # Component folder
          ── SomeComponent.js   # Component file
        ── index.js             # Components root
      ├── assets                # Assets(images, icons)
      ├── containers            # eg. Pages (contains multiple components, control main flow)
        ├── Home                # ex. Home page (/home)
          ── index.js           # Home Route(page) main file
      ├── hooks                 # Custom `hooks`
      ├── context               # Context files (If used)
      ├── i18n                  # Localization
      ├── store                 # Redux store
        ├── actions             # actions folder
          ├── auth              # auth actions folder
            ── index.js         # auth actions file
        ├── constants           # constants folder
        ├── middleware          # middlewares folder
        ├── reducers            # reducers folder
          ├── auth              # auth reducers folder
            ── index.js         # auth reducer file
         ── apiConfig.js        # axios config (base route and etc.)
         ── index.js            # main store configure file
      ├── theme                 # Theme files(main.scss, antd.customize.less and etc.)
      ├── utils                 # Utils (helpers)
      ── App.js                 # Authorized App
      ── UnAuthorizedApp.js     # UnAuthorized App
      ── Routes.js              # main routes
      ── serviceWorker.js       # CRA servceWorker
      ── index.js               # root file
    ├── .prettierrc             # Prettier config file
    ├── package.json
    └── README.md
