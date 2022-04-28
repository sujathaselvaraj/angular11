import { Component, OnInit } from '@angular/core';
import { BooksdaoService } from '../booksdao.service'


@Component({
  selector: 'app-book-catlog',
  templateUrl: './book-catlog.component.html',
  styleUrls: ['./book-catlog.component.css']
})
export class BookCatlogComponent implements OnInit {
  books: Array<any> = [];

  constructor(private booksvc: BooksdaoService) { }

  ngOnInit(): void {
    this.books = this.booksvc.getBooks();
  }
}

