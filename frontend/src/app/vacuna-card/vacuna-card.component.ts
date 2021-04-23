import { Router, ActivatedRoute } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { Vacuna } from '../model/vacuna';
import { VacunaService } from '../services/vacuna.service';

@Component({
  selector: 'app-vacuna-card',
  templateUrl: './vacuna-card.component.html',
  styleUrls: ['./vacuna-card.component.css']
})
export class VacunaCardComponent implements OnInit {

  @Input()
  vacuna: Vacuna;

  @Input()
  index: number;

  constructor(public vacunaService: VacunaService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    
  }

  /*addVacunas(){
    this.vacunaService.getVacunas().subscribe => {
      this.router.navigateByUrl('/vacunas/all');
    });
  }*/

  updateVacuna(_id: string) {

    localStorage.setItem("data", JSON.stringify(_id));

    this.vacunaService.updateVacuna(_id, this.vacuna).subscribe ((res: Response) => {
      this.router.navigateByUrl('/update/' + _id)
    });
  }

}
