import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MainComponentComponent } from './main-component/main-component.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationService } from './security/authentication.service';
import { CanActivateAuthGuard } from './security/can-activate-auth.guard';
import { JwtUtilsService } from './security/jwt-utils.service';
import { TokenInterceptorService } from './security/token-interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { EditComponent } from './edit/edit.component';
import { FilmoviComponent } from './filmovi/filmovi.component';
import { DodajComponent } from './dodaj/dodaj.component';
import { CanActivateAdminService } from './security/can-activate-admin.service';

const routes: Routes = [
  {path: 'filmovi/:id', component: FilmoviComponent},
  {path: 'main', component: MainComponentComponent},
  {path: 'edit', component: EditComponent, canActivate: [CanActivateAdminService]},
  {path: 'dodaj', component: DodajComponent, canActivate: [CanActivateAdminService]},
  {path: 'dodaj/:id', component: DodajComponent, canActivate: [CanActivateAdminService]},
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: 'main', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    MainComponentComponent,
    LoginComponent,
    EditComponent,
    FilmoviComponent,
    DodajComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      routes,
      { enableTracing: true }
    )
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
    AuthenticationService,
    CanActivateAuthGuard,
    JwtUtilsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
