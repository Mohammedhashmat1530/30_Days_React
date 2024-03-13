
import './App.css';
import axios from 'axios';


function App() {
  const getdata = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res)=>console.log(res.data[0].body))
  }
  return (
    <div className="App">
      <button onClick={getdata}>CLick here</button>
    </div>
  );
}

export default App;
