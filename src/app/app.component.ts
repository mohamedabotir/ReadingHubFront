 import { Component } from '@angular/core';
 import { faDollar } from '@fortawesome/free-solid-svg-icons';
 import { faShareNodes } from '@fortawesome/free-solid-svg-icons';
 import { faMemory } from '@fortawesome/free-solid-svg-icons';
 import { faPodcast } from '@fortawesome/free-solid-svg-icons';
 import { faBookmark } from '@fortawesome/free-solid-svg-icons';
 import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
 import { faContactCard } from '@fortawesome/free-solid-svg-icons';
import { faContactBook } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ReadingHubFront';
   doller:any;
   share:any;
   home:any;
   podcast:any;
   bookMark:any;
   book:any;
   contact:any;
  constructor() {
   this.doller = faDollar;
   this.share = faShareNodes;
   this.home = faMemory;
   this.podcast=faPodcast;
   this.bookMark = faBookmark;
   this.book = faBookOpen;
   this.contact = faContactBook;
  }


}
