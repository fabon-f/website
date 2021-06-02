export default ({ children, title, description }) =>{
    const siteName = "ふぁぼんのホームページ";
    const fullTitle = title ? `${title} | ${siteName}` : siteName;
    return <html lang="ja">
    <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="description" content={description || "ふぁぼんのホームページ"} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/css/common.css" />
        <title>{fullTitle}</title>
    </head>
    <body>
    {children}
    </body>
    </html>;
}
