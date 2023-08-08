import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';
import { Mentor } from 'src/app/shared/models';

@Component({
  selector: 'app-mentor-detail',
  templateUrl: './mentor-detail.page.html',
  styleUrls: ['./mentor-detail.page.scss'],
})
export class MentorDetailPage implements OnInit {

  mentor: Mentor | undefined;
  constructor(public studentService: StudentService, public router: ActivatedRoute) { }

  ngOnInit() {
    this.loadMentor();
    console.log(this.mentor);
  }
  loadMentor() {
    const id: number = Number(this.router.snapshot.params['id']);
    if(id)
      this.mentor = this.studentService.getMentorById(id);
    else
      console.log('It was not possible to find the mentor')
    
  }
}
