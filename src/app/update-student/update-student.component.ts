import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {
  id!: number;
  student: Student = new Student();

  constructor(private studentService:StudentService,private route:ActivatedRoute,private router:Router){}

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];

    this.studentService.getStudentByid(this.id).subscribe((data:Student)=>{
      this.student=data;
      },(error: any) => console.log(error));
  }

  onSubmit(){
    this.studentService.updateStudent(this.id,this.student).subscribe(data=>{
      console.log(this.student);
      this.router.navigate(['/student'])

      //this.goToStudentList();
      //this.router.navigate(['/student'])

    },
    erorr=>console.log(erorr));
  }

  goToStudentList(){
    this.router.navigate(['/student']);
}
}
