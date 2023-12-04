import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Tuotelista from "./components/Tuotelista";
import { CssBaseline } from "@mui/material";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

function App() {
  return (
    <>
      <CssBaseline /> {/* Normalize the styles */}
      <NavigationBar />
      <Router>
        <Routes>
          <Route path="/tuotteet" element={<Tuotelista />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
