import blackLogo from "../assets/icons/blackLogo.png";
import whiteLogo from "../assets/icons/whiteLogo.png";
import { MdLanguage } from "react-icons/md";
import { useTranslation } from "react-i18next";
import i18n from "../locales/i18n";
import { useState } from "react";

function Header() {
    const { t } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState("KO");

    const changeLanguage = () => {
        const newLang = currentLanguage === "KO" ? "en" : "ko";
        setCurrentLanguage(newLang.toUpperCase());
        i18n.changeLanguage(newLang);
    };

    return (
        <header className="header">
            <h1>
                <a href="/">
                    <img id="header__logo-img" src={blackLogo} alt="펙센" />
                </a>
            </h1>
            <nav>
                <h2 className="sr-only">메인 메뉴</h2>
                <ul id="gnb">
                    <li className="gnb__menu">
                        <a className="gnb__link" href="">
                            {t(`gnb.company-introduction`)}
                        </a>
                    </li>
                    <li className="gnb__menu">
                        <a className="gnb__link" href="">
                            {t(`gnb.network-security`)}
                        </a>
                    </li>
                    <li className="gnb__menu">
                        <a className="gnb__link" href="">
                            {t(`gnb.cloud`)}
                        </a>
                    </li>
                    <li className="gnb__menu">
                        <a className="gnb__link" href="">
                            {t(`gnb.security-solutions`)}
                        </a>
                    </li>
                </ul>
            </nav>
            <label id="language-change" htmlFor="language-btn">
                <MdLanguage id="language-img" />
                <input
                    type="button"
                    id="language-btn"
                    value={currentLanguage}
                    onClick={changeLanguage}
                />
            </label>
        </header>
    );
}

export default Header;
