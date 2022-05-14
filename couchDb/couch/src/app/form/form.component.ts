import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FormupdateService } from '../formupdate.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],

})
export class FormComponent implements OnInit {

  constructor(public detailsvc: FormupdateService) { }
  ngOnInit(): void {
    // throw new Error('Method not implemented')
    console.log("It's Working")
    // console.log("details" + this.books.fname)
  }
  // onbuy(book: any) {
  //   console.log('Book added to the Cart.......' + book.name)
  // }
  couchform = new FormGroup({
    fname: new FormControl('', [Validators.required, Validators.minLength(3)]),
    lname: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });
  updateform = new FormGroup({
    fname: new FormControl('', [Validators.required, Validators.minLength(3)]),
    lname: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });
  idForm = new FormGroup({
    idValue: new FormControl(),
    rev: new FormControl()
  });

  get f() {
    return this.couchform.controls;
  }
  get g() {
    return this.updateform.controls;
  }
  submit() {
    // console.log(this.couchform.value);

    // ****************************************** */
    // Add all details in a db

    // this.detailsvc.postDetails(this.couchform.value, "fresher-sample").subscribe((data) => {
    //   console.log(data)
    //   console.log("Success");
    // });

    // ****************************************** */
    // Display all documents in db 

    this.detailsvc.getAllDetails(this.couchform.value, "fresher-sample").subscribe((datas) => {
      console.log(datas);
    });

    //******************** */
    //// Display all documents with this id
    // this.detailsvc.getDetailByID(this.couchform.value, "fresher-sample", 'b483c7e423b01b6d755d4d957f2c7df1').subscribe((datas) => {
    //   console.log(datas);
    // });

  }
  update() {
    this.detailsvc.updateData(this.updateform.value, "fresher-sample", this.idForm.value.idValue, this.idForm.value.rev).subscribe((datas) => {
      console.log(datas);
    });
  }
  idRev() {
    console.log(this.idForm.value);
  }
}
