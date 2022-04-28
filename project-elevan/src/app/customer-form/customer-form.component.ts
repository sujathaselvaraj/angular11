
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


  form = new FormGroup({
    fname: new FormControl('', [Validators.required, Validators.minLength(3)]),
    lname: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    mobileno: new FormControl('', [Validators.required, Validators.maxLength(10)]),
    body: new FormControl('', [Validators.required, Validators.minLength(20)]),
  });

  get f() {
    return this.form.controls;
  }

  submit() {
    console.log(this.form.value);
  }
  // import { Component, OnInit } from '@angular/core';

  // @Component({
  //   selector: 'app-customer-form',
  //   templateUrl: './customer-form.component.html',
  //   styleUrls: ['./customer-form.component.css']
  // })
  // export class CustomerFormComponent implements OnInit {
  //   // data-model
  //   customerModel: any;
  //   constructor() {
  //     console.log("customer Form Loaded")
  //   }

  //   ngOnInit(): void {
  //     // this.customerModel = {
  //     //   firstName: 'Steve',
  //     //   lastName: 'Jobs',
  //     //   email: 'steve.Jobs@goodplace.com'
  //     // }
  //     this.customerModel = {
  //       firstName: '',
  //       lastName: '',
  //       email: 'steve.Jobs@goodplace.com'
  //     }
  //   }
  //   saveCustomer(customerFormGroup: any) {
  //     if (customerFormGroup.valid) {
  //       console.log(customerFormGroup.value);
  //     }
  //   }
  // }
}

