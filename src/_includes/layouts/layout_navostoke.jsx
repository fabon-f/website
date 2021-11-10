import defaultLayout from "./layout.jsx";

export default ({ children, title, description, url, stylesheet }, filters) => {
    const footer = <footer id="footer">
        <p>© 2021- ナヴァストーケ «на востоке»</p>
    </footer>;
    return defaultLayout({ children: [children, footer], title, description, url, stylesheet }, filters);
}
