Hooks are a new addition in React 16.8. They allow you use state, life cycle methods and other React features without writing a class component.

If we are using hooks we can have only a functional component in the entire application.

Different hooks have been introduced to React:Basic hooks and additional hooks

## Basic Hooks

    1. useState
    2. useEffect
    3. useContext

### state Hook
The useState is a function which takes one argument and returns a current state and functions that lets you update it.

const [count, setCount] = useState(0)

We use the setCount to update the state. The initial state value is 0.
// index.js
import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // Declaring new state variable
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <h1>{count} </h1>
      <button onClick={() => setCount(count + 1)}>Add One</button> <button onClick={() => setCount(count - 1)}>Minus One</button>
    </div>
  )
}
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)



Getting multiple input data from form using hooks
 const initialState = {
    firstName: '',
    lastName: '',
    country: '',
    title: '',
  }
  const [formData, setData] = useState(initialState)

  const onChange = (e) => {
    const { name, value } = e.target
    setData({ ...formData, [name]: value })
  }





  //
  validator.js
  