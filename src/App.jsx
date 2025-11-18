import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Main from "./pages/Main.jsx";
import Footer from "./components/Footer.jsx";
import { useTranslation } from "react-i18next";

function App() {
    const { t } = useTranslation();

    return (
        <BrowserRouter basename="/fecsen">
        <>
            <title>{t(`head.title`)}</title>
            <meta name="description" content={t(`head.description`)} />

                <Header />
                <Routes>
                    <Route path="/" element={<Main />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;
