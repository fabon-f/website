import defaultLayout from "./layout.jsx";

export default ({ children, title, ...props }, filters) => {
    const footer = <footer>
        <p><a href="/navostoke/">サークルのトップページ</a> <a href="/">ふぁぼんのホームページ</a></p>
        <div id="footer">
            <p>© 2021-{new Date().getFullYear()} ナヴァストーケ «на востоке»</p>
        </div>
    </footer>;
    const fullTitle = `${title} | ナヴァストーケ`;
    return defaultLayout({ children: [children, footer], ...props, bareTitle: true, title: fullTitle }, filters);
}
