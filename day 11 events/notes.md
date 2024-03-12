## What is an event?
event refers to a user's interaction with the user interface, such as clicking a button, hovering over an element, typing into an input field, etc.

Handling events in React is very similar to handling elements on DOM elements using pure JavaScript

Some of the syntax difference between handling event in React and pure JavaScript:

    -  events are named using camelCase, rather than lowercase.
    - With JSX you pass a function as the event handler, rather than a string.


Event handling in HTML:-
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>30 Days Of React App</title>
  </head>
  <body>
    <button>onclick="greetPeople()">Greet People</button>
    <script>
      const greetPeople = () => {
        alert('Welcome to 30 Days Of React Challenge')
      }
    </script>
  </body>
</html>

In React, it is slightly different

import React from 'react'
// if it is functional components
const App = () => {
  const greetPeople = () => {
    alert('Welcome to 30 Days Of React Challenge')
  }
  return <button onClick={greetPeople}> </button>
}


Another difference between HTML and React event is that you cannot return false to prevent default behavior in React. You must call preventDefault explicitly. For example, with plain HTML, to prevent the default link behavior of opening a new page, you can write:

Plain HTML
<a href="#" onclick="console.log('The link was clicked.'); return false">
  Click me
</a>

In React, if you want to prevent the default action of an event, such as the navigation behavior of an anchor element, you typically have two options:
  * Using the preventDefault() method: Inside the event handler function, you can call event.preventDefault() to prevent the default action associated with the event.
                    event.preventDefault();

  * Returning false from the event handler: If you return false from the event handler function, it also prevents the default action associated with the event.


import React, { Component } from 'react';

class App extends Component {
  handleClick = (event) => {
    event.preventDefault(); // Prevents the default action of the anchor element
    alert('Welcome to 30 Days Of React Challenge');
  }

  render() {
    return (
      <a href='#' onClick={this.handleClick}>
        Click me
      </a>
    );
  }
}
