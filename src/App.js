import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Backend from "i18next-http-backend";
import Homepage from "./pages/Homepage";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Menu from "./pages/Menu";

i18n.use(Backend).use(initReactI18next).init({
  lng: "en",
});

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/menu" element={<Menu />} />
        <Route path="/" element={<Homepage />} />
      </Routes>
    </Router>
  );
}

export default App;
