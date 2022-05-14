import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AgeFilterPipe } from '../age-filter.pipe';
import { DatabaseService } from '../db/database.service';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.sass']
})
export class Form2Component implements OnInit {
  maxDate: any;

  registerForm: FormGroup;
  submitted = false;
  title = "Passengers Details";
  tavels:any = {
    source: "", destination: "", travelname: "", duration: "", ticcount: ""
  }
  foramarray: any;
  seat_max: any;
  dob: any;
  constructor(private formBuilder: FormBuilder,public age_f: AgeFilterPipe, private router:Router,public db:DatabaseService, public route: ActivatedRoute) { }

  ngOnInit() {
    this.maxDate = new Date();
    this.tavels.source = this.route.snapshot.queryParamMap.get("source");
    this.tavels.ticcount = this.route.snapshot.queryParamMap.get("seat_no");
    this.tavels.destination = this.route.snapshot.queryParamMap.get("destination");
    this.tavels.travelname = this.route.snapshot.queryParamMap.get("travelname");
    this.tavels.duration = this.route.snapshot.queryParamMap.get("duration");
   
    this.foramarray = [];
    this.seat_max = this.tavels.ticcount.split(",");

    while (this.foramarray.length < this.seat_max.length) {
      this.foramarray.push(this.formBuilder.group({
        name: ['', Validators.required],
        dob: ['', Validators.required],
        age: ['', Validators.required],
        gender: ['', [Validators.required]],
        seat: ['', Validators.required],

      }));

    }


  }
  onSubmit() {
    this.submitted = true;
    for(let i = 0; i < this.foramarray.length; i++){
      if (this.foramarray[i].invalid) {
        return; 
      }
    }
    let send_data = [];
    for(let i = 0; i < this.foramarray.length; i++){
      console.log(this.foramarray[i].value,"send data")
      send_data.push(this.foramarray[i].value);
    }
    this.db.booktic(send_data);
      console.log(send_data,"send data ff")
      this.router.navigateByUrl('/');
 
  }
 
   
  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

}
