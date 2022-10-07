import lume from "lume/mod.ts";
import preact from "lume/plugins/jsx_preact.ts";
import lightningCss from "lume/plugins/lightningcss.ts";

const site = lume({
    src: "src",
    location: new URL("https://www.fabon.info"),
});
site.use(preact());
site.use(lightningCss({
    options: {
        analyzeDependencies: true,
        minify: true
    }
}));

for (const path of ["img", "favicon.ico", "404.html", "_redirects", "_headers"]) {
    site.copy(path);
}

function addDoctype(page) {
    if (!page.content.trim().startsWith("<!DOCTYPE")) {
        page.content = `<!DOCTYPE html>${page.content}`;
    }
}

site.process([".html"], addDoctype);

export default site;
