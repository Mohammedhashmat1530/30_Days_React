
import './App.css';

function App() {
  return (
    <div className="main-container">
      <div className="container1">
        <h2>SUBSCRIBE</h2>
      </div>
      <div className="container2">
        <h3>Sign up with your email address to receive news and updates</h3>
      </div>
      <div className="container3">
        <div className="part3">
          <input type="text" placeholder="First Name" />
        </div>
        <div className="part3">
          <input type="text" placeholder="Last Name" />
        </div>
        <div className="part3">
          <input type="text" placeholder="Email" />
        </div>
      </div>
      <div className="conatainer4">
        <button type="button">Subscribe</button>
      </div>
    </div>
  );
}

export default App;
