import { ExternalLink } from "../../lib/components.tsx"

export const title = "サークル「ナヴァストーケ」"
export const description = "ふぁぼんの個人サークル「ナヴァストーケ」の公式サイト"

export default data => {
    const books = data.series.filter(series => Array.isArray(series.books)).map(series =>
        <div>
            <h3>{series.name}</h3>
            {series.description && <p>{series.description}</p>}
            {series.books && series.books.map(book => <div><a href={book.id}>{book.name}</a></div>)}
        </div>
    )
    return <main role="main">
        <div id="center_logo">
            <picture>
                <source srcSet="/img/navostoke/logo.webp" width="772" height="435" type="image/webp" />
                <source srcSet="/img/navostoke/logo.png" width="772" height="435" type="image/png" />
                <img src="/img/navostoke/logo.png" width="772" height="435" alt="ナヴァストーケのアイコン" />
            </picture>
        </div>
        <h1>サークル「ナヴァストーケ」</h1>
        <p>ふぁぼんの個人サークルです。科学、コンピュータ、ロシア語、旧ソ連、鉄道や船やバスや旅行など、節操なしにいろいろ書きます。</p>
        <p>評論・情報系の本がメインですが、一次/二次創作の小説も出すかもしれません。</p>
        <p>※サークル名の「ナヴァストーケ」はロシア語で「на востоке」すなわち「東で」を意味します。</p>

        <ExternalLink href="https://navostoke.booth.pm">BOOTH(通販)</ExternalLink>

        <h2>作品一覧</h2>
        {books}
    </main>
}
