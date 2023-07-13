import { Component, OnInit } from '@angular/core';
import { Books } from '../book';
import { BookService } from '../book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {
  books:Books=new Books();
  constructor(private bookservice:BookService,private router:Router){}

  ngOnInit(): void {
    
  }
  saveBook(){
    this.bookservice.createBook(this.books).subscribe(data=>{
      console.log(data);
      this.goToBookList();
    },
    error=>console.log(error));
  }

  goToBookList(){
      this.router.navigate(['/books'])
  }


  onSubmit(){
    console.log(this.books);
    this.saveBook();
    this.router.navigate(['/books'])
  }
}
