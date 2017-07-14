import {Routes, RouterModule} from "@angular/router";
import {LunchComponent} from "./content/lunch/lunch.component";
import {DinnerComponent} from "./content/dinner/dinner.component";
import {DrinksComponent} from "./content/drinks/drinks.component";


export const MENU_ROUTES : Routes = [
    {path: 'lunch', component: LunchComponent},
    {path: 'dinner', component: DinnerComponent},
    {path: 'drinks', component: DrinksComponent},

]

