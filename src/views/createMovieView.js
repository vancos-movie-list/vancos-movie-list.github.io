import { html } from "https://unpkg.com/lit-html?module";

import { createMovie } from "../../services/movieService.js";

const createMovieTemplate = (submitHandler) => html`
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
                    <input class="form-control" id="new-make" type="text" name="title">
                </div>
                <div class="form-group has-danger">
                    <label class="form-control-label" for="new-year">Image URL</label>
                    <input class="form-control" id="new-year" type="text" name="img">
                </div>
                <div class="form-group has-success">
                    <label class="form-control-label" for="new-model">Description</label>
                    <textarea class="form-control" id="new-model" type="text" name="description"></textarea>
                </div>
                <input type="submit" class="btn btn-primary" value="Create" />
            </div>

        </div>
    </form>
</div>
`;

export function createMoviePage(context) {
    async function submitHandler(e) {
        e.preventDefault()
        let form = e.target
        let formData = new FormData(form);
        let body = {
            title: formData.get('title'),
            description: formData.get('description'),
            img: formData.get('img')
        }
        let response = await createMovie(body);
        context.page.redirect('/movies')
    }
    context.render(createMovieTemplate(submitHandler))
}