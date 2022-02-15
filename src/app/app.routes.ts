import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AmigoPageComponent } from './components/amigo-page/amigo-page.component';
import { AboutComponent } from './components/about/about.component';
import { FormationComponent } from './components/formation/formation.component';
import { MemoryLaneComponent } from './components/memory-lane/memory-lane.component';
const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'amigo/:id', component: AmigoPageComponent },
  { path: 'about', component: AboutComponent },
  { path: 'formation', component: FormationComponent },
  { path: 'memory-lane', component: MemoryLaneComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
