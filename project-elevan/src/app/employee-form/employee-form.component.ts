import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControlOptions } from '@angular/forms';
import { rangeValidator, emailMatchValidator } from '../../my-validators'
@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
  employeeFormGroup: FormGroup;
  empRecord: any = {
    firstName: 'Sujatha',
    lastName: 'Selvaraj',
    email: 'sujatha07@gmail.com',
    mobile: '9738975876'
  }
  constructor(private fb: FormBuilder) {
    this.employeeFormGroup = this.fb.group({
      firstName: [this.empRecord.firstName, [Validators.required, Validators.minLength(3)]],
      lastName: [this.empRecord.lastName],
      emailGroup: this.fb.group({
        email: [this.empRecord.email, [Validators.required, Validators.email]],
        confirmEmail: ['', [Validators.required, Validators.email]],
      }, { validators: emailMatchValidator }),
      mobile: [this.empRecord.mobile],
      sendNotiication: ['email'],
      range: ['', [rangeValidator(10, 20)]]
    });
  }

  ngOnInit(): void { }
  get firstName() { return this.employeeFormGroup.get('firstName')!; } // ! is non-null assertion (post-fix expression) 
  // - it just saying to type checker tht you 're sure that a is not null or undefined.
  // the operation a! produces a value of the type of 'a' with null and undefined excluded
  get range() { return this.employeeFormGroup.get('range')!; } // ! is non-null assertion (post-fix expression) 
  // - it just saying to type checker tht you 're sure that a is not null or undefined. 
  // the operation a! produces a value of the type of 'a' with null and undefined excluded
  // if 'a' is a type of String then 'a!' ensure that it will return a string value, and not null or UNDEFINED
  get email() { return this.employeeFormGroup.get('email')!; }
  get emailGroup() { return this.employeeFormGroup.get('emailGroup')!; }
  get mobile() { return this.employeeFormGroup.get('mobile')!; }
  loadEmployee() {
    let data = {
      firstName: 'Ajitha',
      lastName: 'Selvaraj'
    }
    this.employeeFormGroup.patchValue(data);
  }
  donotification(msgtype: any) {
    if (msgtype === 'sms') {
      let mobileControl = this.employeeFormGroup.get('mobile');
      mobileControl?.setValidators([Validators.required, rangeValidator(8000000000, 9999999999)]);
      mobileControl?.updateValueAndValidity();

    }
  }
}

