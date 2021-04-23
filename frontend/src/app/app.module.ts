import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VacunaCardComponent } from './vacuna-card/vacuna-card.component';

//formulario reactivo
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VacunaFormComponent } from './vacuna-form/vacuna-form.component';
import { VacunasComponent } from './vacunas/vacunas.component';
import { AdminComponent } from './admin/admin.component';
import { UpdateFormComponent } from './update-form/update-form.component';


@NgModule({
  declarations: [
    AppComponent,
    VacunaCardComponent,
    UpdateFormComponent,
    VacunaFormComponent,
    VacunasComponent,
    AdminComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
