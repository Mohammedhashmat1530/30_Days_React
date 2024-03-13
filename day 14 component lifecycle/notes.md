## Component lifecycle
component lifecycle is a process of mounting,updating and destroying the components in react application
it can be simple associated as birth,adult,elderly and death


In React component also a component can be mounted or rendered the first time, can be updated by changing the data and also can be destroyed whenever it is not needed

In react, each component has 3 main phases
    -  mounting
    - updating
    - unmounting(destroying)

## mounting
Rendering or putting React component into the DOM is called mounting.
The following built-in methods run in the given order during mounting of a React component.


## updating
After a component has been mounted on the DOM, it can be updated when a state or props change. An update of a React component can be caused by changes to props or state .

## unmounting
The final phase in the lifecycle of a component is unmounting. The unmounting phase removes component from the DOM. The componentWillUnmount method is the only built-in method that gets called when a component is unmounted.



Functional components with hooks don't have all the lifecycle methods of class components. They leverage the useEffect hook to manage side effects. This simplifies the component structure and makes it more composable.




## Functional Component Lifecycle:

Mounting and Updating Phase:
useEffect(): This is the equivalent of componentDidMount, componentDidUpdate, and componentWillUnmount combined. It accepts a function that contains imperative, possibly effectful code.
With an empty dependency array ([]), it works like componentDidMount.
With dependencies, it behaves like componentDidUpdate, and it runs the cleanup function when the component unmounts.
