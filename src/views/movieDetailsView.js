import { html } from "https://unpkg.com/lit-html?module";
import { deleteMovie, getMovie } from "../../services/movieService.js";




export async function detailsPage(ctx) {
    let id = ctx.params.movieId
    let movie = await getMovie(id);
    let userId = ctx.userData.userId
    let ownerId = movie._ownerId;
    let isOwner = userId === ownerId


    
   async function deleteHandler(e) {
       if(confirm('Are you shure you want to delete!')){
    let response = await deleteMovie(id);
    
    ctx.page.redirect('/movies')
}
}

ctx.render(movieDetailsTemlpate(movie, id, isOwner, deleteHandler));

}
const movieDetailsTemlpate = (movie, movieId, isOwner,deleteHandler) => html`
<div class="card details-card" style="width: 18rem;">
    <img src=${movie.img} class="card-img-top" alt=${movie.title}>
    <div class="card-body">
        <h5 class="card-title">${movie.title}</h5>
        <p class="card-text">${movie.description}</p>
        ${isOwner
        ?html `<a href="/edit-movie/${movieId}" class="btn btn-primary">Edit</a>
        <a href="javascript:void(0)" @click=${deleteHandler} class="btn btn-danger">Delete</a>` 
        :html`
        <button  class="btn btn-success">Up</button>
        <button class="btn btn-danger">Down</button> 
        `} 
        </div>
    </div>
    `;

