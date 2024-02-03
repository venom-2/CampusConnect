import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Pages/Home';
import College from './Pages/College';
import Notes from './Pages/Notes';
import Projects from './Pages/Projects';
import JobOpenings from './Pages/JobOpenings';
import About from './Pages/AboutUs';
import CreateAccount from './Pages/CreateAccount';
import SignIn from './Pages/SignIn';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={Home}/>
        <Route exact path='/findcollege' element={<College/>}/>
        <Route exact path='/notes' element={<Notes/>}/>
        <Route exact path='/projects' element={<Projects/>}/>
        <Route exact path='/job' element={<JobOpenings/>}/>
        <Route exact path='/aboutus' element={<About/>}/>
        <Route exact path='/signin' element={<SignIn/>}/>
        <Route exact path='/register' element={<CreateAccount/>}/>
      </Routes>
    </Router>
  );
}

export default App;
