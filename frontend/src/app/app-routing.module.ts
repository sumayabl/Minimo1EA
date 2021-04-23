import { AdminComponent } from './admin/admin.component';
import { VacunasComponent } from './vacunas/vacunas.component';
import { VacunaFormComponent } from './vacuna-form/vacuna-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateFormComponent } from './update-form/update-form.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/admin' },
  { path: 'admin', component: AdminComponent},
  { path: 'vacunas', component: VacunasComponent},
  //{ path: 'vacunas/add/:subjectName', component: VacunaFormComponent},
  { path: 'newVacuna', component: VacunaFormComponent},
  { path: 'update/:id', component: UpdateFormComponent},
  //{ path: 'newStudent/:subjectName', component: VacunasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
