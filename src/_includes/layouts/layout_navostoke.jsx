import defaultLayout from "./layout.jsx";

export default ({ children, ...props }, filters) => {
    const footer = <footer id="footer">
        <p>© 2021-{new Date().getFullYear()} ナヴァストーケ «на востоке»</p>
    </footer>;
    return defaultLayout({ children: [children, footer], ...props }, filters);
}
