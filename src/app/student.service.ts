import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export default class StudentService {
 
  student:{rollno:number,dob:number,firstName:string,lastName:string,parentName:string,parentPhone:string,address:string};
  students=[
    {rollno:1,dob:'12/04/1993',firstName:'Kritika',lastName:'Roy',parentName:'Mrs.Susan Roy',parentPhone:'09038187690',address:'Bangalore'},
    {rollno:2,dob:'11/05/1995',firstName:'Ashish',lastName:'Lata',parentName:'Mrs.Prem Lata',parentPhone:'09038187691',address:'Kolkata'},
    {rollno:3,dob:'16/06/1997',firstName:'Priyanka',lastName:'Chopra',parentName:'Mr.Ravi Chopra',parentPhone:'09038187692',address:'Madhya Pradesh'},
    {rollno:4,dob:'17/07/1998',firstName:'Jagrit',lastName:'Ambani',parentName:'Mr.Akash Ambani',parentPhone:'09038187693',address:'Chandigarh'}
  ];
  constructor(private router :Router) { 
   
  }
  getStudents(){
    if(localStorage.getItem('students')!=null)
    {
      this.students = JSON.parse(localStorage.getItem('students'));
    }
  	return this.students;
  }
  getStudentByRollno(rollno:number){
   return this.students.find(e => e.rollno ===rollno);
  }
  addStudent(student){
  	student.rollno = this.students.length+1;
    	this.students.push(student);
      localStorage.setItem('students', JSON.stringify(this.students));
}
updateStudent(student){
  var update=false;
  this.student=student;
  for(var i=0;i<this.students.length;i++){
    if(this.student.rollno == this.students[i].rollno){
      update=true;
      this.students[i] = student;
      localStorage.setItem('students', JSON.stringify(this.students));
      break;
    }
  }
  if(!update)
    {
      this.student.rollno = this.students.length+1;
      this.students.push(student);
      localStorage.setItem('students', JSON.stringify(this.students));
    }
}
// onSelect(student)
//   {
//     this.student=student;
//   }
deleteStudent(student){

    var List=[];
    this.student=student;
    for(var i=0;i<this.students.length;i++)
    {
         if(this.student.rollno!=(this.students[i].rollno))
        {
               List.push(this.students[i]);
        }
    }
    this.students=List;
    localStorage.setItem('students', JSON.stringify(this.students));
  }
  deleteAll(){
    
    this.students=[];
    localStorage.setItem('students', JSON.stringify(this.students));

  }
  // editStudent(student){
  //   student=this.student;
  // }
}
