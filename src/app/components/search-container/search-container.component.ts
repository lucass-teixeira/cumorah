import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ListFilterPipe } from 'src/app/pipes/list-filter.pipe';
import { StudentService } from 'src/app/services/student.service';
import { Group } from 'src/app/shared/enums';
import { CategoryEnum, Course, Mentor, Student } from 'src/app/shared/models';

@Component({
  selector: 'app-search-container',
  templateUrl: './search-container.component.html',
  styleUrls: ['./search-container.component.scss'],
})
export class SearchContainerComponent implements OnInit {

  // @Input() searchText = ''
  _searchText: string = ''
  get searchText(): string {
    return this._searchText;
  }

  @Input() set searchText(value: string){
    this._searchText = value;
    this.filteredStudents = this.listFilter.transform(this.students, 5, 'name', value);
    this.filteredMentors = this.listFilter.transform(this.mentors, 5, 'name', value);
    this.filteredCourses = this.listFilter.transform(this.courses, 5, 'name', value);
    this.searchResult = [...this.filteredCourses, ...this.filteredMentors, ...this.filteredStudents]
  } 
  searchResult: any[] = [];
  items: Student[] = [];
  studentsBackup: Student[] = [];
  filteredStudents: Student[] = []
  filteredMentors: Mentor[] = []
  filteredCourses: Course[] = []
  mentors: Mentor[] = []
  courses: Course[] = []
  students: Student[] = [];
  groups: (Group | string)[] = [];
  topics: string[] = ['students', 'education', 'mentors'];

  categoryEnum: CategoryEnum = CategoryEnum.none;
  categories: string[] = []
  filterWord: string = ''

  pageLoaded = false;


  listFilter: ListFilterPipe = new ListFilterPipe();
  constructor(public studentService: StudentService, public router: Router, public navController: NavController) {
    this.items = this.items.sort(x => x.points);
    this.categories = Object.keys(CategoryEnum)

    this.mentors = this.studentService.getMentors();
  }
  public get hasCharacter() {
    return this.searchText.length !== 0;
  }

  ngOnInit() {
    this.loadStudents();
    this.loadCourses();



    this.students = this.items.map(x => Object.assign({}, x, { GroupName: Group[x.idGroup] }))
    this.groups = Object.values(Group).filter(x => isNaN(Number(x)))

  }

  goToDetail(id: number) {
    this.navController.navigateForward('mainpage/student/' + id.toString())
  }

  loadCourses(){
    this.courses = this.studentService.getCourses();
  }
  loadStudents() {
    this.items = this.studentService.getStudents();
  }

  filterList(event: string) {
    this.filterWord = event
  }

  goToTopicSearched(search: any){
    if(search.type === CategoryEnum.mentors)
    this.navController.navigateForward('mainpage/mentor/' + search.id.toString())
    else if(search.type === CategoryEnum.students)
    this.navController.navigateForward('mainpage/student/' + search.id.toString())
    else 
    this.navController.navigateForward('mainpage/study/' + search.id.toString())
    
  }
}


