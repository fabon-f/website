function cssLinks(stylesheet) {
    if (stylesheet === undefined) {
        return undefined;
    } else if (typeof stylesheet === "string") {
        return <link rel="stylesheet" href={`/css/${stylesheet}.css`} />;
    } else {
        return stylesheet.map(f => <link rel="stylesheet" href={`/css/${f}.css`} />);
    }
}

export default ({ children, title, description, url, stylesheet, ogImage, twitterCardType, bareTitle }, filters) =>{
    const siteName = "ふぁぼんのホームページ";
    const fullTitle = bareTitle ? title : (title ? `${title} | ${siteName}` : siteName);
    const fullUrl = filters.url(url, true);
    return <html lang="ja">
    <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="description" content={description || siteName} />
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={description || siteName} />
        <meta property="og:image" content={filters.url(ogImage || "/img/fabon.png", true)} />
        <meta property="og:url" content={fullUrl} />
        <meta name="twitter:card" content={twitterCardType || "summary"} />
        <meta name="twitter:site" content="@syobon_hinata" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/css/common.css" />
        {cssLinks(stylesheet)}
        <title>{fullTitle}</title>
    </head>
    <body>
    {children}
    </body>
    </html>;
}
