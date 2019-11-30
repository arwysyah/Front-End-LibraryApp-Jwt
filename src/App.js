import React from "react";
 
import Home from "./Page/Home";
import "./App.css";
import Sinopsis from "./Page/Sinopsis";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {Provider} from 'react-redux';
import store from './Components/Redux/store';
import Login from './Page/Login'
import Register from "./Page/Register";
import Wishlist from "./Components/Wishlists";
import History from './Components/History'



function App() {
  return (
    <Provider store ={store}>
    <Router>
      <Route exact path="/" component={Home} />
      <Route path ="/login" component={Login}/>
      <Route path="/Sinopsis/:id" component={Sinopsis} />
      <Route path = "/register" component={Register}/>
      <Route path ='/history/:id_user' component={History}/>
      <Route path ='/wishlists/:id_user' component={Wishlist}/>

    </Router>
    </Provider>
  );
}

export default App;
