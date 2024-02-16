import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { reducer } from "./store/reducer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./Components/header";
import Main from "./Components/main";
import Information from "./Components/information";
import Section from "./Components/section";
import Footer from "./Components/footer";
import About from "./Pages/AboutUs";
import FindCollege from "./Pages/FindCollege";
import JobOpenings from "./Pages/JobOpenings";
import Notes from "./Pages/Notes";
import Project from "./Pages/Project";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/SignUp";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

function App() {
  return (
    <div className="App">
      <Router>
        <Provider store={store}>
          <Header />
          <Main />
          <Information />
          <Section />
          <Footer />
        </Provider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/findcollege" element={<FindCollege/>} />
          <Route path="/project" element={<Project />} />
          <Route path="/jobopenings" element={<JobOpenings />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
