import { Routes } from '@angular/router';

export const routes: Routes = [
    // { path: '', component: HomePageComponent },
    // { path: 'landing-test', component: LandingTestComponent },

    { path: 'homepage', loadComponent: () => import('./features/home-page/home-page/home-page.component').then(c => c.HomePageComponent) },
    { path: 'landing-test', loadComponent: () => import('./features//landing-test/landing-test/landing-test.component').then(c => c.LandingTestComponent) },   
    { path: 'demo1', loadComponent: () => import('./features/demo1/demo1.component').then(c => c.Demo1Component) },    
    { path: 'demo2', loadComponent: () => import('./features/demo2/demo2.component').then(c => c.Demo2Component) },
    { path: '', redirectTo: 'homepage', pathMatch: 'full'}
];
