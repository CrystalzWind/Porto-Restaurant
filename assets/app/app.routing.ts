import {Routes, RouterModule} from "@angular/router";
import {HomePageComponent} from "./home-page/home-page.component";
import {AboutPageComponent} from "./about-page/about-page.component";
import {PressPageComponent} from "./press-page/press-page.component";
import {MenuPageComponent} from "./menu-page/menu-page.component";
import {ContactPageComponent} from "./contact-page/contact-page.component";
import {MENU_ROUTES} from "./menu-page/menu-routing";

const APP_ROUTES : Routes = [
    {path: '', component: HomePageComponent, pathMatch: 'full'},
    {path: 'home', redirectTo: ''},
    {path: 'menu', component: MenuPageComponent },
    {path: 'menu', component: MenuPageComponent, children: MENU_ROUTES},
    {path: 'about', component: AboutPageComponent},
    {path: 'press', component: PressPageComponent},
    {path: 'contact', component: ContactPageComponent}
]

export const routing = RouterModule.forRoot(APP_ROUTES);