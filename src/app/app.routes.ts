import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ChatscreenComponent } from './chatscreen/chatscreen.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path:'', redirectTo: 'home', pathMatch: 'full'},
    {path:'chat', component:ChatscreenComponent},
    {path:'home',component:HomeComponent}
];
