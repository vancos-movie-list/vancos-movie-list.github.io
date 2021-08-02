import { render } from 'https://unpkg.com/lit-html?module'
import authService from '../services/authService.js';


let rootDiv = document.querySelector('.root');
let navContainer = document.getElementById('navigation')

function contextRender(templateResult) {

    render(templateResult, rootDiv)
};

async function renderNav(templateResult) {
    render(templateResult, navContainer)
}

export function renderMiddleware(context, next) {
    let userData = authService.getAllData()
    context.render = contextRender;
    context.renderNav = renderNav;

    if (authService.isLoggedIn()) {
        context.isAuthenticated = true;
        context.userData = userData
    }
    next()
}