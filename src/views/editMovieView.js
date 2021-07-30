import { html } from "../../node_modules/lit-html/lit-html.js";
import { editMovie, getMovie } from "../../services/movieService.js";

const editMovieTemplate = (movie, submitHandler) => html`
<div class="create-form">
    <div class="row space-top">
        <div class="col-md-12">
            <h1></h1>
            <p>Please fill all fields.</p>
        </div>
    </div>
    <form @submit=${submitHandler}>
        <div class="row space-top">
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-control-label" for="new-make">Title</label>
                    <input class="form-control" id="new-make" .value=${movie.title} type="text" name="title">
                </div>
                <div class="form-group has-danger">
                    <label class="form-control-label" for="new-year">Image URL</label>
                    <input class="form-control" id="new-year" .value=${movie.img} type="text" name="img">
                </div>
                <div class="form-group has-success">
                    <label class="form-control-label" for="new-model">Description</label>
                    <textarea class="form-control" id="new-model" .value=${movie.description} type="text"
                        name="description"></textarea>
                </div>
                <input type="submit" class="btn btn-primary" value="Edit" />
            </div>

        </div>
    </form>
</div>
`;

export async function editMoviePage(ctx) {
    let id = ctx.params.movieId;

    let movie = await getMovie(id);

    async function editSubmitHandler(e) {
        e.preventDefault()
        let form = e.target
        let formData = new FormData(form);
        let body = {
            title: formData.get('title'),
            description: formData.get('description'),
            img: formData.get('img')
        }
        let response = await editMovie(id, body);
        ctx.page.redirect(`/movies/${id}`)
    }


    ctx.render(editMovieTemplate(movie, editSubmitHandler));

}