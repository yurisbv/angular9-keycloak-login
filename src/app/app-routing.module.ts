import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      title: 'Unprotected Home'
    }
  },  
  {
    path: 'about',
    component: AboutComponent,
    canActivate: [AuthGuardService],
    data: {
      title: 'Protected Route',
      roles: ['teste']
    }   
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
