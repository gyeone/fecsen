import blackLogo from "../assets/icons/blackLogo.png";
import whiteLogo from "../assets/icons/whiteLogo.png";
import { MdLanguage } from "react-icons/md";
import { LuMenu } from "react-icons/lu";
import { useTranslation } from "react-i18next";
import i18n from "../locales/i18n";
import { useState } from "react";
import Sitemap from "./Sitemap";

function Header() {
    const { t } = useTranslation();
    // 현재 언어
    const [currentLanguage, setCurrentLanguage] = useState("KO");
    // 메인 메뉴 이름
    const [activeMenu, setActiveMenu] = useState(null);
    // 사이트맵 여부
    const [activeSitemap, setActiveSitemap] = useState(false);
    // 사이드바 여부
    const [toggleSidebar, setToggleSidebar] = useState(false);

    // 언어 변경 함수
    const changeLanguage = () => {
        const newLang = currentLanguage === "KO" ? "en" : "ko";
        setCurrentLanguage(newLang.toUpperCase());
        i18n.changeLanguage(newLang);
    };

    const handleSidebar = () => {
        toggleSidebar ? setToggleSidebar(false) : setToggleSidebar(true);
    };

    return (
        <>
            <header
                className={`header ${activeSitemap ? "header__white" : ""}`}
            >
                <h1 className="header__logo">
                    <a
                        className={`header__logo-link ${
                            activeSitemap
                                ? "header__logo--black"
                                : "header__logo--white"
                        }`}
                        href="/"
                    ></a>
                </h1>
                <nav className="header__menu">
                    <h2 className="sr-only">메인 메뉴</h2>
                    <ul id="gnb" onMouseLeave={() => setActiveSitemap(false)}>
                        <li
                            className="gnb__menu"
                            onMouseEnter={() => {
                                setActiveMenu("company-introduction");
                                setActiveSitemap(true);
                            }}
                        >
                            <a className="gnb__link" href="">
                                {t(`gnb.company-introduction`)}
                            </a>
                        </li>
                        <li
                            className="gnb__menu"
                            onMouseEnter={() => {
                                setActiveMenu("network-security");
                                setActiveSitemap(true);
                            }}
                        >
                            <a className="gnb__link" href="">
                                {t(`gnb.network-security`)}
                            </a>
                        </li>
                        <li
                            className="gnb__menu"
                            onMouseEnter={() => {
                                setActiveMenu("cloud");
                                setActiveSitemap(true);
                            }}
                        >
                            <a className="gnb__link" href="">
                                {t(`gnb.cloud`)}
                            </a>
                        </li>
                        <li
                            className="gnb__menu"
                            onMouseEnter={() => {
                                setActiveMenu("security-solutions");
                                setActiveSitemap(true);
                            }}
                        >
                            <a className="gnb__link" href="">
                                {t(`gnb.security-solutions`)}
                            </a>
                        </li>
                    </ul>
                </nav>
                <label
                    className="header__lang-change"
                    htmlFor="header__lang-btn"
                >
                    <MdLanguage id="header__lang-icon" />
                    <input
                        type="button"
                        id="header__lang-btn"
                        className={` ${
                            activeSitemap
                                ? "header__lang-btn--black"
                                : "header__lang-btn--white"
                        }`}
                        value={currentLanguage}
                        onClick={changeLanguage}
                    />
                </label>
                <button className="header__hamburger" onClick={handleSidebar}>
                    <span className="sr-only">메인 메뉴 열기</span>
                    <LuMenu id="hamburger-icon" />
                </button>
            </header>
            <Sitemap
                activeMenu={activeMenu}
                activeSitemap={activeSitemap}
                setActiveSitemap={setActiveSitemap}
            />
        </>
    );
}

export default Header;
