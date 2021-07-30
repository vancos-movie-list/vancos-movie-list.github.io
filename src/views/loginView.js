import { html } from "https://unpkg.com/lit-html?module";
import * as authService from "../../services/authService.js";

let loginTemplate = (onLoginSubmit) => html`
<div class="form">
    <h3>Login Page</h3>
    <form @submit=${onLoginSubmit} class="$row g-3">
        <div class="row g-3">
            <label for="email" class="col-sm-2 col-form-label">Email</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" id="email" name='email'>
            </div>
        </div>
        <div class="mb-3 row">
            <label for="password" class="col-sm-2 col-form-label">Password</label>
            <div class="col-sm-10">
                <input type="password" class="form-control" name='password' id="password">
            </div>
            <div class="col-auto">
                <button type="submit" class="btn btn-primary mb-3">Login</button>
            </div>
        </div>
    </form>
</div>
`;

export function loginPage(context) {

    const onLoginSubmit = async (e) => {
        e.preventDefault()
        try {
            let formData = new FormData(e.target);
            let email = formData.get('email').trim();
            let password = formData.get('password').trim();

            if (!email || !password) {
                throw new Error('Fill all the boxes!');
            }

            let response = await authService.login(email, password);
            if (response) {
                e.target.reset();
                context.page.redirect('/');
            }
        } catch (err) {
            alert(err.message)
        }
    }

    context.render(loginTemplate(onLoginSubmit));
}