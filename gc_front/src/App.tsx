import "./App.css";
import { Routes, Route } from "react-router-dom";
import Category from "./components/Category/Category";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Category />}></Route>
      </Routes>
    </>
  );
}

export default App;
