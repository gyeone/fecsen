import { useTranslation } from "react-i18next";

function Sitemap({ activeMenu, activeSitemap, setActiveSitemap }) {
    const { t } = useTranslation();

    const lnb = t(`lnb.${activeMenu}`, { returnObjects: true });

    return (
        <section
            className={`sitemap ${activeSitemap ? "sitemap--visible" : ""}`}
            onMouseEnter={() => setActiveSitemap(true)}
            onMouseLeave={() => setActiveSitemap(false)}
        >
            <h3 id="sitemap__gnb">{t(`gnb.${activeMenu}`)}</h3>
            <ul id="sitemap__lnb">
                {lnb &&
                    Object.entries(lnb).map(([k, v]) => (
                        <li key={k}>
                            <a href="">{v}</a>
                        </li>
                    ))}
            </ul>
        </section>
    );
}

export default Sitemap;
