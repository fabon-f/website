import { ExternalLink, WebpImage } from "../lib/components.tsx"

export default data =>
    <main role="main">
        <h1>ふぁぼん(ファボン・イリイチ・ファヴォルスキー)</h1>
        <WebpImage src="img/fabon" width="300" height="300" alt="ふぁぼんのアイコン" />

        <p>オタク。めざせ文理両道インテリゲーンツィヤ</p>
        <h1>経歴</h1>
        <p>神戸市東灘区の某中高→東京大学 理科一類(22組、既修ロシア語)→東京大学文学部人文学科 西洋史学専修</p>
        <p>2001年生まれ。大阪生まれ大阪育ち。2020年から東京都在住。2022年現在大学3年生(かつ3回生)。</p>

        <h1>興味・関心</h1>
        <p>雑食。メインは化学、コンピュータ、ロシア語、歴史学、旧ソ連地域研究。あと数学、物理学、言語学、政治学、社会学、倫理学……</p>
        <p><a href="/interests/">もっと詳しく</a></p>

        <h1>趣味</h1>
        <p>いろいろ。そこそこ多趣味。</p>
        <p>好きなジャンルはノベルゲー(エロゲ含む)とその音楽、ラノベとweb小説(主にラブコメ)、ミステリ、SF、きらら作品、艦これ。頭がいいクール美少女が性癖。</p>
        <p><span style={{textDecoration: "line-through"}}>Twitter、</span>プログラミング、旅行、鉄道、駅メモ、世界各地の料理も好き。</p>
        <p><a href="/likes/">もっと詳しく</a></p>

        <h1>所属</h1>
        <h2>同人サークル</h2>
        <ExternalLink href="https://navostoke.fabon.info" icon={false}>
            <picture>
                <source srcSet="/img/navostoke/logo_dark.webp" width="300" height="169" type="image/webp" media="(prefers-color-scheme: dark)" />
                <source srcSet="/img/navostoke/logo_dark.png" width="300" height="169" type="image/png" media="(prefers-color-scheme: dark)" />
                <source srcSet="/img/navostoke/logo.webp" width="300" height="169" type="image/webp" />
                <source srcSet="/img/navostoke/logo.png" width="300" height="169" type="image/png" />
                <img src="/img/navostoke/logo.png" width="300" height="169" alt="ナヴァストーケ" />
            </picture>
        </ExternalLink>

        <h2>サークル</h2>
        <ul>
            <li><ExternalLink href="https://tsg.ne.jp/">TSG(東大のコンピューター系サークル)</ExternalLink></li>
            <li><ExternalLink href="https://twitter.com/ut_glossophilia">東京大学語学愛好会(インカレ)</ExternalLink></li>
            <li><ExternalLink href="https://utkiraracircle.github.io/">東京大学きらら同好会</ExternalLink></li>
            <li><ExternalLink href="https://twitter.com/ut_vinos">東京大学ビジュアルノベル同好会 UT-ViNos</ExternalLink></li>
            <li><ExternalLink href="https://twitter.com/kukancolle">京都大学艦これ同好会(京艦同、インカレ)</ExternalLink></li>
            <li><ExternalLink href="https://twitter.com/kuvnlovers">京大美少女ゲーム同好会(京美同、インカレ)</ExternalLink></li>
        </ul>
        <h2>その他</h2>
        <ul>
            <li>東京大学教養学部 前期課程 理科一類</li>
            <li><ExternalLink href="https://www.chemistry.or.jp">日本化学会</ExternalLink> ジュニア会員(毎月「化学と工業」が家に届く 諸事情と歴史的経緯……)</li>
        </ul>

        <h2>所属(過去形)</h2>
        <ul>
            <li>中高の化学研究部(2014-2020)</li>
            <li>中高のパソコン研究部(2014-2020)</li>
        </ul>

        <h1>実績・資格</h1>
        <ul>
            <li>英検2級、TOEIC L&R 795点(2017年5月)</li>
            <li><ExternalLink href="https://www.ioi-jp.org/">日本情報オリンピック(JOI)</ExternalLink>本選 2015/2016, 2016/2017, 2018/2019</li>
            <li><ExternalLink href="https://gp.csj.jp">化学グランプリ</ExternalLink>本選 2016(銅賞)、2019(銅賞)</li>
            <li><ExternalLink href="https://icho.csj.jp">国際化学オリンピック</ExternalLink>代表選考 2016(1次選考落ち), 2017(最終(2次)選考落ち)</li>
        </ul>

        <h1><a href="/activities/">活動</a></h1>

        <h1>各種作ったもの</h1>
        <ul>
            <li>このサイト (ソース: <ExternalLink href="https://github.com/fabon-f/website">GitHub</ExternalLink>)</li>
            <li><ExternalLink href="https://github.com/fabon-f/eroge-ime-dic">eroge-ime-dic</ExternalLink> (エロゲーマーのための変換用IME辞書)</li>
            <li><ExternalLink href="https://github.com/fabon-f/dotfiles">dotfiles</ExternalLink></li>
            <li><ExternalLink href="https://github.com/fabon-f/difftance">difftance</ExternalLink> (具体的なdiffではなく編集距離を出力するdiffツール)</li>
            <li><ExternalLink href="https://github.com/fabon-f/bf-esomer">Esomer</ExternalLink> (Ruby製のbrainfuckコンパイラ)</li>
            <li><ExternalLink href="https://github.com/fabon-f/sb2re">sb2re</ExternalLink> (Scrapbox記法をRe:VIEW記法に変換するツール)</li>
            <li><ExternalLink href="https://github.com/fabon-f/tensha.js">tensha.js</ExternalLink> (ロシア語等の外国語を日本語に転写・翻字するJavaScriptライブラリ)</li>
        </ul>
        <h1><a href="/writings/">各種書いたもの</a></h1>

        <h1>リンク</h1>
        <ul>
            <li>Twitter(メイン): <ExternalLink href="https://twitter.com/syobon_hinata">@syobon_hinata</ExternalLink></li>
            <li>Twitter(大学用人格): <ExternalLink href="https://twitter.com/alisa_ut">@alisa_ut</ExternalLink></li>
            <li>ブログ: <ExternalLink href="https://yuyusuki.hatenablog.com">天才クールスレンダー美少女になりたい</ExternalLink></li>
            <li>GitHub: <ExternalLink href="https://github.com/fabon-f">fabon-f</ExternalLink></li>
            <li>GitLab.com: <ExternalLink href="https://gitlab.com/fabon">fabon</ExternalLink></li>
            <li>Zenn: <ExternalLink href="https://zenn.dev/fabon">fabon</ExternalLink></li>
            <li>Qiita: <ExternalLink href="https://qiita.com/fabon">fabon</ExternalLink></li>
            <li>AtCoder(休止中): <ExternalLink href="https://atcoder.jp/users/fabon">fabon</ExternalLink></li>
            <li>ErogameScape: <ExternalLink href="https://erogamescape.dyndns.org/~ap2/ero/toukei_kaiseki/user_infomation.php?user=fabon">fabon</ExternalLink></li>
            <li>Discord: fabon#5185</li>
            <li>Annict: <ExternalLink href="https://annict.jp/@fabon">fabon</ExternalLink></li>
            <li>読書メーター: <ExternalLink href="https://bookmeter.com/users/968503">ふぁぼん</ExternalLink></li>
            <li>ブクログ: <ExternalLink href="https://booklog.jp/users/fabon">fabon</ExternalLink></li>
            <li>読書感想記事: <ExternalLink href="https://yuyusuki.hatenablog.com/archive/category/%E6%9C%AC%E3%81%AE%E6%84%9F%E6%83%B3">はてなブログ</ExternalLink></li>
            <li>Wikipedia: <ExternalLink href="https://ja.wikipedia.org/wiki/%E5%88%A9%E7%94%A8%E8%80%85:Chlorobenzen">Chlorobenzen</ExternalLink></li>
            <li>メール: <a href="mailto:syobon.hinata.public@gmail.com">syobon.hinata.public@gmail.com</a></li>
        </ul>

        <h1>ウィッシュリスト</h1>
        <p><ExternalLink href="https://www.amazon.co.jp/hz/wishlist/ls/JIGLE0ETY74L">ふぁぼんの干芋のリスト</ExternalLink></p>

        <h1><a href="/library/">駄文図書館</a></h1>
        <p>自分語り、オタクの早口、性癖開示、限界奇行紀行、その他諸々。どうしようもなく暇なときの暇潰し程度にはなりそうな駄文の集合。</p>
    </main>;
