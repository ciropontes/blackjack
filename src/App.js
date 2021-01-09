import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import "./styles.css";
import Header from './components/Header'
import Home from './routes/Home'
import Blackjack from './routes/Blackjack'
import History from './routes/History'

export default function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div>
          <Switch>
            <Route path="/blackjack">
              <Blackjack />
            </Route>
            <Route path="/history">
              <History />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}
