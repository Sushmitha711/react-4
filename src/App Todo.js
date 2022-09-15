import './App.css';
import Navbar from './Navbar/Navbar';
import Home from './Pages/home';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"

function App() {
  return (
    <div>
      <Navbar/>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
