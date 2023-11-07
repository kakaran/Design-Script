import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import CreateBlog from "../component/Blogs/CreateBlog";
import Navbar from "../component/Navbar";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/CreateBlog"
          element={isAuthenticated ? <CreateBlog /> : <Home />}
        />
      </Routes>
    </Router>
  );
  
}

export default App;
