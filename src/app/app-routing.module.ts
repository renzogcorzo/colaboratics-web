import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StoreComponent } from './store/store.component';
import { ContactComponent } from './contact/contact.component';
import { LogitechComponent } from './logitech/logitech.component';

const routes: Routes = [
  { path: 'store', component: StoreComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'logitech', component: LogitechComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', component: HomeComponent }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
