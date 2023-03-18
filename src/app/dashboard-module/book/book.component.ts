import { environment } from './../../../environments/environment';
import { Book } from './../../shared/Book';
import { BookService } from './../../Services/book-service.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  book!: Book;
  ReaderbookStatus="none";
  url = environment.baseUrl;
constructor(private route:ActivatedRoute,private bookService:BookService) {
console.log(this.route.snapshot.params['id']);
}
  ngOnInit(): void {
    this.bookService.getBook(this.route.snapshot.params['id']).subscribe(data=>{
     this.book = data as unknown as Book;
      console.log(this.book);
    })
  }
}
