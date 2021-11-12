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
            {series.books && series.books.map(book => <div><a href={`./works/${book.id}`}>{book.name}</a>{book.published || " (未発売)"}</div>)}
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
    const pastEvents = data.events.filter((event => Date.now() - Date.parse(`${event.date}T23:59:59+0900`) >= 0));
    pastEvents.reverse();
    const pastEventElements = pastEvents.slice(0, 5).map(event => <li>
        {event.id ? <a href={`./events/${event.id}`}>{event.name}</a> : <span>{event.name}</span>}
    </li>);
    const isEventAll = pastEvents.length === pastEventElements.length;
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

        <section>
            <h2>過去のサークル参加情報</h2>
            {pastEventElements.length === 0 ? <p>過去の参加イベントはありません。</p> : pastEventElements}
            {isEventAll || <a href="./events/">全て見る</a>}
        </section>

        <section id="special_thanks">
            <h2>Special Thanks</h2>
            <p>ロゴデザイン: <ExternalLink href="https://awomomiji.tumblr.com">あをもみじ</ExternalLink> さん</p>

            <details>
                <summary>このロゴについて</summary>
                <WebpImage src="/img/navostoke/logo" width="257" height="145" alt="ナヴァストーケのアイコン" />
                <p>私の興味の広さ故に、私の個人サークル「ナヴァストーケ」は必然的にさまざまな内容を扱うことになります。これは設立の瞬間から分かっていたことでした。ロゴの使われるジャンルが広い上に、ロゴに使えそうな具体的要素もバラバラ——デザイナー側からすれば相当な無茶振りだったと思うのですが、私が好きなロシア・ソ連と鉄道・船のエッセンスをきれいにまとめていただきました。</p>
                <h3>ロゴタイプ</h3>
                <p>ソ連やロシアの国旗から赤色と青色を選び、私も好きなソ連のデザインのようなレトロさと力強さを出しつつ、どのジャンルにも使えるすっきりとした文字にしてもらいました。欧文書体はモダニズムを元に作られたFuturaだそうです。</p>
                <h3>ロゴマーク</h3>
                <p>グラデーションと幾何学的図形を組み合わせたデザインは、1930年代ヨーロッパのカッサンドル「ノルマンディー号」に代表されるポスターデザインから着想を得たそうです。</p>
                <p>востокつまり東は日が昇る方角ということで、赤と青のグラデーションで表現された「徐々に明るくなる夜明けの東の空」、2方向の白い線で表現された「闇を切り裂いて進路を照らす鉄道・船・灯台のライト」、この2つの要素が盛り込まれています。今にもハイスクール・フリートOPのHigh Free Spiritsが流れてきそうな——私は「はいふり」の大ファンです——、希望あふれるロゴをデザインしていただきました。</p>

                <blockquote>
                    <p>静かに燃える世界　始まりはここから　夜空が終わりを告げるとき<br/>ひとすじの光が　胸に秘めた声が　解き放つ　闇を裂いて</p>
                </blockquote>
            </details>
        </section>
    </main>
}
