import { NgModule } from '@angular/core';
import { RoutingModule } from './routing.module';
import { RootModule } from './root/root.module';
import { LoginModule } from './login/login.module';
import { IndexModule } from './index/index.module';
import { AuthMidleware } from './midleware/auth';

@NgModule({
  imports: [
    RoutingModule
  ],
  exports: [
    RootModule,
    LoginModule,
    IndexModule
  ],
  declarations: [],
  providers: [
    AuthMidleware
  ]
})
export class PageModule { }
