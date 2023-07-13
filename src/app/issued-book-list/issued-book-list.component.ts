// import { Component, OnInit } from '@angular/core';


import { Component, OnInit } from '@angular/core';
import { IssuedBook } from '../issued-book';
import { IssuedbookService } from '../issuedbook.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-issued-book-list',
  templateUrl: './issued-book-list.component.html',
  styleUrls: ['./issued-book-list.component.css']
})
export class IssuedBookListComponent implements OnInit {
  issue!: IssuedBook[];

  constructor(
    private issuedservice: IssuedbookService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getissuedBooks();
  }

  private getissuedBooks() {
    this.issuedservice.getIssuedBookList().subscribe(data => {
      this.issue = data.map(book => ({
        ...book,
        issuedDate: new Date(book.issuedDate),
        returnDate: new Date(book.returnDate)
      }));
    });
  }
}
