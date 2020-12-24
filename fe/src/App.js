import { BrowserRouter, Route, Switch } from "react-router-dom";
import PostList from "./pages/PostList";
import PostView from "./pages/PostView";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={PostList} />
          <Route path="/post/create" exact component={PostView} />
          <Route path="/post/:id" exact component={PostView} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
