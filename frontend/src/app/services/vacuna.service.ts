import { Vacuna } from '../model/vacuna';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VacunaService {

  constructor(private http: HttpClient) { }

  getVacunas(){
    return this.http.get<Vacuna[]>(environment.apiURL+'/vacuna/all')
  }

  newVacuna(newVacuna: Vacuna){
    return this.http.post(environment.apiURL + '/vacuna/new', newVacuna);
  }

  //Llamada API: Update student
  updateVacuna(_id: string, updateVacuna: Vacuna){
    return this.http.put(environment.apiURL + '/vacuna/update/' + _id, updateVacuna);
  }
}
