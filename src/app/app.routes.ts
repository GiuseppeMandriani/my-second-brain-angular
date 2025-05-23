import { Routes } from '@angular/router';
import { authGuard } from './core/auth/auth.guard';

export const routes: Routes = [
    // { path: '', component: HomePageComponent },
    // { path: 'landing-test', component: LandingTestComponent },

    // { path: 'homepage', loadComponent: () => import('./features/home-page/home-page/home-page.component').then(c => c.HomePageComponent) },
    // { path: 'landing-test', loadComponent: () => import('./features//landing-test/landing-test/landing-test.component').then(c => c.LandingTestComponent) },   
    // { path: 'demo1', loadComponent: () => import('./features/demo1/demo1.component').then(c => c.Demo1Component) },    
    // { path: 'demo2', loadComponent: () => import('./features/demo2/demo2.component').then(c => c.Demo2Component) },

    // Se nella classe del componente faccio export defautl posso non inserire il then
    { path: 'homepage', loadComponent: () => import('./features/home-page/home-page/home-page.component') },
    { path: 'cart', loadComponent: () => import('./features/cart/cart.component') },
    { path: 'settings', loadComponent: () => import('./features/settings/settings.component') },
    { 
        path: 'landing-test', 
        loadComponent: () => import('./features//landing-test/landing-test/landing-test.component'), 
        canActivate: [authGuard]
    },   
    { 
        path: 'uikit', loadComponent: () => import('./features/uikit/uikit.component'),
        children: [
            { path: 'accordion', loadComponent: () => import('./features/uikit/pages/accordion-demo/accordion-demo.component')},
            { path: 'alert', loadComponent: () => import('./features/uikit/pages/alert-demo/alert-demo.component')},
            { path: 'dropdown', loadComponent: () => import('./features/uikit/pages/dropdown-demo/dropdown-demo.component')},
            { path: 'phone', loadComponent: () => import('./features/uikit/pages/phone-demo/phone-demo.component')},
            { path: 'timeline', loadComponent: () => import('./features/uikit/pages/timeline-demo/timeline-demo.component')},
            { path: 'variant-icon', loadComponent: () => import('./features/uikit/pages/variant-icon-demo/variant-icon-demo.component')},
            { path: '', redirectTo: 'accordion', pathMatch: 'full'}
          ] 
    
    },
    { 
        path: 'example', loadComponent: () => import('./features/example/example.component'),
        children: [
            { path: 'demo-1', loadComponent: () => import('./features/example/pages/demo-1/demo-1.component'), data: { title: 'Hello Demo 1'}},
            { path: 'demo-2', loadComponent: () => import('./features/example/pages/demo-2/demo-2.component'), data: { title: 'Hello Demo 2'}},
            { path: 'demo-3', loadComponent: () => import('./features/example/pages/demo-3/demo-3.component'), data: { title: 'Hello Demo 3'}},
            { path: '', redirectTo: 'demo-1', pathMatch: 'full'}
          ] 
    
    },
    { path: '', redirectTo: 'homepage', pathMatch: 'full'}
];
