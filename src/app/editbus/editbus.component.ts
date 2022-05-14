import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DatabaseService } from '../db/database.service';
import { ReferenceService } from '../reference.service';

@Component({
  selector: 'app-editbus',
  templateUrl: './editbus.component.html',
  styleUrls: ['./editbus.component.sass']
})
export class EditbusComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  busid;
  bus = {
    "type": "bus",
    "source": "",
    "destination": "",
    "travelname": "",
    "duration": "",
    "price": "",
  }
  busrev: string;
  constructor(public formBuilder: FormBuilder, private router: Router, public ref: ReferenceService, public db: DatabaseService, public route: ActivatedRoute) { }

  ngOnInit() {
    this.bus.source = this.route.snapshot.queryParamMap.get("source");
    this.busid = this.route.snapshot.queryParamMap.get("id");
    this.busrev = this.route.snapshot.queryParamMap.get("rev");
    this.bus.destination = this.route.snapshot.queryParamMap.get("destination");
    this.bus.travelname = this.route.snapshot.queryParamMap.get("travelname");
    this.bus.duration = this.route.snapshot.queryParamMap.get("duration");
    this.bus.price = this.route.snapshot.queryParamMap.get("price");
    console.log(this.bus, "this.bus")
    this.registerForm = this.formBuilder.group({
      source: ['', Validators.required],
      destination: ['', Validators.required],
      duration: ['', Validators.required],
      travelname: ['', Validators.required],
      price: ['', Validators.required],
    });
  }
  onSubmit() {

    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    console.log(this.bus, "bus")
    let senddata = { _id: this.busid, _rev: this.busrev,  data: this.bus };
    let resp = this.db.update(senddata);
    resp.then(()=>{
      this.router.navigateByUrl('/');
    })

  }

}
