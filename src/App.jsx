import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Main from "./pages/Main.jsx";
import Footer from "./components/Footer.jsx";

function App() {
    return (
        <BrowserRouter basename="/fecsen">
            <Header />
            <Routes>
                <Route path="/" element={<Main />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
