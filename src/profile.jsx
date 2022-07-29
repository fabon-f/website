import { ExternalLink } from "../lib/components.tsx"

export const title = "プロフィール"
export const description = "ふぁぼんのプロフィールについて"

export default data => <main>
    <h1>経歴</h1>
    <p>神戸市東灘区の某中高→東京大学 理科一類(22組、既修ロシア語)→東京大学文学部人文学科 西洋史学専修</p>
    <p>2001年生まれ。大阪生まれ大阪育ち。2020年から東京都在住。2022年現在大学3年生(かつ3回生)。</p>

    <h1>実績・資格</h1>
    <ul>
        <li>英検2級</li>
        <li>TOEIC L&R 795点(2017年5月)</li>
        <li><ExternalLink href="https://www.ioi-jp.org/">日本情報オリンピック(JOI)</ExternalLink>本選 2015/2016, 2016/2017, 2018/2019</li>
        <li><ExternalLink href="https://gp.csj.jp">化学グランプリ</ExternalLink>本選 2016(銅賞)、2019(銅賞)</li>
        <li><ExternalLink href="https://icho.csj.jp">国際化学オリンピック</ExternalLink>代表選考 2016(1次選考落ち), 2017(最終(2次)選考落ち)</li>
    </ul>

    <p><a href="/">トップへ</a></p>
</main>
