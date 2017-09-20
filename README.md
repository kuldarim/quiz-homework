# React quiz with a Node server on Heroku

## Introduction

React quiz with typescript, redux, firebase, node.js.

Quiz consists of 4 katas, which user needs to solve. Each kata has several tests. All of them
needs to pass otherwise solution is incorrect. User can run predifined tests various times.

To access the test parameters user can calling `params[0]`. So basically you need to modify
`params[0]` and return desired output.

## Technical side

App is deployed to heroku, link is https://vast-lake-93750.herokuapp.com/ . It takes some time to
load first time, because I'm using free heroku instance.

### Technical side UI

Each kata is executed using eval function. To run it safelly it is execute spawning new web worker instance each time. (See [web worker](react-ui/src/utils/worker.ts))

There are tests also. For redux actions, and reducer. And one example for components (See [alerts](react-ui/src/components/kata-list/components/alerts.test.tsx))

The app itself works fine on mobile as well. There are some issues with carousel component though.
I'm using it to switch between katas. It does not render correctly the initial height of the element
but if you resize the window correctly, then it adapts the height correctly. This bug is registered
in that lib github. https://github.com/FormidableLabs/nuka-carousel/issues/103

### Technical side backend

Not much to cover, very simple api. One get call to get the katas and one post call to save solution data.

The data is stored in firebase

## Local Development

### Run the API Server

In a terminal:

```bash
# Initial setup
npm install

# Start the server
npm start
```


### Run the React UI

The React app is configured to proxy backend requests to the local Node server. (See [`"proxy"` config](react-ui/package.json))

In a separate terminal from the API server, start the UI:

```bash
# Always change directory, first
cd react-ui/

# Initial setup
npm install

# Start the server
npm start
```
