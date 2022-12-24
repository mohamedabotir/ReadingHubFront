import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { pop } from 'src/app/dashboard-module/profile/publish-post.animation';

@Component({
  selector: 'app-book-display',
  templateUrl: './book-display.component.html',
  styleUrls: ['./book-display.component.css'],
  animations:[pop]

})
export class BookDisplayComponent {
  exit = faX;
  pop = true;
  pathSrc = "";
/**
 *
 */
constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
this.pathSrc = data;
console.log(this.pathSrc);
}


}
