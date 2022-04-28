import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookCatlogComponent } from './book-catlog.component';

describe('BookCatlogComponent', () => {
  let component: BookCatlogComponent;
  let fixture: ComponentFixture<BookCatlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookCatlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookCatlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
