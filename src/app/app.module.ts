import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';

import { PipesComponent } from './pipes/pipes.component';
import { EmployeePipe } from './employee.pipe';
import { ObsComponent } from './obs/obs.component';
import { InteracttoBEComponent } from './interactto-be/interactto-be.component';
import{HttpClientModule} from '@angular/common/http';
import { PaarentComponent } from './paarent/paarent.component';
import { ChhildComponent } from './chhild/chhild.component';
import { ReactformComponent } from './reactform/reactform.component';
import { LoginComponent } from './login/login.component'
@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenComponent,
    ReactiveformComponent,
    
    PipesComponent,
    EmployeePipe,
    ObsComponent,
    InteracttoBEComponent,
    PaarentComponent,
    ChhildComponent,
    ReactformComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
