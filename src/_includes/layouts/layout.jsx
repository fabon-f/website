export default ({ children, title, description, url }, filters) =>{
    const siteName = "ふぁぼんのホームページ";
    const fullTitle = title ? `${title} | ${siteName}` : siteName;
    const fullUrl = filters.url(url, true);
    return <html lang="ja">
    <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="description" content={description || siteName} />
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={description || siteName} />
        <meta property="og:image" content="/img/fabon.png" />
        <meta property="og:url" content={fullUrl} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@syobon_hinata" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/css/common.css" />
        <title>{fullTitle}</title>
    </head>
    <body>
    {children}
    </body>
    </html>;
}
