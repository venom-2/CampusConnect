import React from 'react';
import Header from "../Components/header";
import Main from "../Components/main";
import Information from "../Components/information";
import Section from "../Components/section";
import Footer from "../Components/footer";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { reducer } from "../store/reducer";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

const Home = () => {
  return (
    <div>
        <Provider store={store}>
          <Header />
          <Main />
          <Information />
          <Section />
          <Footer />
        </Provider>
    </div>
  )
}

export default Home