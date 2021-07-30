import { html } from "https://unpkg.com/lit-html?module";
import { getAllMovies, getMyMovies } from "../../services/movieService.js";

const movieTemlpate = (movie) => html`
<div class="card " style="width: 18rem;">
    <img src=${movie.img} class="card-img-top" alt=${movie.title}>
    <div class="card-body">
        <h5 class="card-title">${movie.title}</h5>
        <a href="/movies/${movie._id}" class="btn btn-primary details-btn">Details</a>
    </div>
</div>
`;

const moviesTemplate = (movies) => html`
<h2>Movies Page</h2>
<section class="movie-list">
    ${movies.map(m => movieTemlpate(m))}
</section>
`;

export async function moviesPage(ctx) {
    let movies = await getAllMovies();

    ctx.render(moviesTemplate(movies));
}

export async function myMoviesPage(ctx) {
    let ownerId = ctx.userData.userId
    let movies = await getMyMovies(ownerId);

    ctx.render(moviesTemplate(movies));
}