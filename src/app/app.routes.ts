import { Routes } from '@angular/router';
import { HomePageComponent } from './features/home-page/home-page/home-page.component';
import { LandingTestComponent } from './features/landing-test/landing-test/landing-test.component';

export const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'landing-test', component: LandingTestComponent },
];
