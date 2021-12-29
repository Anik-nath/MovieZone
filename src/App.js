import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AllMovies from "./Component/AllMovies/AllMovies";
import Footer from "./Component/Footer/Footer";
import Home from "./Component/Home/Home";
import Navigation from "./Component/Shared/Navigation/Navigation";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navigation></Navigation>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/home" element={<Home></Home>} />
          <Route path="/allmovies" element={<AllMovies></AllMovies>} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
