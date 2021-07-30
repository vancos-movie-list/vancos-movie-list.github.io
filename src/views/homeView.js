import { html } from "https://unpkg.com/lit-html?module";

let homeTemplate = () => html`
<section>
    <h2>Home Page</h2>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi animi deserunt beatae doloribus ipsum laboriosam
    commodi ducimus, rerum doloremque? Dolore ducimus ipsum quidem accusamus, eum praesentium esse voluptates dolores
    repudiandae.
    <p></p>

</section>
`;




export function homePage(ctx) {
    ctx.render(homeTemplate())
}