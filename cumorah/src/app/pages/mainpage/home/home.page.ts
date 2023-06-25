import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, delay, of, tap } from 'rxjs';
import { StudentService } from 'src/app/services/student.service';
import { Mentor, User } from 'src/app/shared/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  mentors: Mentor[] = []
  searchTerm: string = '';
  user: User = {name: 'Lucas Teixeira', imgURL: 'https://user-images.githubusercontent.com/54940494/238946413-256ce257-0b45-4994-9f18-a604db4e70c0.jpg'}
  $loadObservable: BehaviorSubject<boolean> = new BehaviorSubject(true)
  loaded: Observable<boolean> = of(false)

  constructor(private _studentService: StudentService) { }

  ngOnInit() {
    this.getData();
  }

  public getData(){
    this.loaded = of(false).pipe(delay(1300),tap(x => {
      this.mentors = this._studentService.getMentors();
      console.log('passou')
      this.loaded = of(true)
    }))
  }

  filterStudents(value: any) {
    this.searchTerm = value;
  }
}
