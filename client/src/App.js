import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 

function App() {
  return (
    <div className="App">
      <Router> 
      < Navbar/> 
      <startBtn/>
      <h1>Hello</h1> 
      </Router>  
      </div>
  );
}

export default App;


// import Navbar from './components/Navbar';

// function App() {
//   return (
//     <div className="App">
//       < Navbar/>    
//       </div>
//   );
// }

// export default App;