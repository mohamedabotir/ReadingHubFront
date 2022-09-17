import { environment } from './../../../environments/environment';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { faUnlock } from '@fortawesome/free-solid-svg-icons';
import { faFeed } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { faExplosion } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faBookReader } from '@fortawesome/free-solid-svg-icons';
import { faBookOpenReader } from '@fortawesome/free-solid-svg-icons';
import { faAward } from '@fortawesome/free-solid-svg-icons';
import { faPager } from '@fortawesome/free-solid-svg-icons';
import { faBarsProgress } from '@fortawesome/free-solid-svg-icons';
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {
  Notifications=[
    {message:"cool",userId:''},
    {message:"Good",userId:''},
    {message:"Ready",userId:''},
  ];
  constructor(private route:ActivatedRoute) { }
  bookIcon = faBook;
  lock = faUnlock;
  feed= faFeed;
  favorite = faHeart;
  book = faBookOpen;
  explore = faExplosion;
  search = faSearch;
  arrow = faArrowRight;
  reader = faBookReader;
  deadBook = faBookOpenReader;
  author = faAward;
  page = faPager;
  progress = faBarsProgress;
  home = faHome;

  notification = faMoneyBill;
userProfile:any;
url = environment.baseUrl;
  ngOnInit(): void {
    this.route.data.subscribe(data=>{
      this.userProfile=data['resolve']
      console.log(this.userProfile);
    });
  }

}
