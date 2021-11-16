import { ExternalLink } from "../../../lib/components.tsx"

export const title = "作品一覧"
export const description = "作品の一覧ページ"

export default data => {
    const books = data.series.filter(series => Array.isArray(series.books)).map(series =>
        <div>
            <h2>{series.name}</h2>
            {series.description && <p>{series.description}</p>}
            {series.books && series.books.map(book => <div><a href={`./${book.id}/`}>{book.name}</a>{book.published || " (未発売)"}</div>)}
        </div>
    );
    const collab = data.external_works.map(circle => {
        const works = circle.works.map(book => <div>
            <li>{book.url ? <ExternalLink href={book.url}>{book.name}</ExternalLink> : book.name} {book.description}</li>
        </div>);
        return <div>
            <h3>{circle.name}</h3>
            <ul>{works}</ul>
        </div>;
    });
    return <main role="main">
        <h1>作品一覧</h1>
        {books}

        <h2>寄稿・制作協力</h2>
        {collab}
    </main>;
}
