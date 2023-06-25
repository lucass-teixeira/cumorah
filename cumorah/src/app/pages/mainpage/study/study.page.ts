import { Component, OnInit } from '@angular/core';
import { Group } from 'src/app/shared/enums';
import { Student } from 'src/app/shared/models';

@Component({
  selector: 'app-study',
  templateUrl: './study.page.html',
  styleUrls: ['./study.page.scss'],
})
export class StudyPage implements OnInit {

  public items: Student[] = [
    // { id: 1, name: 'Lucas Teixeira', nickname: 'Lucas', points: 5, birthdate: new Date('2002-03-04'), age: 21, imgUrl: 'https://user-images.githubusercontent.com/54940494/238946413-256ce257-0b45-4994-9f18-a604db4e70c0.jpg', idGroup: Group.Esther },
    // { id: 2, name: 'Aitor', nickname: 'Aitor', points: 4, birthdate: new Date('2002-03-04'), age: 21, imgUrl: 'https://user-images.githubusercontent.com/54940494/238946223-798d53b0-a1e1-4f7e-8824-76f4aded1db1.jpg', idGroup: Group.Nephi },
    // { id: 3, name: 'Cami', nickname: 'Camila', points: 3, birthdate: new Date('2002-03-04'), age: 21, imgUrl: 'https://user-images.githubusercontent.com/54940494/238946266-009b7f70-e9ad-49b2-9ea8-9ce334ed6eed.jpg', idGroup: Group.Nephi },
    // { id: 4, name: 'Emy', nickname: 'Emy', points: 3, birthdate: new Date('2002-03-04'), age: 21, imgUrl: 'https://user-images.githubusercontent.com/54940494/238946288-0c4c2887-8ea0-4c9d-8246-8b9797a7bf37.jpg', idGroup: Group.Esther },
    // { id: 5, name: 'Vladyslava', nickname: 'Vlada', points: 4, birthdate: new Date('2002-03-04'), age: 21, imgUrl: 'https://user-images.githubusercontent.com/54940494/238946446-aaf3162d-2db1-45cc-bd11-5b86abbc5e12.jpg', idGroup: Group.Esther },
    // { id: 6, name: 'Gabriel', nickname: 'Gabe', points: 0, birthdate: new Date('2002-03-04'), age: 21, imgUrl: 'https://user-images.githubusercontent.com/54940494/238946304-b087eb9d-4f8d-4106-8d92-bd9d0c207924.jpg', idGroup: Group.Esther },
    // { id: 7, name: 'Jessica', nickname: 'Jessica', points: 3, birthdate: new Date('2002-03-04'), age: 21, imgUrl: 'https://user-images.githubusercontent.com/54940494/238946324-f0e89cb0-97b4-47c9-bda9-fd05870fcc68.jpg', idGroup: Group.Nephi },
    // { id: 8, name: 'Kamelia', nickname: 'Kami', points: 3, birthdate: new Date('2002-03-04'), age: 21, imgUrl: 'https://user-images.githubusercontent.com/54940494/238946344-c6f1e93f-07c8-44e7-a856-03c345686e61.jpg', idGroup: Group.Nephi },
    // { id: 9, name: 'Kledion', nickname: 'Kledion', points: 1, birthdate: new Date('2002-03-04'), age: 21, imgUrl: 'https://user-images.githubusercontent.com/54940494/238946392-e7fe8a03-5380-47af-acde-af119e88dbf5.jpg', idGroup: Group.Nephi },
    // { id: 10, name: 'Kristi', nickname: 'Kristi', points: 3, birthdate: new Date('2002-03-04'), age: 21, imgUrl: 'https://user-images.githubusercontent.com/54940494/238946400-1af7fa8b-01fb-41ab-9feb-f3f31cc46f98.jpg', idGroup: Group.Nephi },
    // { id: 11, name: 'Mariana', nickname: 'Mariana', points: 3, birthdate: new Date('2002-03-04'), age: 21, imgUrl: 'https://user-images.githubusercontent.com/54940494/238946420-dc2c4d17-0ad9-483d-82f7-1d93f971bbfd.jpg', idGroup: Group.Esther },
    // { id: 12, name: 'Pamela', nickname: 'Pam', points: 4, birthdate: new Date('2002-03-04'), age: 21, imgUrl: 'https://user-images.githubusercontent.com/54940494/238946428-542ca0d5-ca41-4256-aa1c-e04acec2d9ab.jpg', idGroup: Group.Esther },
    // { id: 13, name: 'Tania', nickname: 'Tania', points: 4, birthdate: new Date('2002-03-04'), age: 21, imgUrl: 'https://user-images.githubusercontent.com/54940494/238946436-805b420d-0123-467a-b100-9baa495e7fe6.jpg', idGroup: Group.Nephi },
    // { id: 14, name: 'Yetsy', nickname: 'Yetsy', points: 4, birthdate: new Date('2002-03-04'), age: 21, imgUrl: 'https://user-images.githubusercontent.com/54940494/238946457-86e7ad68-7a7f-48b6-96fe-afdba17f26cf.jpg', idGroup: Group.Esther },
    // { id: 15, name: 'Pamela', nickname: 'Pam', points: 4, birthdate: new Date('2002-03-04'), age: 21, imgUrl: '', idGroup: Group.Esther },
    // { id: 16, name: 'Pamela', nickname: 'Pam', points: 4, birthdate: new Date('2002-03-04'), age: 21, imgUrl: '', idGroup: Group.Esther },
  ]

  groups: (Group | string)[] = [];
  students: any[] = [];
  constructor() {
    this.items = this.items.sort(x => x.points);
  }

  ngOnInit() {
    this.students = this.items.map(x => Object.assign({}, x, { GroupName: Group[x.idGroup] }))
    this.groups = Object.values(Group).filter(x => isNaN(Number(x)))
  }

}
