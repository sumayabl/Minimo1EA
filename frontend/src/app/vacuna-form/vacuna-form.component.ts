import { VacunaService } from '../services/vacuna.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vacuna-form',
  templateUrl: './vacuna-form.component.html',
  styleUrls: ['./vacuna-form.component.css']
})
export class VacunaFormComponent implements OnInit {

  vacunaForm: FormGroup;
  isSubmitted = false;

  constructor(public vacunaService: VacunaService, private router: Router, 
              private formBuilder: FormBuilder, private route: ActivatedRoute){ }

  ngOnInit(): void {

    this.vacunaForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.nullValidator]],
      description: ['', [Validators.required, Validators.nullValidator]],
      technology: ['', [Validators.required, Validators.nullValidator]],
      date: ['', [Validators.required, Validators.nullValidator]]
    });
  }
  get formControls(){
    return this.vacunaForm.controls;
  }

  submitVacuna(): void {
    this.isSubmitted = true;
    if(this.vacunaForm.invalid){
      return;
    }
    const name = this.vacunaForm.value.name;
    const description = this.vacunaForm.value.description;
    const technology = this.vacunaForm.value.technolgy;
    const date = this.vacunaForm.value.date;
    
    let vacuna = {'name': name, 'description': description, 'technology': technology, 'date': date};

      this.vacunaService.newVacuna(vacuna)
      .subscribe(() => {
        this.router.navigateByUrl('/vacunas');
      });
    
  }
}
