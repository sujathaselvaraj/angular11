import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksdaoService {
  bookList = [
    {
      name: 'The Three Zero',
      price: 270,
      author: 'Muhammed Yunus',
      canBuy: true,
      images: [
        { thumb: 'images/WorldofThreeZeros.png', full: '' }
      ],
      description: 'A winner of the Nobel Peace Prize offers his vision of an emerging new economic system that can save humankind and the planet Muhammad Yunus, who created microcredit, invented social business and earned ..',
      publishedate: Date.now(),
      discount: 0.1
    },
    {
      name: 'Zero To One',
      price: 320,
      author: 'Peter Thiel',
      canBuy: false,
      images: [
        { thumb: 'images/ZeroToOne.png', full: '' }
      ],
      description: 'Zero to One: Notes on Startups, or How to Build the Future is a 2014 book by venture capitalist, PayPal co-founder, and early Facebook investor Peter Thiel along with Blake Masters',
      publishedate: Date.now(),
      discount: 0.2
    }]
  constructor() { }
  getBooks() {
    return this.bookList;
  }
  addBook(book: any) {
    console.log('New book added ' + book.name + ' ' + book.author)
    console.log('Total Number of books' + this.bookList.length)
    this.bookList.push(book);
    console.log('Total Number of books' + this.bookList.length)
  }
  updateBook(book: any) {
    console.log('Book Modified ' + book.name + ' ' + book.author)

  }
}
