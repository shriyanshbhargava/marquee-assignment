import "./styles.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BookSearch from "./Components/BookSearch";
import Bookshelf from "./Components/Bookshelf";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={BookSearch} />
          <Route path="/bookshelf" component={Bookshelf} />
        </Switch>
      </div>
    </Router>
  );
}
