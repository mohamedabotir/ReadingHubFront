import { Component, OnInit } from '@angular/core';
import { faBookmark, faBookOpen, faContactBook, faDollar, faMemory, faPodcast, faShareNodes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

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
  ngOnInit(): void {

  }
}
