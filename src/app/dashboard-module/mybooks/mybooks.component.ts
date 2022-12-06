import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';
import { BookService } from './../../Services/book-service.service';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { pop } from '../profile/publish-post.animation';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-mybooks',
  templateUrl: './mybooks.component.html',
  styleUrls: ['./mybooks.component.css'],
  animations:[pop]
})
export class MybooksComponent implements OnInit {
   formData = new FormData();
  constructor(private fb:UntypedFormBuilder,private bookService:BookService,private route:ActivatedRoute) { }
  publishBookForm = this.fb.group({
    BookName:['',[Validators.required]],
    Description:['',[Validators.required]],
    PageNumbers:[,Validators.required],
    Id:[]
  });
 plus =  faPlus;
 exit = faX;
 pop = false;
 edit = faEdit;
 url = environment.baseUrl;
  ngOnInit(): void {
   this.route.data.subscribe(data=>{
    this.myBooks  = data['resolve'] as [];
    console.log(this.myBooks);
   })
  }
  myBooks:any[]=[]
  isEdit = false;
  publish(){
    if(this.publishBookForm.valid){
      this.formData.append('bookName',this.publishBookForm.value.BookName);
      this.formData.append('description',this.publishBookForm.value.Description);
      this.formData.append('pageNumbers',this.publishBookForm.value.PageNumbers);
      if(!this.isEdit){
        this.bookService.publishBook(this.formData).subscribe(data=>{

        })
      }else{
        this.formData.append('id',this.publishBookForm.value.Id);

         this.bookService.editBook(this.formData)
         .subscribe(()=>{

         });
      }
      this.resetForm();
    }
   }
   resetForm(){
    this.formData = new FormData();
    this.publishBookForm.reset();
   }
  uploadFile(file:any){
   this.formData.append('bookFile',<File>file[0]);
   }

  uploadPicture(file:any){
    this.formData.append('photo',<File>file[0]);
   }
   FillFormForEdit(index:number){
     var book = this.myBooks[index];
     this.publishBookForm.patchValue({
      BookName:book.bookName,
      Description:book.description,
      PageNumbers:book.pageNumbers,
      Id:book.id
     });
     console.log(this.publishBookForm.value)
   }
}
