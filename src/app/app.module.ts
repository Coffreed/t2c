import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { LoginComponent } from './login/login.component';
import { JqxDogsGridComponent } from './jqx-dogs-grid/jqx-dogs-grid.component';
import { GetStartedPageComponent } from './get-started-page/get-started-page.component';
import { AsyncPipeDemoComponent } from './async-pipe-demo/async-pipe-demo.component';
import { GoodBoysComponent } from './good-boys/good-boys.component';

const appRoute: Routes = [
  {path: '', redirectTo: 'LogIn', pathMatch:'full'},
  {path: 'GetStarted', component: GetStartedPageComponent},
  {path: 'DogBreeds', component: JqxDogsGridComponent},
  {path: 'LogIn', component: LoginComponent},
  {path: 'AsyncPipeDemo', component: AsyncPipeDemoComponent},
  {path: '**', redirectTo: 'LogIn'},
]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    JqxDogsGridComponent,
    GetStartedPageComponent,
    AsyncPipeDemoComponent,
    GoodBoysComponent
  ],
  imports: [
    RouterModule.forRoot(appRoute),
    BrowserModule,
    AppRoutingModule,
    jqxGridModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ AppComponent ]
})
export class AppModule { }
