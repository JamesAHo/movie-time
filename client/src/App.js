import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 

function App() {
  return (
    <div className="App">
      <Router> 
      < Navbar/> 
      <h1>Hel</h1> 
      </Router>  
      </div>
  );
}

export default App;
