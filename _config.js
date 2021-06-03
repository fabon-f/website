import lume from "lume/mod.js";
import jsx from "lume/plugins/jsx.js";

const site = lume({
    src: "src",
    location: new URL("https://www.fabon.info"),
});
site.use(jsx());

for (const path of ["img", "css", "favicon.ico", "404.html"]) {
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
