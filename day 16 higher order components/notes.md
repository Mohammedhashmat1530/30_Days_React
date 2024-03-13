## Higher order component

The term higher order component is similar to higher order function in JavaScript

In JavaScript, a higher order function is a function that takes another function as a parameter or return another function.

## One way of writing a Higher Order Component(HOC)

import React from 'react'
const higherOrderComponent = (Component) => {
  return (props) => {
    return <Component {...props} />
  }
}

Most of the time third party libraries use higher order component. For instance redux, react-router-dom and material-u use higher order component.