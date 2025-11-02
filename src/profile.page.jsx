import { ExternalLink } from "../lib/components.tsx"

export const title = "プロフィール"
export const description = "ふぁぼんのプロフィールについて"

export default data => <main>
    <section>
        <h1>略歴</h1>
        <p>大阪生まれ大阪育ち。2020年から東京都在住。2024年現在大学院1年目。</p>
        <table>
            <tr><td>2001年7月</td><td>生誕</td></tr>
            <tr><td>2014年4月</td><td>神戸市東灘区の某中学校 入学</td></tr>
            <tr><td>2020年3月</td><td>某高校 卒業</td></tr>
            <tr><td>2020年4月</td><td>東京大学 入学 (理科一類)</td></tr>
            <tr><td>2024年4月</td><td>東京大学大学院人文社会系研究科 入学</td></tr>
        </table>
    </section>

    <section>
        <h1>実績・資格その他</h1>
        <h2>大学以降</h2>
        <table>
            <tr><td>2023年2月〜3月</td><td><ExternalLink href="https://inside.pixiv.blog/2023/04/27/110000">PIXIV SPRING BOOT CAMP 2023</ExternalLink>参加</td></tr>
        </table>
        <h2>大学以前</h2>
        <ul>
            <li>英検2級</li>
            <li>TOEIC L&R 795点(2017年5月)</li>
            <li><ExternalLink href="https://www.ioi-jp.org/">日本情報オリンピック(JOI)</ExternalLink>本選 2015/2016, 2016/2017, 2018/2019</li>
            <li><ExternalLink href="https://gp.csj.jp">化学グランプリ</ExternalLink>本選 2016(銅賞)、2019(銅賞)</li>
            <li><ExternalLink href="https://icho.csj.jp">国際化学オリンピック</ExternalLink>代表選考 2016(1次選考落ち), 2017(最終(2次)選考落ち)</li>
        </ul>
    </section>

    <p><a href="/">トップへ</a></p>
</main>
