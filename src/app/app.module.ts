import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FooterAddressComponent } from './footer-address/footer-address.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { FooterContactComponent } from './footer-contact/footer-contact.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ParallaxDirective } from './parallax.directive';
import { PreviewComponent } from './preview/preview.component';
import { StoreComponent } from './store/store.component';
import { ContactComponent } from './contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactService } from './contact/contact.service';
import { LogitechComponent } from './logitech/logitech.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    FooterAddressComponent,
    SocialMediaComponent,
    FooterContactComponent,
    ParallaxDirective,
    PreviewComponent,
    StoreComponent,
    ContactComponent,
    LogitechComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CarouselModule.forRoot(),
    CollapseModule.forRoot()
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
