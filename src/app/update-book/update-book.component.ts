import { Component, OnInit } from '@angular/core';
import { Books } from '../book';
import { BookService } from '../book.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {
  id!: number;
  books:Books = new Books();

  constructor(private bookservice: BookService,private route:ActivatedRoute,private router:Router){}
  ngOnInit(): void {

    this.id=this.route.snapshot.params['id'];

    this.bookservice.getBookByid(this.id).subscribe((data:Books)=>{
      this.books=data;
      },(error: any) => console.log(error));

  }

  onSubmit(){
    this.bookservice.updateBook(this.id,this.books).subscribe(data=>{
      console.log(this.books);
      this.router.navigate(['/books'])

      //this.goToStudentList();
      //this.router.navigate(['/student'])

    },
    erorr=>console.log(erorr))
  }
}
