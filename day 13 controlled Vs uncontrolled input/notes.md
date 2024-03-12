## Uncontrolled Components
In react most of the time we use controlled inputs as recommended 
To write an uncontrolled component, instead of writing an event handler for every state update, you can use a ref to get form values from the DOM. In uncontrolled input we get data from input fields like traditional HTML form data handling.

Uncontrolled inputs are useful when you need to integrate with legacy code, work with certain browser APIs, or simply when managing input data through React's state is unnecessary or impractical. However, they come with some trade-offs, such as less control over input validation and difficulty in synchronizing input data with React's component lifecycle.



import React, { useRef } from 'react';

function UncontrolledInput() {
  const inputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Input value:", inputRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={inputRef} defaultValue="Initial Value" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default UncontrolledInput;
