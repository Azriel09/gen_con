import "./App.css";
import { Routes, Route } from "react-router-dom";
import Hero from "./components/Hero/Hero";
import Convert from "./components/Pages/Convert";
import { SelectedCategoryProvider } from "./components/Context/SelectedCategory";
import Category from "./components/Category/Category";
function App() {
  return (
    <>
      <SelectedCategoryProvider>
        <Routes>
          <Route path="/" element={<Hero />}>
            <Route index element={<Category />} />
            <Route path="/convert" element={<Convert />} />
          </Route>
        </Routes>
      </SelectedCategoryProvider>
    </>
  );
}

export default App;
