import blackLogo from "../assets/icons/blackLogo.png";
import whiteLogo from "../assets/icons/whiteLogo.png";
import { MdLanguage } from "react-icons/md";
import { PiCloudFogDuotone } from "react-icons/pi";
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

    // 언어 변경 함수
    const changeLanguage = () => {
        const newLang = currentLanguage === "KO" ? "en" : "ko";
        setCurrentLanguage(newLang.toUpperCase());
        i18n.changeLanguage(newLang);
    };

    return (
        <>
            <header className={`header ${activeSitemap ? "header-white" : ""}`}>
                <h1 id="header__logo">
                    <a id="header__logo-link" href="/">
                        <img
                            id="header__logo-img"
                            src={activeSitemap ? blackLogo : whiteLogo}
                            alt="펙센"
                        />
                    </a>
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
                <label id="language-change" htmlFor="language-btn">
                    <MdLanguage id="language-icon" />
                    <input
                        type="button"
                        id="language-btn"
                        value={currentLanguage}
                        onClick={changeLanguage}
                    />
                </label>
                <button>
                    <sapn className="sr-only">메인 메뉴 열기</sapn>
                    <PiCloudFogDuotone id="hamburger-icon" />
                </button>
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
