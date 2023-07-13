import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { BookListComponent } from './book-list/book-list.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { IssuedBookListComponent } from './issued-book-list/issued-book-list.component';

const routes: Routes = [
  {path: 'student' , component: StudentListComponent},
  {path: 'create-student', component: CreateStudentComponent},
  {path: '', redirectTo:'student', pathMatch:'full'},
  {path: 'update-student/:id',component:UpdateStudentComponent},

  {path: 'books', component: BookListComponent},
  {path :'create-book',component:CreateBookComponent},
  {path: 'update-book/:id',component:UpdateBookComponent},

  {path: 'issued-book',component:IssuedBookListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
