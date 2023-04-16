import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import IPhone146Button from "./components/IPhone146Button";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|iphone-14-5)">
          <IPhone146Button text2="كيف تشعر الآن؟" text3="الدعاء المناسب لك :" text4="اكتب مشاعرك هنا.." />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
