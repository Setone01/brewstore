import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./layout/Home";
import WelcomePage from "./pages/home/index"
function App() {
  return (
    <>
      <Routes>
        <Route element={<Home />}>
          <Route path="/" element={<WelcomePage/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
