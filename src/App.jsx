import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import TestPage from "./components/TestPage.jsx";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<StartPage />} /> */}
          <Route path="/" element={<TestPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
