export default ({ children, title }) =>
<html lang="ja">
<head>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
    <link rel="icon" href="/favicon.ico" />
    <link rel="stylesheet" href="/css/common.css" />
    <title>{title || "ふぁぼんのホームページ"}</title>
</head>
<body>
{children}
</body>
</html>;
