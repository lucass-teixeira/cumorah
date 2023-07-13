import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { BehaviorSubject, Observable, delay, of, tap } from 'rxjs';
import { InputComponent } from 'src/app/components/input/input.component';
import { StudentService } from 'src/app/services/student.service';
import { Group } from 'src/app/shared/enums';
import { Course, Mentor, Notification, Student, User } from 'src/app/shared/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  inputComp: InputComponent | undefined
  @ViewChild('inputComp') set input(input: InputComponent){
    this.inputComp = input;
    console.log('input', this.inputComp)
  }; 
  mentors: Mentor[] = [];
  notifications: Notification[] = []
  searchTerm: string = '';
  user: User = {name: 'Lucas Teixeira', imgURL: 'https://user-images.githubusercontent.com/54940494/238946413-256ce257-0b45-4994-9f18-a604db4e70c0.jpg', groupName: 'Esther'}
  $loadObservable: BehaviorSubject<boolean> = new BehaviorSubject(true)
  loaded: Observable<boolean> = of(false)
  estherGroup: any[] = [];

  constructor(public _studentService: StudentService, private navController: NavController) { }


  groups: (Group | string)[] = [];
  students: any[] = [];
  courses: Course[] = [];
  items: Student[] = [];
  showSearchBar = false;
  isNotiOpen = false;

  ngOnInit() {
    this.getData();

    this.loadStudents();
    this.estherGroup = this.items.map(x => Object.assign({}, x, { GroupName: Group[x.idGroup] })).filter(x => x.GroupName === this.user.groupName);
    this.students = this.items.map(x => Object.assign({}, x, { GroupName: Group[x.idGroup] }))
    this.groups = Object.values(Group).filter(x => isNaN(Number(x)))
  }

  loadStudents() {
    this.items = this._studentService.getStudents();
  }

  public getData(){
    this.mentors = this._studentService.getMentors();
    this.courses = this._studentService.getCourses();

    this.notifications = this._studentService.getNotifications();
  }


  goToMentorDetail(id: number) {
    this.navController.navigateForward('mainpage/mentor/' + id.toString())
  }

  filterStudents(value: any) {
    this.searchTerm = value;
  }

  goToCourse(course: Course){
    this.navController.navigateForward('mainpage/study/' + course.id.toString())
  }

  goToStudent(student: Student){
    this.navController.navigateForward('mainpage/student/' + student.id.toString())
  }


  goToDetail(id: number) {
    this.navController.navigateForward('mainpage/student/' + id.toString())
  }

  ionViewWillLeave(){
    this.searchTerm = '';
    this.showSearchBar = false;
  }
}
