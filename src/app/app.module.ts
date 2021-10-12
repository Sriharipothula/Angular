import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { ReportsComponent } from './reports/reports.component';
import { TdfComponent } from './tdf/tdf.component';
import { FormsModule} from '@angular/forms';
import{ HttpClientModule}from '@angular/common/http';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ChangeColorDirective } from './change-color.directive';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ReportsComponent,
    TdfComponent,
    ReactiveFormsComponent,
    ChangeColorDirective,
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
