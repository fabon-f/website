import { ExternalLink, WebpImage } from "../../lib/components.tsx"

export const title = "サークル「ナヴァストーケ」"
export const description = "ふぁぼんの個人サークル「ナヴァストーケ」の公式サイト"

function imageElement(opt) {
    const imgPath= `/img/navostoke/events/${opt.src}`
    if (opt.type === "webp") {
        return <WebpImage {...opt} src={imgPath} />
    } else {
        return <img {...opt} src={imgPath} />
    }
}

export default data => {
    const books = data.series.filter(series => Array.isArray(series.books)).map(series =>
        <div>
            <h3>{series.name}</h3>
            {series.description && <p>{series.description}</p>}
            {series.books && series.books.map(book => <div><a href={book.id}>{book.name}</a>{book.published || " (未発売)"}</div>)}
        </div>
    )
    const futureEvents = data.events.filter(event => Date.now() - Date.parse(`${event.date}T23:59:59+0900`) < 0).map(event =>
        <div>
            <h3>{event.name}{` (${event.status})` || ""}</h3>
            {event.url && <ExternalLink href={event.url}>イベント公式サイト</ExternalLink>}
            <p>開催日: <time dateTime={event.date}>{`${event.date.replaceAll("-", "/")}`}</time></p>
            {event.img && <a href={`./events/${event.id}`}>{imageElement(event.img)}</a>}
            {event.id && <p><a href={`./events/${event.id}`}>イベント参加情報</a></p>}
        </div>
    );
    return <main role="main">
        <div id="center_logo">
            <WebpImage src="/img/navostoke/logo" width="772" height="435" alt="ナヴァストーケのアイコン" />
        </div>
        <section>
            <h1>サークル「ナヴァストーケ」</h1>
            <p>ふぁぼんの個人サークルです。科学、コンピュータ、ロシア語、旧ソ連、鉄道や船やバスや旅行など、節操なしにいろいろ書きます。</p>
            <p>評論・情報系の本がメインですが、一次/二次創作の小説も出すかもしれません。</p>
            <p>※サークル名の「ナヴァストーケ」はロシア語で「на востоке」すなわち「東で」を意味します。</p>
        </section>

        <ExternalLink href="https://navostoke.booth.pm">BOOTH(通販・ダウンロード販売)</ExternalLink>

        <section>
            <h2>作品一覧</h2>
            {books}
        </section>

        <section>
            <h2>今後のサークル参加予定</h2>
            {futureEvents}
        </section>

        <section id="special_thanks">
            <h2>Special Thanks</h2>
            <p>ロゴデザイン: <ExternalLink href="https://awomomiji.tumblr.com">あをもみじ</ExternalLink> さん</p>
        </section>
    </main>
}
