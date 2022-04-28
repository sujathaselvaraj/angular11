import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoxaComponent } from './boxa/boxa.component';
import { CountDisplayComponent } from './count-display/count-display.component';
import { CounterAppComponent } from './counter-app/counter-app.component';
import { HitButtonComponent } from './hit-button/hit-button.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { BookComponent } from './book/book.component';
import { PriceDiscountPipe } from './price-discount.pipe';
import { BookCatlogComponent } from './book-catlog/book-catlog.component';
import { BooksdaoService } from './booksdao.service';
import { BookListComponent } from './book-list/book-list.component';
import { BookformComponent } from './bookform/bookform.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { TabComponent } from './tab/tab.component';
import { MenuComponent } from './menu/menu.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component'
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'news', component: NewsComponent },
  { path: 'books', component: BookCatlogComponent },
  { path: 'addBook', component: BookformComponent }

]

@NgModule({
  declarations: [
    AppComponent,
    BoxaComponent,
    CountDisplayComponent,
    CounterAppComponent,
    HitButtonComponent,
    CustomerFormComponent,
    BookComponent,
    PriceDiscountPipe,
    BookCatlogComponent,
    BookListComponent,
    BookformComponent,
    HomeComponent,
    NewsComponent,
    TabComponent,
    MenuComponent,
    EmployeeFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent, NewsComponent, BookformComponent, BookComponent, BookCatlogComponent]
})
export class AppModule { }
