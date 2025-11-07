import blackLogo from "../assets/icons/blackLogo.png";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { useTranslation } from "react-i18next";

function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="footer">
            <img id="footer__logo" src={blackLogo} alt="펙센" />
            <div className="footer__contents">
                <ul id="fnb">
                    <li className="fnb__menu">
                        <a className="fnb__link" href="">
                            {t(`gnb.company-introduction`)}
                        </a>
                    </li>
                    <li className="fnb__menu">
                        <a className="fnb__link" href="">
                            {t(`gnb.network-security`)}
                        </a>
                    </li>
                    <li className="fnb__menu">
                        <a className="fnb__link" href="">
                            {t(`gnb.cloud`)}
                        </a>
                    </li>
                    <li className="fnb__menu">
                        <a className="fnb__link" href="">
                            {t(`gnb.security-solutions`)}
                        </a>
                    </li>
                </ul>
                <ul id="footer__contact">
                    <li className="contact">
                        <MdEmail id="contact-icon" />
                        contact@fecsen.com
                    </li>
                    <li className="contact">
                        <IoCall id="contact-icon" />
                        02-0000-0000
                    </li>
                </ul>
            </div>
            <div id="footer__copyright">
                Copyright © 2025 Fecsen, All Rights Reserved.
            </div>
        </footer>
    );
}

export default Footer;
