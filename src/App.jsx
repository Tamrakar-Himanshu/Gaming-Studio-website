import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import './index.css'
import { HomePage } from "./Pages/HomePage";

function App() { 

  return (
     <Router>
      <Routes>
       <Route index element={<HomePage/>}></Route>
      </Routes>
     </Router>
  )
}

export default App
