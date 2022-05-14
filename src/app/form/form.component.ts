import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DatabaseService } from '../db/database.service';
import { ReferenceService } from '../reference.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements OnInit {
  registerForm: FormGroup;

  submitted = false;
  title: string;
  guest = ['AB1', "AB2", "AB3", "AB4", "AC5"];
  returndata: any = [];
  select = new FormControl();
  radio = new FormControl();
  lastselt_indx: any;
  bus = {
    "type": "bus",
    "source": "",
    "destination": "",
    "travelname": "",
    "duration": "",
    "price": "",
  }
  constructor(public formBuilder: FormBuilder, public db: DatabaseService, public ref: ReferenceService, private router: Router) { }

  ngOnInit() {
    console.log("ngOnInit");
    // this.db.creatindex();
    // this.db.putdata(this.ref.travels1);

    this.getbus();

    this.title = "Travels Details";
    // this.registerForm = this.formBuilder.group({
    //   source: ['', Validators.required],
    //   destination: ['', Validators.required],
    //   date: ['', Validators.required]
    // });
    this.registerForm = this.formBuilder.group({
      source: ['', Validators.required],
      destination: ['', Validators.required],
      duration: ['', Validators.required],
      travelname: ['', Validators.required],
      price: ['', Validators.required],
    });

  }
  getbus() {
    let data = this.db.busdata();

    data.then((result) => {
      console.log(result, "result");

      this.returndata = result.docs;

      console.log(this.returndata, "this.returndata");

    })
  }
  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    let resp =  this.db.putonedata(this.bus);
    resp.then(()=>{
      this.registerForm.reset();
    this.submitted = false;
    this.getbus();
  })
    console.log(this.bus)
    // this.returndata = this.ref.travels.filter(active => active.source === this.registerForm.value.source && active.destination === this.registerForm.value.destination);

  }

  booktic() {
    console.log("000");
    if (this.returndata) {
      if (this.returndata[this.lastselt_indx].count.length > 0) {
        this.returndata[this.lastselt_indx].seat_no = this.returndata[this.lastselt_indx].count.join();
        let option = {
          queryParams: this.returndata[this.lastselt_indx],
          skipLocationChange: true
        };

        this.router.navigate(['/form2'], option);
      }
    }
  }
  editbus(i) {
    let senddata;
    senddata = this.returndata[i].data
    senddata.id = this.returndata[i]._id
    senddata.rev = this.returndata[i]._rev
    let option = {
      queryParams: senddata,
      skipLocationChange: true
    };

    this.router.navigate(['/editbus'], option);
  }
  radioChange(cur_indx) {
    this.lastselt_indx = cur_indx;
    for (let i = 0; i < this.returndata.length; i++) {
      console.log("$cur_indx", cur_indx, 'fori', i);
      if (cur_indx == i) {
        this.returndata[i].select = true;
        console.log(i, true, this.returndata[i].select);
      } else {
        this.returndata[i].select = false;
        console.log(i, false, this.returndata[i].select);
      }
    }
  }
  deletebus(i) {
   let resp =  this.db.delete(this.returndata[i]._id, this.returndata[i]._rev);
   resp.then(()=>{
    this.getbus();

   })
  }
}
