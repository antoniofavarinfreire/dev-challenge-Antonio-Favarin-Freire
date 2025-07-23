import { Routes } from '@angular/router';
import { Home } from './componentes/home/home';


export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full', },
    { path: 'home', component: Home}
];
