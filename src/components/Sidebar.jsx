import { useTranslation } from "react-i18next";
import { MdLanguage } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { FiArrowUpRight } from "react-icons/fi";

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

    const gnb = t("gnb", { returnObjects: true });
    const lnb = t("lnb", { returnObjects: true });

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
                    <button className="sidebar__close" onClick={handleSidebar}>
                        <span className="sr-only">사이드 바 닫기</span>
                        <IoClose id="sidebar__close-icon" />
                    </button>
                </div>
                <ul className="sidebar__contents">
                    {Object.entries(gnb).map(([gnbK, gnbV]) => (
                        <li className="sidebar__content" key={gnbK}>
                            <h3 className="sidebar__gnb">{gnbV}</h3>
                            {Object.entries(lnb[gnbK]).map(([lnbK, lnbV]) => (
                                <a href="" className="sidebar__lnb" key={lnbK}>
                                    {lnbV}
                                    <FiArrowUpRight className="sidebar__lnb-icon" />
                                </a>
                            ))}
                        </li>
                    ))}
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
