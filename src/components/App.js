import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Profile from "./Profile";
import NotFound from "./NotFound";
import Post from "./Post";

function App() {
  return (
    // <BrowserRouter basename="/tutorial" forceRefresh>
    <BrowserRouter>
      <div className="App">
        <Header />
      </div>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/profile" component={Profile} />
        <Route path="/post/:id" component={Post} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
