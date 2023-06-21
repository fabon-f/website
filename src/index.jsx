import { ExternalLink, WebpImage } from "../lib/components.tsx"

export const stylesheet = ["index"]

export default data =>
    <main>
        <section class="identity-section">
            <div class="identity">
                <WebpImage src="img/fabon" width="150" height="150" alt="ふぁぼんのアイコン" />
                <h1>ふぁぼん</h1>
            </div>
            <p class="identity-aka">a.k.a. ファボン・イリイチ・ファヴォルスキー (Фабон Ильич Фаворский)</p>
        </section>

        <section>
            <h2>プロフィール</h2>
            <p>文章と物語とソフトウェアを書きます。論理と感情が好き。</p>
            <p>めざせ文理両道インテリゲーンツィヤ</p>
            <p><a href="/profile/">所属・経歴</a></p>
        </section>

        <section>
            <h2>興味・関心</h2>
            <p>雑食。言語とコンピュータと人文学が好き。本業は近現代ロシア史。</p>
            <p><a href="/interests/">もっと詳しく</a></p>
        </section>

        <section>
            <h2><a href="/writings/">書いた文章</a></h2>
            <p>真面目なものからネタに全力投球したものまで。各種の小説、評論、随筆、その他。</p>
        </section>

        <section>
            <h2>作ったソフトウェア</h2>
            <ul>
                <li>個人サークル「<ExternalLink href="https://navostoke.fabon.info">ナヴァストーケ</ExternalLink>」の公式サイト (ソース: <ExternalLink href="https://github.com/fabon-f/navostoke-website">GitHub</ExternalLink>)</li>
                <li>サークル「<ExternalLink href="https://miyakosoft.com">みやこそふと</ExternalLink>」の公式サイト (Nuxt3 + Cloudflare Pages)</li>
                <li><ExternalLink href="https://github.com/fabon-f/eroge-ime-dic">eroge-ime-dic</ExternalLink> (エロゲーマーのための変換用IME辞書)</li>
                <li><ExternalLink href="https://github.com/fabon-f/dotfiles">dotfiles</ExternalLink></li>
                <li><ExternalLink href="https://github.com/fabon-f/difftance">difftance</ExternalLink> (具体的なdiffではなく編集距離を出力するdiffツール)</li>
                <li><ExternalLink href="https://github.com/fabon-f/bf-esomer">Esomer</ExternalLink> (Ruby製のbrainfuckコンパイラ)</li>
                <li><ExternalLink href="https://github.com/fabon-f/sb2re">sb2re</ExternalLink> (Scrapbox記法をRe:VIEW記法に変換するツール)</li>
                <li><ExternalLink href="https://github.com/fabon-f/tensha.js">tensha.js</ExternalLink> (ロシア語等の外国語を日本語に転写・翻字するJavaScriptライブラリ)</li>
                <li><ExternalLink href="https://lab.fabon.info/soviet-placenames/">Soviet Placenames</ExternalLink> (旧ソ連地名データベース&検索ツール)</li>
                <li><ExternalLink href="https://github.com/fabon-f/remark-denden-ruby">remark-denden-ruby</ExternalLink> (<ExternalLink href="https://conv.denshochan.com/markdown">でんでんマークダウン</ExternalLink>のルビ記法をサポートするremarkプラグイン)</li>
            </ul>
        </section>

        <section>
            <h2>趣味</h2>
            <p>好きなジャンルはノベルゲー(エロゲ含む)とその音楽、ラノベとweb小説(主にラブコメ)、ミステリ、SF、きらら作品、艦これ。頭がいいクール美少女が性癖。</p>
            <p><span style={{textDecoration: "line-through"}}>Twitter、</span>プログラミング、旅行、鉄道、駅メモ、世界各地の料理も好き。</p>
            <p><a href="/likes/">もっと詳しく</a></p>
        </section>

        <h2>所属</h2>
        <section>
            <h3>同人サークル</h3>
            <p>
                <ExternalLink href="https://navostoke.fabon.info" icon={false}>
                    <picture>
                        <source srcSet="/img/navostoke/logo_dark.webp" width="300" height="169" type="image/webp" media="(prefers-color-scheme: dark)" />
                        <source srcSet="/img/navostoke/logo_dark.png" width="300" height="169" type="image/png" media="(prefers-color-scheme: dark)" />
                        <source srcSet="/img/navostoke/logo.webp" width="300" height="169" type="image/webp" />
                        <source srcSet="/img/navostoke/logo.png" width="300" height="169" type="image/png" />
                        <img src="/img/navostoke/logo.png" width="300" height="169" alt="ナヴァストーケ" decoding="async" />
                    </picture>
                </ExternalLink>
            </p>
            <p>
                <ExternalLink href="https://miyakosoft.com/" icon={false}><img src="/img/miyakosoft_logo.svg" alt="みやこそふと" width="300" height="150" decoding="async" /></ExternalLink>
            </p>
        </section>

        <section>
            <h3>大学サークル</h3>
            <ul>
                <li><ExternalLink href="https://tsg.ne.jp/">TSG(東大のコンピューター系サークル)</ExternalLink></li>
                <li><ExternalLink href="https://twitter.com/ut_glossophilia">東京大学語学愛好会(インカレ)</ExternalLink></li>
                <li><ExternalLink href="https://utkiraracircle.github.io/">東京大学きらら同好会</ExternalLink></li>
                <li><ExternalLink href="https://twitter.com/ut_vinos">東京大学ビジュアルノベル同好会 UT-ViNos</ExternalLink></li>
                <li><ExternalLink href="https://twitter.com/kukancolle">京都大学艦これ同好会(京艦同、インカレ)</ExternalLink></li>
                <li><ExternalLink href="https://twitter.com/kuvnlovers">京大美少女ゲーム同好会(京美同、インカレ)</ExternalLink></li>
            </ul>
        </section>

        <section>
            <h3>所属(過去形)</h3>
            <ul>
                <li>中高の<ExternalLink href="https://kaken-sec-room.jimdofree.com/">化学研究部</ExternalLink> (2014-2020)</li>
                <li>中高の<ExternalLink href="https://npca.jp/">パソコン研究部</ExternalLink> (2014-2020)</li>
            </ul>
        </section>

        {/* <h2><a href="/activities/">活動</a></h2> */}

        <h2 id="links">リンク</h2>
        <section>
            <h3>連絡先</h3>
            <table class="links">
                <tr><td>Twitter(メイン)</td><td><ExternalLink href="https://twitter.com/syobon_hinata">@syobon_hinata</ExternalLink></td></tr>
                <tr><td>Twitter(大学用人格)</td><td><ExternalLink href="https://twitter.com/alisa_ut">@alisa_ut</ExternalLink></td></tr>
                <tr><td>メール</td><td><a href="mailto:syobon.hinata.public@gmail.com">syobon.hinata.public@gmail.com</a></td></tr>
                <tr><td>Discord</td><td>fabon</td></tr>
            </table>
        </section>
        <section>
            <h3>その他のリンク</h3>
            <table class="links">
                <tr><td>ブログ</td><td><ExternalLink href="https://yuyusuki.hatenablog.com">天才クールスレンダー美少女になりたい</ExternalLink></td></tr>
                <tr><td>毎週の日記</td><td><ExternalLink href="https://diary.fabon.info">Hebdomadary</ExternalLink></td></tr>
                <tr><td>pixiv</td><td><ExternalLink href="https://www.pixiv.net/users/10536791">ふぁぼん</ExternalLink></td></tr>
                <tr><td>pixivFANBOX</td><td><ExternalLink href="https://fabon.fanbox.cc/">ふぁぼん</ExternalLink></td></tr>
                <tr><td>GitHub</td><td><ExternalLink href="https://github.com/fabon-f">fabon-f</ExternalLink></td></tr>
                <tr><td>GitLab.com</td><td><ExternalLink href="https://gitlab.com/fabon">fabon</ExternalLink></td></tr>
                <tr><td>Zenn</td><td><ExternalLink href="https://zenn.dev/fabon">fabon</ExternalLink></td></tr>
                <tr><td>Qiita</td><td><ExternalLink href="https://qiita.com/fabon">fabon</ExternalLink></td></tr>
                <tr><td>Wikipedia</td><td><ExternalLink href="https://ja.wikipedia.org/wiki/%E5%88%A9%E7%94%A8%E8%80%85:Chlorobenzen">Chlorobenzen</ExternalLink></td></tr>
                <tr><td>AtCoder(休止中)</td><td><ExternalLink href="https://atcoder.jp/users/fabon">fabon</ExternalLink></td></tr>
                <tr><td>ErogameScape</td><td><ExternalLink href="https://erogamescape.dyndns.org/~ap2/ero/toukei_kaiseki/user_infomation.php?user=fabon">fabon</ExternalLink></td></tr>
                <tr><td>Annict</td><td><ExternalLink href="https://annict.jp/@fabon">fabon</ExternalLink></td></tr>
                <tr><td>読書メーター</td><td><ExternalLink href="https://bookmeter.com/users/968503">ふぁぼん</ExternalLink></td></tr>
                <tr><td>ブクログ</td><td><ExternalLink href="https://booklog.jp/users/fabon">fabon</ExternalLink></td></tr>
                <tr><td>読書感想記事</td><td><ExternalLink href="https://yuyusuki.hatenablog.com/archive/category/%E6%9C%AC%E3%81%AE%E6%84%9F%E6%83%B3">はてなブログ</ExternalLink></td></tr>
                <tr><td>ソフトウェア展示室</td><td><ExternalLink href="https://lab.fabon.info">fabon Lab</ExternalLink></td></tr>
                <tr><td>文章置き場</td><td><ExternalLink href="https://l.fabon.info">ファヴォルスキー・アルヒーフ</ExternalLink></td></tr>
            </table>
        </section>

        <section>
            <h2>相互(とは限らない)リンク</h2>
            <p>敬称略。</p>
            <ul>
                <li><ExternalLink href="https://www.haxibami.net/">haxibami.net</ExternalLink> (haxibami)</li>
                <li><ExternalLink href="https://sno2wman.net/">sno2wman.net </ExternalLink> (sno2wman)</li>
                <li><ExternalLink href="https://awomomiji.tumblr.com/">青葉小路</ExternalLink> (あをもみじ)</li>
                <li><ExternalLink href="https://mikanixonable.github.io/" icon={false}><img src="https://mikanixonable.github.io/banner.png" width="221" height="57" alt="月面植物園" decoding="async" /></ExternalLink> (みかぶる)</li>
                <li><ExternalLink href="https://taisa.site/">Bibliotheca Pan Magica</ExternalLink> (大佐)</li>
            </ul>
        </section>

        <section>
            <h2>ウィッシュリスト</h2>
            <p><ExternalLink href="https://www.amazon.co.jp/hz/wishlist/ls/JIGLE0ETY74L">ふぁぼんの干芋のリスト</ExternalLink></p>
        </section>

        <section>
            <h2><a href="/library/">駄文図書館</a></h2>
            <p>自分語り、オタクの早口、性癖開示、限界奇行紀行、その他諸々。どうしようもなく暇なときの暇潰し程度にはなりそうな駄文の集合。</p>
        </section>
    </main>;
