import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit{
stud!:Student[] ;
constructor(private studentservice:StudentService,private router:Router) {}

  ngOnInit(): void{
    this.getStudents();

}

  private getStudents(){
    this.studentservice.getStudentlist().subscribe(data =>{ this.stud=data; 
    });
  }

  updateStudent(id: number){
    this.router.navigate(['update-student', id]);  
  }

  deleteStudent(id: number){
    this.studentservice.deleteStudent(id).subscribe(data=>{
      console.log(data);
      this.router.navigate(['/student'])
    
      // this.getStudents();
      // this.stud = this.stud.filter(student => student.sid !== id);

    })
  }
}
