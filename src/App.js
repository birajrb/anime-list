import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./About";
import BlogDetails from "./BlogDetails";
import Home from "./Home";
import Navbar from "./Navbar";
import NotFound from "./NotFound";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/anime-list">
              <Home />
            </Route>
            <Route path="/anime-list/about">
              <About />
            </Route>
            <Route path="/anime-list/anime-list/:id">
              <BlogDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
