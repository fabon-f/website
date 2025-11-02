import lume from "lume/mod.ts";
import jsx from "lume/plugins/jsx.ts";
import lightningCss from "lume/plugins/lightningcss.ts";
import sitemap from "lume/plugins/sitemap.ts";

const site = lume({
    src: "src",
    location: new URL("https://www.fabon.info"),
});
site.use(jsx());
site.use(lightningCss({
    options: {
        analyzeDependencies: true,
        minify: true
    }
}));
site.use(sitemap());

site.add("css");

for (const path of ["img", "favicon.ico", "404.html", "_redirects", "_headers"]) {
    site.copy(path);
}

export default site;
