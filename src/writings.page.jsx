import { ExternalLink } from "../lib/components.tsx";

export const title = "書いたもの";
export const description = "ふぁぼんが書いた文章";

export default () => <main>
    <h1>各種書いたもの</h1>
    <section>
        <h2>同人活動</h2>
        <ExternalLink href="https://navostoke.fabon.info/works/">作品一覧 | ナヴァストーケ</ExternalLink>
    </section>
    <h2>小説</h2>
    <ExternalLink href="https://www.pixiv.net/users/10536791">pixiv</ExternalLink>
    <section>
        <h3>二次創作</h3>
        <ul>
            <li>艦これ <ExternalLink href="https://kukancolle.hatenablog.com/entry/2021/05/12/190000">「冬を送り、春を迎え」</ExternalLink> (ソ連艦たちがマースレニツァを祝ってブリヌイを作る話)</li>
            <li>艦これ <ExternalLink href="https://www.pixiv.net/novel/show.php?id=20449448">「あなたの名前は?」</ExternalLink></li>
            <li>艦これ <ExternalLink href="https://www.pixiv.net/novel/show.php?id=17088933">「2月24日」</ExternalLink></li>
            <li>恋する小惑星 <ExternalLink href="https://www.pixiv.net/novel/show.php?id=16190901">「拝啓、海の向こうの空へ」</ExternalLink></li>
            <li>恋する小惑星 <ExternalLink href="https://www.pixiv.net/novel/show.php?id=18592237">「ナナチカ探偵団と不可能な虹」</ExternalLink></li>
            <li>初恋＊れ〜るとりっぷ <ExternalLink href="https://www.pixiv.net/novel/show.php?id=20387809">「初恋＊れ〜るみすてり」</ExternalLink></li>
        </ul>
    </section>

    <section>
        <h2>小説以外</h2>
        <ul>
            <li><ExternalLink href="https://yuyusuki.hatenablog.com/entry/2018/10/12/173521">「ロシア革命と中央アジア」</ExternalLink> (素人高校生のレポートにつき取り扱い注意)</li>
            <li><ExternalLink href="https://yuyusuki.hatenablog.com/entry/2020/01/21/130303">「ソ連軍歌概説」</ExternalLink></li>
            <li><ExternalLink href="https://yuyusuki.hatenablog.com/entry/2022/06/12/190000">「東大生猪瀬舞概念」</ExternalLink> (<ExternalLink href="https://utkiraracircle.github.io/koias">東大恋する小惑星同好会</ExternalLink>合同誌<ExternalLink href="https://utkiraracircle.github.io/posts/find-our-stars-1">『#FindOurStars Vol.1』</ExternalLink>寄稿)</li>
            <li>「<ExternalLink href="https://yuyusuki.hatenablog.com/entry/2022/10/30/173000">まちカドまぞく vs. ウクライナ語警察</ExternalLink>」 (<ExternalLink href="https://utkiraracircle.github.io">東京大学きらら同好会</ExternalLink>合同誌<ExternalLink href="https://utkiraracircle.github.io/posts/micare-1">『Micare Vol.1』</ExternalLink>寄稿)</li>
            <li>同人誌 <ExternalLink href="https://navostoke.fabon.info/works/russian-police-1/">『ロシア語警察24時 vol.1 人名エトセトラ』</ExternalLink></li>
            <li><ExternalLink href="https://yuyusuki.hatenablog.com/entry/2023/08/17/183000">「那由多誰何の倫理学入門」</ExternalLink></li>
        </ul>
    </section>

    <section>
        <h2>ブログ</h2>
        <p><a href="/library/">駄文図書館</a>参照。</p>
    </section>

    <a href="/">トップへ</a>
</main>;
