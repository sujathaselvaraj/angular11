import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @Input()
  book: any;
  constructor() { }

  ngOnInit(): void {
  }
  onbuy(event: any, item: any) {
    console.log('Book added to the cart.........' + this.book.name + ' ' + this.book.price);
  }
}
