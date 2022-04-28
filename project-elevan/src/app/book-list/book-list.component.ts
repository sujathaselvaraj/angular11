import { Component, OnInit } from '@angular/core';
import { BooksdaoService } from '../booksdao.service'
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  title = 'Financial Books';
  currentTab = 1;
  books: Array<any> = [
    // {
    //   name: 'The Three Zero',
    //   price: 270,
    //   author: 'Muhammed Yunus',
    //   canBuy: true,
    //   images: [
    //     { thumb: 'images/WorldofThreeZeros.png', full: '' }
    //   ],
    //   description: 'A winner of the Nobel Peace Prize offers his vision of an emerging new economic system that can save humankind and the planet Muhammad Yunus, who created microcredit, invented social business and earned ..',
    //   publishedate: Date.now(),
    //   discount: 0.1
    // },
    // {
    //   name: 'Zero To One',
    //   price: 320,
    //   author: 'Peter Thiel',
    //   canBuy: false,
    //   images: [
    //     { thumb: 'images/ZeroToOne.png', full: '' }
    //   ],
    //   description: 'Zero to One: Notes on Startups, or How to Build the Future is a 2014 book by venture capitalist, PayPal co-founder, and early Facebook investor Peter Thiel along with Blake Masters',
    //   publishedate: Date.now(),
    //   discount: 0.2
    // }
  ]
  constructor(private booksvc: BooksdaoService) { }

  ngOnInit(): void {
    this.books = this.booksvc.getBooks();
  }
  onbuy(book: any) {
    console.log('Book added to the Cart.......' + book.name)
  }
  isTabSelected(tabIndex: number) {
    return this.currentTab === tabIndex;
  }
  onTabChange(event: any, tabIndex: number) {
    event.preventDefault(); // to stop Flicker
    this.currentTab = tabIndex;
    console.log('Tab Selected: ' + this.currentTab)
  }
}
