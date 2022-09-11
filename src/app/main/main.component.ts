import { faDollar, faShareNodes, faPodcast, faBookmark, faBookOpen, faMemory, faContactBook } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
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
