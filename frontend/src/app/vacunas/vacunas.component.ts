import { ActivatedRoute } from '@angular/router';
import { VacunaService } from '../services/vacuna.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Vacuna } from '../model/vacuna';

@Component({
  selector: 'app-vacunas',
  templateUrl: './vacunas.component.html',
  styleUrls: ['./vacunas.component.css']
})
export class VacunasComponent implements OnInit {

  vacunas: Vacuna[];

  constructor(public vacunasService: VacunaService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.vacunasService.getVacunas().subscribe (vacunas => {
      this.vacunas = vacunas;
    });
  }

  newVacuna() {
    this.router.navigateByUrl('/newVacuna');
  }

  admin(){
    this.router.navigateByUrl('/admin');
  }
}
