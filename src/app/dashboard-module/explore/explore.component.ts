import { BookService } from './../../Services/book-service.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MatDialog } from '@angular/material/dialog';
import { pop } from '../profile/publish-post.animation';
import { faX } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css'],
  animations:[pop]

})
export class ExploreComponent implements OnInit {
myBooks!:any[];
pop = false;
url = environment.baseUrl;
exit = faX;
pathSrc="";
  constructor(private route:ActivatedRoute,private dialog:MatDialog,private bookService:BookService) { }
@ViewChild('book')dialogRef!:MatDialog;
  ngOnInit(): void {
    this.route.data.subscribe(data=>{
      this.myBooks  = data['resolve'] as [];
      console.log(this.myBooks);
     })
  }
 onDisplayBook(book:any){
  //var component = new dialog
 // var book = this.dialog.open();
 console.log(book);
 this.pathSrc =  this.bookService.GetBookFile(book.id)

 }

}
