import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReferenceService } from './reference.service';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';

import {MatCardModule} from '@angular/material/card';
import { MatIconModule, MatRadioModule, MatSnackBarModule, MatTooltipModule } from '@angular/material';
import { Form2Component } from './form2/form2.component';
import {MatSelectModule} from '@angular/material/select';
import { AgeFilterPipe } from './age-filter.pipe';
import { DatabaseService } from './db/database.service';
import { HttpClientModule } from '@angular/common/http';
import { EditbusComponent } from './editbus/editbus.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    Form2Component,
    AgeFilterPipe,
    EditbusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatRadioModule,
    MatNativeDateModule,MatButtonModule,HttpClientModule,
    MatInputModule,    MatCardModule,MatSelectModule,
    BrowserAnimationsModule,MatSnackBarModule,MatTooltipModule,MatIconModule
  ],
  providers: [AgeFilterPipe,ReferenceService,DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
