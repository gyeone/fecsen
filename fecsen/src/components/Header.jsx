import blackLogo from "../assets/icons/blackLogo.png";
import whiteLogo from "../assets/icons/whiteLogo.png";
import { MdLanguage } from "react-icons/md";

function Header() {
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
                    <li>
                        <a href=""></a>
                    </li>
                    <li>
                        <a href=""></a>
                    </li>
                    <li>
                        <a href=""></a>
                    </li>
                    <li>
                        <a href=""></a>
                    </li>
                </ul>
            </nav>
            <button id="language-btn">
                <MdLanguage />
                EN
            </button>
        </header>
    );
}

export default Header;
