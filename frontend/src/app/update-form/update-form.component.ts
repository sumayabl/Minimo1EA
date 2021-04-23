import { VacunaService } from '../services/vacuna.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Vacuna } from '../model/vacuna';

@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.css']
})
export class UpdateFormComponent implements OnInit {

  updateForm: FormGroup;
  isSubmitted = false;
  _id;

  constructor(public vacunaService: VacunaService, private router: Router, 
              private formBuilder: FormBuilder, private route: ActivatedRoute){ }

  ngOnInit(): void {

    this._id = this.route.snapshot.paramMap.get('_id');
    this.updateForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.nullValidator]],
      description: ['', [Validators.required, Validators.nullValidator]],
      technology: ['', [Validators.required, Validators.nullValidator]],
      date: ['', [Validators.required, Validators.nullValidator]]
    });
  }
  get formControls(){
    return this.updateForm.controls;
  }

  submitUpdate(): void {

    var id = JSON.parse(localStorage.getItem("data"));
    
    this.isSubmitted = true;
    if(this.updateForm.invalid){
      return;
    }
    const name = this.updateForm.value.name;
    const description = this.updateForm.value.description;
    const technology = this.updateForm.value.technolgy;
    const date = this.updateForm.value.date;
    
    let vacuna = {'name': name, 'description': description, 'technology': technology, 'date': date};

    alert(id);

    this.vacunaService.updateVacuna(id, vacuna)
      .subscribe(() => { this.router.navigateByUrl('/vacunas');});
  }

}
