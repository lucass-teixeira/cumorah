import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { StudentService } from 'src/app/services/student.service';
import { Group } from 'src/app/shared/enums';
import { Student, User } from 'src/app/shared/models';

@Component({
  selector: 'app-student',
  templateUrl: './student.page.html',
  styleUrls: ['./student.page.scss'],
})
export class StudentPage implements OnInit {

  user: User = {name: 'Lucas Teixeira', imgURL: 'https://user-images.githubusercontent.com/54940494/238946413-256ce257-0b45-4994-9f18-a604db4e70c0.jpg'}
  groups: (Group | string)[] = [];
  searchTerm: string = '';
  items: Student[] = [];
  studentsBackup: Student[] = [];
  students: any[] = [];
  constructor(public studentService: StudentService, public router: Router, public navController: NavController) {
    // this.items = this.items.sort(x => x.points);
  }

  ngOnInit() {
    this.loadStudents();
    this.students = this.items.map(x => Object.assign({}, x, { GroupName: Group[x.idGroup] }))
    this.groups = Object.values(Group).filter(x => isNaN(Number(x)))
  }

  loadStudents() {
    this.items = this.studentService.getStudents();
  }

  goToDetail(id: number) {
    this.navController.navigateForward('mainpage/student/' + id.toString())
  }

  filterStudents(value: string) {
    this.searchTerm = value;
  }

}
