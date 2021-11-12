import lume from "lume/mod.ts";
import jsx from "lume/plugins/jsx.ts";

const site = lume({
    src: "src",
    location: new URL("https://www.fabon.info"),
});
site.use(jsx());

for (const path of ["img", "css", "favicon.ico", "404.html", "_redirects"]) {
    site.copy(path)
}

function addDoctype(page) {
    if (!page.content.trim().startsWith("<!DOCTYPE")) {
        page.content = `<!DOCTYPE html>${page.content}`;
    }
}

site.process([".html"], addDoctype);

site.ignore("404.html")

export default site;
