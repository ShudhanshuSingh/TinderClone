import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Header from "./Header";
import TinderCards from "./TinderCards";
import SwipeButtons from "./SwipeButtons";
import Chats from "./Chats";
import ChatScreen from "./ChatScreen"

function App() {
  // e27360cf2395882b7bf80144296bb76d
  // https://api.themoviedb.org/3/movie/550?api_key=e27360cf2395882b7bf80144296bb76d

  //
  // https://policies.tinder.com/static/b0327365f4c0a31c4337157c10e9fadf/a74a0/tinder_full_color_watermark.png

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/chat/:person">
            <Header backbutton="/chat" />
            <ChatScreen />
          </Route>
          <Route path="/chat">
            <Header backbutton="/" />
            <Chats />
          </Route>

          <Route path="/">
            <Header />
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
