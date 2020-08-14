import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppMainPage } from './pages/static/main/app-main';
import { MenuComponent } from './components/menu/menu-component'
import { FooterComponent } from './components/footer/footer-component'
import { СarouselComponent } from './components/carousel/carousel-component'

@NgModule({
  declarations: [
    AppMainPage,
    MenuComponent,
    FooterComponent,
    СarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppMainPage]
})
export class AppModule { }
