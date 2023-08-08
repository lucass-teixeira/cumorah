import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';
import { Student } from 'src/app/shared/models';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.page.html',
  styleUrls: ['./student-detail.page.scss'],
  animations: [    trigger('fade', [
    transition('void => *', [ // using status here for transition
      style({ opacity: 0 }),
      animate(1000, style({ opacity: 1 }))
    ]),
    transition('* => void', [
      animate(1000, style({ opacity: 0 }))
    ])
  ])
]
})
export class StudentDetailPage implements OnInit {

  imgClicked = false;
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