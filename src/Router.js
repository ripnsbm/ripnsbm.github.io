import App from "./App";
import Dirlist from "./List";
import Blog from "./Blog";
import { Routes, Route, Link } from "react-router-dom";

function Router() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/list" element={<Dirlist />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </div>
  );
}

export default Router;
