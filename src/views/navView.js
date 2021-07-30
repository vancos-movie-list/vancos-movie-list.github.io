import { html } from "../../node_modules/lit-html/lit-html.js";
import { ifDefined } from "../../node_modules/lit-html/directives/if-defined.js";
import authService from "../../services/authService.js";

const showUserInfo = (email) => html`
    <span>Welcome ${email}</span>
`;

const navTemplate = (isLoged, email) => html`
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">MovieDB</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        ${isLoged
                        ? html`
                        <a class="nav-link" aria-current="page" href="/">Home</a>
        
                        <a class="nav-link" href="/movies">Movies</a>
                        <a class="nav-link" href="/my-movies">My movies</a>
                        <a class="nav-link" href="/create-movie">Create Movie</a>
        
        
                        <a class="nav-link" href="/logout">Logout</a>
        
                        `
                        : html`
                        <a class="nav-link" href="/login">Login</a>
        
                        <a class="nav-link" href="/register">Register</a>
                        `
                        }
        
                    </div>
                </div>
                ${isLoged ? showUserInfo(email) : ''}
            </div>
        </nav>

`;




export async function renderNavi(context, next) {
    let email = undefined
    if (context.userData) {
        email = context.userData.email
    }
    context.renderNav(navTemplate(context.isAuthenticated, email))
    next()

}