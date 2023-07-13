import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {
  
  user: User = {name: 'Lucas Teixeira', imgURL: 'https://user-images.githubusercontent.com/54940494/238946413-256ce257-0b45-4994-9f18-a604db4e70c0.jpg', groupName: 'Esther'}
  searchTerm: string = '';
  constructor() { }

  showSearchBar = false;
  isNotiOpen = false;

  ngOnInit() {
  }

  filterStudents(value: string) {
    this.searchTerm = value;
  }

}
