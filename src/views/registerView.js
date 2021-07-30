import { html } from "https://unpkg.com/lit-html?module";
import * as authService from "../../services/authService.js";

let registerTemplate = (onRegisterSubmit) => html`
<div class="form">
    <h3>Register Page</h3>
    <form @submit=${onRegisterSubmit} class="$row g-3">
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
            <div class="mb-3 row">
                <label for="rePass" class="col-sm-2 col-form-label">Re Password</label>
                <div class="col-sm-10">
                    <input type="password" class="form-control" name='rePass' id="rePass">
                </div>
                <div class="col-auto">
                    <button type="submit" class="btn btn-primary mb-3">Register</button>
                </div>
            </div>
    </form>
</div>
`;

export function registerPage(context) {

    const onRegisterSubmit = async (e) => {
        e.preventDefault()
        try {
            let formData = new FormData(e.target);
            let email = formData.get('email').trim();
            let password = formData.get('password').trim();
            let rePass = formData.get('rePass').trim()

            if (!email || !password) {
                throw new Error('Fill all the boxes!');
            }
            if (password !== rePass) {
                throw new Error('Passwords are diferent!');
            }

            let response = await authService.register(email, password);
            if (response) {
                e.target.reset();
                context.page.redirect('/');
            }
        } catch (err) {
            alert(err.message)
        }
    }

    context.render(registerTemplate(onRegisterSubmit));
}