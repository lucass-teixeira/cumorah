import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';
import { Course } from 'src/app/shared/models';

@Component({
  selector: 'app-study-detail',
  templateUrl: './study-detail.page.html',
  styleUrls: ['./study-detail.page.scss'],
})
export class StudyDetailPage implements OnInit {

  course: Course | undefined = undefined

  classes = ['Givers vs Takers', 'Class 2', 'Class 3'];
  constructor(public _studentService: StudentService, public _router: ActivatedRoute) { }

  ngOnInit() {
    this.loadCourse();
  }
  
  loadCourse(){
    const id: number = Number(this._router.snapshot.params['id']);
    if(id)
      this.course = this._studentService.getCourseById(id);
    else
      console.log('It was not possible to find course')
  }
}
