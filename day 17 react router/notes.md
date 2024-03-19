The literal meaning of route is a path or a way to get to somewhere.

 React Router is by itself a React component which allows you to navigate between React components.

 npm install react-router-dom

 import React from 'react'
import {
  BrowserRouter,
  Route,
  NavLink,
  Switch,
  Redirect,
  Prompt,
  withRouter,
} from 'react-router-dom'


## BrowserRouter
BrowerRouter is a parent component which allows to wrap the application route.
Using the BrowserRouter we can access the browser history.
Sometimes it can renames as router
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

## Route
The Route component allows to navigate between components
The Route component has two required props: 
  1. the path 
  2. component or render

The path props is where the component has to be rendered and the component props is the component which has to be rendered in that specific path.

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Route path='/home' component={Home} />
        </div>
      </Router>
    )
  }
}

Now if you try to navigate by writing / or /about you will see the home page all the time. The home route has (/) which common to other routes. Since the home is lingering let's find a way to avoid this
  1. with an attribute exact
  2. ???
  3. ???

## Switch
The Switch component allows only one component to be rendered.

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Home component
const Home = (props) => <h1>Welcome Home</h1>
// About component
const About = (props) => <h1>About Us</h1>
// Contact component
const Contact = (props) => <h1>Contact us</h1>
// Challenge component
const Challenges = (props) => (
  <div>
    <h1>30 Days Of React Challenge</h1>
  </div>
)

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Switch>
            <Route exact path='/about' component={About} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/challenges' component={Challenges} />
            <Route exact path='/' component={Home} />
          </Switch>
        </div>
      </Router>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)


## NavLink
The NavLink component allow us to navigate each component.

The NavLink is a component on top of anchor tag. Clicking on a NavLink does not do a page refresh which is one of the best quality of using a router

<li>
    <NavLink to='/'>Home</NavLink>
</li>

## Nested Routing




routing partially done
will learn for sure


