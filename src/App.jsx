import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <div>
        <div></div>
        <div>
          <Routes>
            <Route path="/" element={<Login />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
