import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ListFilterPipe } from 'src/app/pipes/list-filter.pipe';
import { StudentService } from 'src/app/services/student.service';
import { Group } from 'src/app/shared/enums';
import { CategoryEnum, Student } from 'src/app/shared/models';

@Component({
  selector: 'app-search-container',
  templateUrl: './search-container.component.html',
  styleUrls: ['./search-container.component.scss'],
})
export class SearchContainerComponent implements OnInit {

  @Input() searchText = ''
  items: Student[] = [];
  studentsBackup: Student[] = [];
  students: Student[] = [];
  filteredStudents: Student[] = []
  groups: (Group | string)[] = [];
  topics: string[] = ['students', 'education', 'mentors'];

  categoryEnum: CategoryEnum = CategoryEnum.none;
  categories: string[] = []
  filterWord: string = ''


  listFilter: ListFilterPipe = new ListFilterPipe();
  constructor(public studentService: StudentService, public router: Router, public navController: NavController) {
    this.items = this.items.sort(x => x.points);
    this.categories = Object.keys(CategoryEnum)
  }
  public get hasCharacter() {
    return this.searchText.length !== 0;
  }

  ngOnInit() {
    this.loadStudents();
    this.students = this.items.map(x => Object.assign({}, x, { GroupName: Group[x.idGroup] }))
    this.groups = Object.values(Group).filter(x => isNaN(Number(x)))

  }

  goToDetail(id: number) {
    this.navController.navigateForward('mainpage/student/' + id.toString())
  }

  loadStudents() {
    this.items = this.studentService.getStudents();
  }

  filterList(event: string) {
    this.filteredStudents = this.listFilter.transform(this.students, 5, 'name', this.filterWord)
    console.log('filtered', this.filteredStudents)
    this.filterWord = event
  }

}


