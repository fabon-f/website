import defaultLayout from "./layout.jsx";
import { ExternalLink } from "../../../lib/components.tsx"

export default ({ children, title, ...props }, filters) => {
    const header = <header className="header_nav">
        <div className="header_nav_inner">
            <a href="/navostoke/"><img src="/img/navostoke/logotype.svg" alt="ナヴァストーケ トップページ" height="60" width="160" /></a>
            <nav>
                <ul className="header_nav_links">
                    <li><a href="/navostoke/about/">サークル概要</a></li>
                    <li><a href="/navostoke/contact/">連絡先・リンク</a></li>
                    <li><ExternalLink href="https://navostoke.booth.pm" icon={false}>通販・DL販売</ExternalLink></li>
                </ul>
            </nav>
        </div>
    </header>;
    const footer = <footer>
        <p><a href="/">ふぁぼんのホームページ</a></p>
        <div id="footer">
            <p>© 2021-{new Date().getFullYear()} ナヴァストーケ «на востоке»</p>
        </div>
    </footer>;
    const fullTitle = `${title} | ナヴァストーケ`;
    return defaultLayout({ children: [header, children, footer], ...props, bareTitle: true, title: fullTitle }, filters);
}
