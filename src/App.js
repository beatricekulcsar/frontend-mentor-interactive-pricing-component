import './App.css';
import {useState} from "react";

function App() {
  const [isChecked, setIsChecked ]= useState(false);

  const price = isChecked?"16":"14";
  return (
    <div className="App">
       <h1>Simple, traffic-based pricing</h1>
       <p>Sign-up for our 30-day trial. No credit card required.</p>
       <div className="container">
          <div>
            <p><span>100</span> PAGEVIEWS</p>
            <p>${price} /month</p>
          </div>
          <input type="range" id="price"
         min="1" max="5"></input>
          <div>
            <button id="btn-month" className="btn-billing" onClick={() => setIsChecked(false)}>Monthly Billing</button>
            <input type="checkbox" id="billing-toggle" onClick={() => setIsChecked(!isChecked)} checked={isChecked}></input>
            <button id="btn-year" className="btn-billing" onClick={() => setIsChecked(true)}>Yearly Billing</button>
            <span>25% discount</span>
          </div>
          <div>
            <ul>
              <li>Unlimited websites</li>
              <li>100% data ownership</li>
              <li>Email reports</li>
            </ul>
            <button id="btn-trial">Start my trial</button>
          </div>
       </div>
    </div>
  );
}

export default App;
