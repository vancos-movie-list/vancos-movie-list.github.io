import { html } from "https://unpkg.com/lit-html?module";
import { getAllMovies, getMyMovies, searchMovie } from "../../services/movieService.js";

const ITEMS_PER_PAGE = 3;

const movieTemlpate = (movie) => html`
<li class="card " style="width: 18rem;">
    <img src=${movie.img} class="card-img-top" alt=${movie.title}>
    <div class="card-body">
        <h5 class="card-title">${movie.title}</h5>
        <a href="/movies/${movie._id}" class="btn btn-primary details-btn">Details</a>
    </div>
</li>
`;


const moviesTemplate = (movies, pages, currentPage = 1) => html`
<h2>Movies Page</h2>
<section class='movies-wrapper'>
    <ul class="movie-list">
        ${movies.slice((ITEMS_PER_PAGE * currentPage - 1) - 2, (ITEMS_PER_PAGE * currentPage - 1) - 2 + ITEMS_PER_PAGE)
        .map(m =>
            movieTemlpate(m))}
    </ul>
    <nav aria-label="Page navigation example">
        <ul class="pagination">
            <li class="page-item"><a class="page-link" href="#">Previous</a></li>

            ${pages.map(x => html`
            <li class="page-item"><a class="page-link" href=${x.url}>${x.page}</a></li>
            `)}

            <li class="page-item"><a class="page-link" href="#">Next</a></li>
        </ul>
    </nav>
</section>
`;

function generatePaging(movies) {

    let pages = []
    let curetnPage = 0;
    for (let i = 0; i < movies.length; i += ITEMS_PER_PAGE) {
        curetnPage++
        pages.push({
            url: `/movies?page=${curetnPage}`,
            page: curetnPage
        })
    }

    return pages
}

export async function moviesPage(ctx) {
    let movies = undefined

    if (!ctx.qs.search) {
        movies = await getAllMovies();
    } else {
        let search = ctx.qs.search;
        movies = await searchMovie(search)
    }


    ctx.render(moviesTemplate(movies, generatePaging(movies), ctx.qs.page));

}

export async function myMoviesPage(ctx) {
    let ownerId = ctx.userData.userId
    let movies = await getMyMovies(ownerId);
    let pages = generatePaging(movies)
    ctx.render(moviesTemplate(movies, pages, ctx.qs.page));
}