import { Component, OnInit } from '@angular/core';
import { Books } from '../book';
import { Router } from '@angular/router';
import { BookService } from '../book.service';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit{
  books!:Books[] ;
  constructor(private bookservice:BookService,
    private router:Router
    ) {}
  
    ngOnInit(): void{
      this.getbooks();
  
  }
  private getbooks(){
    this.bookservice.getBooklist().subscribe(data =>{ this.books=data; 
    });
    }

    updateBook(id: number){
      this.router.navigate(['update-book', id]);  
    }
  
    deleteBook(id: number){
      this.bookservice.deleteBook(id).subscribe(data=>{
        console.log(data);
        this.router.navigate(['/books'])
        
      })
    }
  }

