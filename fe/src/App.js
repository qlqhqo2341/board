import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import PostForm from "./pages/PostForm";
// import "./App.css";
import PostList from "./pages/PostList";
import PostView from "./pages/PostView";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={PostList} />
          <Route path="/post/create" exact component={PostForm} />
          <Route path="/post/:id" exact component={PostView} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
