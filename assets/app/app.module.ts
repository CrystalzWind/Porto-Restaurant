import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuPageComponent } from './menu-page/menu-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { PressPageComponent } from './press-page/press-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import {routing} from "./app.routing";
import {FooterComponent} from "./footer/footer.component";
import {SectionHeadingComponent} from "./section-heading/section-heading.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {BannerComponent} from "./home-page/banner/banner.component";
import {ContentComponent} from "./home-page/content/content.component";
import {Section2Component} from "./home-page/content/section-2/section-2.component";
import {Section1ThumbComponent} from "./home-page/content/section-1/thumb.component";
import {Section1Component} from "./home-page/content/section-1/section-1.component";
import {Section3Component} from "./home-page/content/section-3/section-3.component";
import {Section4Component} from "./home-page/content/section-4/section-4.component";
import {PostItemComponent} from "./home-page/content/section-4/post-item/post-item.component";
import {MemberComponent} from "./home-page/content/section-4/member/member.component";
import {SpecialMenuComponent} from "./home-page/content/section-5/special-menu.component";
import {SpecialMenuItemComponent} from "./home-page/content/section-5/item/special-menu-item.component";
import {MenuPageContentComponent} from "./menu-page/content/content.component";
import {LunchComponent} from "./menu-page/content/lunch/lunch.component";
import {DinnerComponent} from "./menu-page/content/dinner/dinner.component";
import {DrinksComponent} from "./menu-page/content/drinks/drinks.component";



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,

    AboutPageComponent,
    PressPageComponent,
    ContactPageComponent,
    FooterComponent,
    SectionHeadingComponent,



    HomePageComponent,
    BannerComponent,
    ContentComponent,
    Section1Component, Section1ThumbComponent,
    Section2Component,
    Section3Component,
    Section4Component, PostItemComponent, MemberComponent,
    SpecialMenuComponent, SpecialMenuItemComponent,


    MenuPageComponent,
    MenuPageContentComponent,
    LunchComponent,
    DinnerComponent,
    DrinksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
