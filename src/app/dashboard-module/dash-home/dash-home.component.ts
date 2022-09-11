import { UserService } from './../../Services/user-service.service';
import { Component, OnInit } from '@angular/core';
import { faBookOpen, faExplosion, faSearch, faArrowRight, faBookReader, faBookOpenReader, faAward, faPager, faBarsProgress } from '@fortawesome/free-solid-svg-icons';
import { IAuthor } from 'src/app/shared/author';

@Component({
  selector: 'app-dash-home',
  templateUrl: './dash-home.component.html',
  styleUrls: ['./dash-home.component.css']
})
export class DashHomeComponent implements OnInit {


  book = faBookOpen;
  explore = faExplosion;
  search = faSearch;
  arrow = faArrowRight;
  reader = faBookReader;
  deadBook = faBookOpenReader;
  author = faAward;
  page = faPager;
  progress = faBarsProgress;
  date = new Date();
  constructor(private userService:UserService) { }
   authors!:IAuthor[];
  ngOnInit(): void {
    this.getPopularAuthor();
  }
 getPopularAuthor(){
   this.userService.GetAuthors().subscribe(data=>{
    this.authors = data as [];
    console.log(this.authors);
   })
 }
}
