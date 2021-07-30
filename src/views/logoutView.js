import { logout } from "../../services/authService.js";

export async function logoutPage(context) {
    await logout()
    context.page.redirect('/login');
}