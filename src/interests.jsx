import { ExternalLink } from "../lib/components.tsx"

export const title = "興味・関心"
export const description = "ふぁぼんが興味・関心を持っている(主に学問的な)分野について"

export default data =>
    <main>
        <h1>興味・関心</h1>
        <h2>プログラミング・コンピュータ</h2>
        <p>コンピュータに関する各種理論から実際に動くソフトウェアの実装まで、レイヤの高低問わず興味あり。</p>
        <ul>
            <li>2014年、JavaScriptからプログラミングの道に入る。プログラミング歴{Math.round((new Date - new Date("2014-09-01")) / (365 * 24 * 60 * 60 * 1000))}年。</li>
            <li><ExternalLink href="https://www.ruby-lang.org/ja/">Ruby</ExternalLink>, <ExternalLink href="https://www.typescriptlang.org">TypeScript</ExternalLink>, <ExternalLink href="https://crystal-lang.org">Crystal</ExternalLink></li>
            <li>CUI、シェルスクリプト、シェル芸、<ExternalLink href="https://archlinux.org/">Arch Linux</ExternalLink></li>
            <ul><li><ExternalLink href="https://github.com/fabon-f/dotfiles">dotfiles</ExternalLink></li></ul>
            <li>コードゴルフ</li>
            <li>VS Code使い。たまにVimもいじる。</li>
            <li>競プロはやっていない。始める機運がゼロではないが……</li>
            <li>CTFも多少やっている。嘘、やりたいけどほとんどやっていない。</li>
        </ul>

        <h2>自然言語・外国語</h2>
        <p>母語は日本語。非母語はロシア語しかわからん。英語は平易な文章を読んだり聞いたりはできるが、文構造が複雑な文章を読解したりまともに書いたり話したりはできない。ラテン語、中国語(普通話)、アラビア語、ウズベク語などをかじっては投げ、かじっては投げて今に至る。</p>

        <h2>理系の諸学問(数学・自然科学・工学など)</h2>
        <p>数学や物理はやりたい……が、手をつけられていない。</p>
        <p>昔ほどではないが化学は好き(思い入れもある)。どちらかというと物理学寄りの分野が特に好き。有機化学は苦手。</p>
        <p>生物学や地学はなんもわからん。</p>
        <p>人文社会のオタクでもあるのでいわゆる学際的な分野も好きだと思われそうだが、実はそうでもなかったり……人類学とか人間の脳とか認知・心理とかにも正直あまり興味が持てずにここまで来てしまった。</p>

        <h2>人文・社会</h2>
        <p>専門(?)は歴史学と旧ソ連地域研究。言語学、政治学、社会学、哲学(思想)に興味あり。芸術論、心理学、文学、宗教学、法学(法哲学を除く)、教育学などはあまり興味がないかもしれない……</p>

        <a href="/">トップへ</a>
    </main>
