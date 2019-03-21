import { Component, OnInit } from '@angular/core';
import  StudentService  from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  student = {
    rollno:0,
    dob:0,
    firstName:'',
    lastName:'',
    parentName:'',
    parentPhone:'',
    address:''
  };
  constructor(private router :Router,private studentService :StudentService) { }

  ngOnInit() {
  }

  students=this.studentService.getStudents();
  
 
  addStudent(student){
    this.studentService.addStudent(student);
    this.studentService.getStudents();
    this.student={
      rollno:0,
      dob:0,
      firstName:'',
      lastName:'',
      parentName:'',
      parentPhone:'',
      address:''
       
      };
    
  }
 
  deleteAll(){
    this.studentService.deleteAll();
  }
  deleteStudent(student){
  	this.studentService.deleteStudent(student);
    student = this.studentService.getStudents();
    
  }
  onEdit(rollNo:number)
  {
    this.router.navigate(['/edit',rollNo]);
  }
  // editStudent(student){
  //   this.studentService.editStudent(student);
  // }
  // onSelect(student){
  //   this.studentService.onSelect(student);
  // }
}
