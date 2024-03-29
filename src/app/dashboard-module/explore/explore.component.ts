import { BookService } from './../../Services/book-service.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MatDialog } from '@angular/material/dialog';
import { pop } from '../profile/publish-post.animation';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { MatPaginator } from '@angular/material/paginator';
import { BookDisplayComponent } from 'src/app/shared/book-display/book-display.component';

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
booksCount = 0;
selected="option1";
  constructor(private route:ActivatedRoute,private dialog:MatDialog,private bookService:BookService) { }
   ngOnInit(): void {
    this.route.data.subscribe(data=>{
      console.log(data)
      this.myBooks  = data['resolve'].books as [];
      this.booksCount  = data['resolve'].booksCount as number;
       console.log(this.myBooks);
     })
  }
 onDisplayBook(book:any){
  //var component = new dialog
  this.pathSrc =  this.bookService.GetBookFile(book.id)
 var dialog = this.dialog.open(BookDisplayComponent,{data:this.pathSrc,panelClass: 'fullscreen-dialog', height: '100%',
 width: '100%',});
dialog.afterClosed().subscribe(data=>{
  console.log({data});
})
 console.log(this.pathSrc );

 }
  async nextPage(event:any){
    console.log(event.pageIndex);
  this.myBooks  =  await this.bookService.getAllBooks(event.pageIndex) as unknown as [];
  console.log(this.myBooks)

}
}
