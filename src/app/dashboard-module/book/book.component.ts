import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {

constructor(private route:ActivatedRoute) {
console.log(route.snapshot.params);
}
}
