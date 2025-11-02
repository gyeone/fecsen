import { useTranslation } from "react-i18next";

function Sitemap({ activeMenu, activeSitemap, setActiveSitemap }) {
    const { t } = useTranslation();

    const lnbItems = t(`lnb.${activeMenu}`, { returnObjects: true });

    return (
        <section
            className={`sitemap ${activeSitemap ? "sitemap--visible" : ""}`}
            onMouseEnter={() => setActiveSitemap(true)}
            onMouseLeave={() => setActiveSitemap(false)}
        >
            <h3 id="sitemap__menu">{t(`gnb.${activeMenu}`)}</h3>
            <ul id="lnb">
                {lnbItems &&
                    Object.entries(lnbItems).map(([k, v]) => (
                        <li key={k}>
                            <a href="">{v}</a>
                        </li>
                    ))}
            </ul>
        </section>
    );
}

export default Sitemap;
