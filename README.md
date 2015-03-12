# Flux + React application - Learnly

> An application architecture for React utilizing a unidirectional data flow.

## Overview

This application is based on Flux architecture and React.js and was created for educational purposes :)
 
## Implementation

Structure of this application is the following

<pre>
./
  index.html
  js/
    actions/
      TodoActions.js
    app.js
    bundle.js
    dispatcher/
      AppDispatcher.js
      Dispatcher.js
    components/
      Footer.react.js
      Header.react.js
      MainSection.react.js
      TodoApp.react.js
      TodoItem.react.js
      TodoTextInput.react.js
    stores/
      TodoStore.js
</pre>

The primary entry point into the application is app.js.  This file bootstraps the React rendering inside of index.html.  TodoApp.react.js is our controller-view and it passes all data down into its child React components.

TodoActions.js is a collection of action creator methods that views may call from within their event handlers, in response to user interactions.  They are nothing more than helpers that call into the AppDispatcher.

Dispatcher.js is a base class for AppDispatcher.js which extends it with a small amount of application-specific code.

TodoStore.js is our only store.  It provides all of the application logic and in-memory storage.  Based on EventEmitter from Node.js, it emits "change" events after responding to actions in the callback it registers with the dispatcher.

The bundle.js file is automatically genenerated by the build process, explained below.


## Running

You must have [npm](https://www.npmjs.org/) installed on your computer.

To build the project run this command:

    build JSX files:   browserify -t reactify js/app.js -o js/bundle.js

    start mongo Server,wherever its installed:  C:\Program Files\MongoDB\Server\3.0\bin\mongod.exe

    start node monitor:  nodemon server.js

## Credit

The initial design was made by [Bill Fisher](https://www.facebook.com/bill.fisher.771).  This README document was written by Bill Fisher and the principal creator of Flux, [Jing Chen](https://www.facebook.com/jing).


## License
Flux is BSD-licensed.
