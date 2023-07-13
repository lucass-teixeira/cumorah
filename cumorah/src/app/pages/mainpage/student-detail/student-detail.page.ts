import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';
import { Student } from 'src/app/shared/models';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.page.html',
  styleUrls: ['./student-detail.page.scss'],
})
export class StudentDetailPage implements OnInit {

  student: Student | undefined;
  constructor(public studentService: StudentService, public router: ActivatedRoute) { }

  ngOnInit() {
    this.loadStudent();
  }

  loadStudent() {
    const id: number = Number(this.router.snapshot.params['id']);
    if (id) {
      this.student = this.studentService.getStudentById(id);
    }
    else {
      console.log('It was not possible to find user')
    }
  }


  hobbiesClass(indexOfelement: number) {
    
    return (indexOfelement === 0) ? 'first' : (indexOfelement === Number(this.student?.hobbies?.length) - 1) ? 'last' : ''
  }
}
