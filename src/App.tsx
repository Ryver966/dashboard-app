import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { EPaths } from "./utils/Eshared";
import { Dashboard } from "./views/Dashboard/Dashboard";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={EPaths.root} element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};
