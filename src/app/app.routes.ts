import { Routes } from '@angular/router';
import { HomePageComponent } from './features/home-page/home-page/home-page.component';
import { LandingTestComponent } from './features/landing-test/landing-test/landing-test.component';
import { Demo1Component } from './features/demo1/demo1.component';
import { Demo2Component } from './features/demo2/demo2.component';

export const routes: Routes = [
    // { path: '', component: HomePageComponent },
    // { path: 'landing-test', component: LandingTestComponent },

    { path: 'homepage', component: HomePageComponent },
    { path: 'landing-test', component: LandingTestComponent },
    { path: 'demo1', component: Demo1Component },
    { path: 'demo2', component: Demo2Component },
    { path: '', redirectTo: 'homepage', pathMatch: 'full'}
];
