import blackLogo from "../assets/icons/blackLogo.png";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";

function Footer() {
    return (
        <footer className="footer">
            <img className="footer__logo" src={blackLogo} alt="펙센" />
            <div>
                <ul id="fnb">
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
                <ul className="footer__contact">
                    <li>
                        <MdEmail />
                        contact@fecsen.com
                    </li>
                    <li>
                        <IoCall />
                        02-0000-0000
                    </li>
                </ul>
            </div>
            <div className="footer__copyright">
                Copyright © 2025 Fecsen, All Rights Reserved.
            </div>
        </footer>
    );
}

export default Footer;
