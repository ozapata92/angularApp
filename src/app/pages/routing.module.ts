import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { IndexComponent } from './index/index.component';
import { RootComponent } from './root/root.component';
import { AuthMidleware } from './midleware/auth';

const routes:Routes = [
  {path: 'login' , component: LoginComponent},
  {path: '' , component: RootComponent , canActivate:[AuthMidleware], children: 
    [
      {path: 'index' , canActivate:[AuthMidleware], component: IndexComponent},
      {path: '**', redirectTo: 'index', pathMatch: 'full'}
    ]
  },
  {path: '**', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RoutingModule { }
