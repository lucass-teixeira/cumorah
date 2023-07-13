import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-time',
  templateUrl: './work-time.page.html',
  styleUrls: ['./work-time.page.scss'],
})
export class WorkTimePage implements OnInit {

  showSearchBar = false;
  isNotiOpen = false;
  searchTerm = '';
  works  = [{description: 'Cleaning common room', hour: '02:00',}, {description: 'Cleaning common room', hour: '02:00',} , {description: 'Cleaning common room', hour: '02:00',} , {description: 'Cleaning common room', hour: '02:00',}]
  constructor() { }

  ngOnInit() {
  }


  
  filterStudents(value: any) {
    this.searchTerm = value;
  }
}
