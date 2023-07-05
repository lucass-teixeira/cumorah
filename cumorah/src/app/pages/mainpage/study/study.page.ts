import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { StudentService } from 'src/app/services/student.service';
import { Group } from 'src/app/shared/enums';
import { Course, Student } from 'src/app/shared/models';

@Component({
  selector: 'app-study',
  templateUrl: './study.page.html',
  styleUrls: ['./study.page.scss'],
})
export class StudyPage implements OnInit {

  public items: Student[] = []

  groups: (Group | string)[] = [];
  students: any[] = [];
  courses: Course[] = [];
  constructor(private _apiService: StudentService, private _navController: NavController) {
  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.courses = this._apiService.getCourses();
  }

  goToCourse(course: Course){
    this._navController.navigateForward('mainpage/study/' + course.id.toString())
  }

}
