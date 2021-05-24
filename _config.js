import lume from "lume/mod.js";
import jsx from "lume/plugins/jsx.js";

const site = lume({
    src: "src"
});
site.use(jsx());

for (const path of ["img", "css", "favicon.ico", "404.html"]) {
    site.copy(path)
}

site.ignore("404.html")

export default site;
