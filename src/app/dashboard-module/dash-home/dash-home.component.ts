import { environment } from './../../../environments/environment';
import { UserService } from './../../Services/user-service.service';
import { Component, OnInit } from '@angular/core';
import { faBookOpen, faExplosion, faSearch, faArrowRight, faBookReader, faBookOpenReader, faAward, faPager, faBarsProgress } from '@fortawesome/free-solid-svg-icons';
import { IAuthor } from 'src/app/shared/author';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

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
  constructor(private route:ActivatedRoute) { }
   authors!:IAuthor[];
   url = environment.baseUrl
  ngOnInit(): void {
    this.getPopularAuthor();
  }
 getPopularAuthor(){

    this.route.data.subscribe((d):any=>{
      this.authors = d['resolve'];

      console.log(this.authors);
    })

 }
}
