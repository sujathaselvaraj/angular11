import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditbusComponent } from './editbus/editbus.component';
import { FormComponent } from './form/form.component';
import { Form2Component } from './form2/form2.component';

const routes: Routes = [
 {
   path:'',
   component:FormComponent
 },
 {
  path:'form2',
  component:Form2Component
}
,
 {
  path:'editbus',
  component:EditbusComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
