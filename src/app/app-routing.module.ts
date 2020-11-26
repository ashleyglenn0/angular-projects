import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'four-card-feature',
    loadChildren: () => import('./projects/four-card-feature/four-card-feature.module').then(m => m.FourCardFeatureModule)
  },
  {
    path: 'huddle-single',
    loadChildren: () => import('./projects/huddle-single/huddle-single.module').then(m => m.HuddleSingleModule)
  },
  {
    path: 'profile-card',
    loadChildren: () => import('./projects/profile-card/profile-card.module').then(m => m.ProfileCardModule)
  },
  {
    path: 'single-price-grid',
    loadChildren: () => import('./projects/single-price-grid/single-price-grid.module').then(m => m.SinglePriceGridModule)
  },
  {
    path: 'social-proof',
    loadChildren: () => import('./projects/social-proof/social-proof.module').then(m => m.SocialProofModule)
  },
  {
    path: 'testimonials-grid',
    loadChildren: () => import('./projects/testimonials-grid/testimonials-grid.module').then(m => m.TestimonialsGridModule)
  },
  {
    path: 'fylo-data-storage',
    loadChildren: () => import('./projects/fylo-data-storage/fylo-data-storage.module').then(m => m.FyloDataStorageModule)
  },
  {
    path: 'clipboard-landing',
    loadChildren: () => import('./projects/clipboard-landing/clipboard-landing.module').then(m => m.ClipboardLandingModule)
  },
  {
    path: 'huddle-alternate-feature',
    loadChildren: () =>
      import('./projects/huddle-alternate-feature/huddle-alternate-feature.module')
        .then(m => m.HuddleAlternateFeatureModule)
  },
  {
    path: 'fylo-dark',
    loadChildren: () => import('./projects/fylo-dark/fylo-dark.module').then(m => m.FyloDarkModule)
  },
  {
    path: 'fylo-two-column',
    loadChildren: () => import('./projects/fylo-two-column/fylo-two-column.module').then(m => m.FyloTwoColumnModule)
  },
  {
    path: 'huddle-curved',
    loadChildren: () => import('./projects/huddle-curved/huddle-curved.module').then(m => m.HuddleCurvedModule)
  },
  {
    path: 'chat-app-css',
    loadChildren: () => import('./projects/chat-app-css/chat-app-css.module').then(m => m.ChatAppCssModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
