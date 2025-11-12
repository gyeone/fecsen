import { useTranslation } from "react-i18next";
import { MdLanguage } from "react-icons/md";
import { IoClose } from "react-icons/io5";

function Sidebar({
    toggleSidebar,
    setToggleSidebar,
    currentLanguage,
    changeLanguage,
}) {
    const { t } = useTranslation();

    const handleSidebar = () => {
        setToggleSidebar(false);
    };

    return (
        <>
            <section
                className={`sidebar ${toggleSidebar ? "sidebar--visible" : ""}`}
            >
                <div className="sidebar__header">
                    <label
                        className="sidebar__lang-change"
                        htmlFor="sidebar__lang-btn"
                    >
                        <MdLanguage id="sidebar__lang-icon" />
                        <input
                            type="button"
                            id="sidebar__lang-btn"
                            value={currentLanguage}
                            onClick={changeLanguage}
                        />
                    </label>
                    <button className="sidebar__closer" onClick={handleSidebar}>
                        <span className="sr-only">사이드 바 닫기</span>
                        <IoClose id="sidebar__close-icon" />
                    </button>
                </div>
                <ul className="sidebar__contents">
                    <li className="sidebar__content">
                        <h3 className="sidebar__gnb">
                            {t("gnb.company-introduction")}
                        </h3>
                        <a href="" className="sidebar__lnb">
                            {t(
                                "lnb.company-introduction.company-introduction-lnb"
                            )}
                        </a>
                        <a href="" className="sidebar__lnb">
                            {t("lnb.company-introduction.roadmap")}
                        </a>
                    </li>
                    <li className="sidebar__content">
                        <h3 className="sidebar__gnb">
                            {t("gnb.network-security")}
                        </h3>
                        <a href="" className="sidebar__lnb">
                            {t(
                                "lnb.network-security.AI-based-network-monitoring-system"
                            )}
                        </a>
                        <a href="" className="sidebar__lnb">
                            {t("lnb.network-security.deploy-a-firewall")}
                        </a>
                        <a href="" className="sidebar__lnb">
                            {t("lnb.network-security.DDoS-protection")}
                        </a>
                        <a href="" className="sidebar__lnb">
                            {t("lnb.network-security.Intrusion-response")}
                        </a>
                        <a href="" className="sidebar__lnb">
                            {t(
                                "lnb.network-security.Endpoint-Detection-and-Response"
                            )}
                        </a>
                    </li>
                    <li className="sidebar__content">
                        <h3 className="sidebar__gnb">{t("gnb.cloud")}</h3>
                        <a href="" className="sidebar__lnb">
                            {t("lnb.cloud.cloud-lnb")}
                        </a>
                    </li>
                    <li className="sidebar__content">
                        <h3 className="sidebar__gnb">
                            {t("gnb.security-solutions")}
                        </h3>
                        <a href="" className="sidebar__lnb">
                            {t(
                                "lnb.security-solutions.Security-Operations-Center"
                            )}
                        </a>
                        <a href="" className="sidebar__lnb">
                            {t("lnb.security-solutions.IT-Consulting")}
                        </a>
                    </li>
                </ul>
            </section>

            <div
                className={`overlay ${toggleSidebar ? "overlay__open" : ""}`}
                onClick={handleSidebar}
            ></div>
        </>
    );
}

export default Sidebar;
