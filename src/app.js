//import page from "./../node_modules/page/page.mjs";
import page from "//unpkg.com/page/page.mjs";

import { renderMiddleware } from "../middleware/renderMiddleware.js";
import { homePage } from './views/homeView.js';
import { loginPage } from './views/loginView.js';
import { moviesPage, myMoviesPage } from './views/moviesView.js';
import { registerPage } from './views/registerView.js';
import { detailsPage } from "./views/movieDetailsView.js";
import { renderNavi } from "./views/navView.js";
import { logoutPage } from "./views/logoutView.js";
import { createMoviePage } from "./views/createMovieView.js";
import { editMoviePage } from "./views/editMovieView.js";

page(renderMiddleware);


page('/', renderNavi, homePage);
page('/movies', renderNavi, moviesPage);
page('/my-movies', renderNavi, myMoviesPage);
page('/login', renderNavi, loginPage);
page('/register', renderNavi, registerPage);
page('/create-movie', renderNavi, createMoviePage);
page('/logout', renderNavi, logoutPage);
page('/movies/:movieId', renderNavi, detailsPage);
page('/edit-movie/:movieId', renderNavi, editMoviePage);

page.start();