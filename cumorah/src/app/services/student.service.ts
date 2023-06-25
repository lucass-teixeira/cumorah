import { Injectable } from '@angular/core';
import { Country, Mentor, Student } from '../shared/models';
import { Group } from '../shared/enums';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  public mentors: Mentor[] = [
    {name: 'Oscar & Susan', imgURL: 'https://user-images.githubusercontent.com/54940494/245154028-4bb47e21-acfc-458c-8dde-69fd8dd0ceb5.jpg'}, 
    {name: 'Seth & Amber', imgURL: 'https://user-images.githubusercontent.com/54940494/245153999-34cdcc05-8abd-4196-9e79-7fd8ab15e70b.jpg'},
    {name: 'Shad & Mindi', imgURL: 'https://user-images.githubusercontent.com/54940494/245379714-9b7cccd5-6bd3-4328-9958-0ccc36394405.jpg'},
    {name: 'Russell & Samantha', imgURL: 'https://user-images.githubusercontent.com/54940494/245379945-40bdf2bc-bb43-41a1-bb43-0ed79096f48c.jpg'},
    {name: 'Brian & karen', imgURL: 'https://user-images.githubusercontent.com/54940494/248585227-f2501f4d-6f0e-4a1f-9a28-ca3243b7a39d.jpg'},
  ]
  public items: Student[] = [
    { id: 1, name: 'Lucas Teixeira', nickname: 'Lucas', points: 5, birthdate: new Date('2002-03-04'), age: 21, imgUrl: 'https://user-images.githubusercontent.com/54940494/238946413-256ce257-0b45-4994-9f18-a604db4e70c0.jpg', idGroup: Group.Esther, countryCode: Country.brazil },
    { id: 2, name: 'Aitor', nickname: 'Aitor', points: 4, birthdate: new Date('2002-03-04'), age: 21, imgUrl: 'https://user-images.githubusercontent.com/54940494/238946223-798d53b0-a1e1-4f7e-8824-76f4aded1db1.jpg', idGroup: Group.Nephi, countryCode: Country.spain },
    { id: 3, name: 'Cami', nickname: 'Camila', points: 3, birthdate: new Date('2002-03-04'), age: 21, imgUrl: 'https://user-images.githubusercontent.com/54940494/238946266-009b7f70-e9ad-49b2-9ea8-9ce334ed6eed.jpg', idGroup: Group.Nephi, countryCode: Country.brazil  },
    { id: 4, name: 'Emy', nickname: 'Emy', points: 3, birthdate: new Date('2002-03-04'), age: 21, imgUrl: 'https://user-images.githubusercontent.com/54940494/238946288-0c4c2887-8ea0-4c9d-8246-8b9797a7bf37.jpg', idGroup: Group.Esther, countryCode: Country.colombia },
    { id: 5, name: 'Vladyslava', nickname: 'Vlada', points: 4, birthdate: new Date('2002-03-04'), age: 21, imgUrl: 'https://user-images.githubusercontent.com/54940494/238946446-aaf3162d-2db1-45cc-bd11-5b86abbc5e12.jpg', idGroup: Group.Esther, countryCode: Country.ucrania },
    { id: 6, name: 'Gabriel', nickname: 'Gabe', points: 0, birthdate: new Date('2002-03-04'), age: 21, imgUrl: 'https://user-images.githubusercontent.com/54940494/238946304-b087eb9d-4f8d-4106-8d92-bd9d0c207924.jpg', idGroup: Group.Esther, countryCode: Country.brazil },
    { id: 7, name: 'Jessica', nickname: 'Jessica', points: 3, birthdate: new Date('2002-03-04'), age: 21, imgUrl: 'https://user-images.githubusercontent.com/54940494/238946324-f0e89cb0-97b4-47c9-bda9-fd05870fcc68.jpg', idGroup: Group.Nephi, countryCode: Country.brazil },
    { id: 8, name: 'Kamelia', nickname: 'Kami', points: 3, birthdate: new Date('2002-03-04'), age: 21, imgUrl: 'https://user-images.githubusercontent.com/54940494/238946344-c6f1e93f-07c8-44e7-a856-03c345686e61.jpg', idGroup: Group.Nephi, countryCode: Country.ucrania },
    { id: 9, name: 'Kledion', nickname: 'Kledion', points: 1, birthdate: new Date('2002-03-04'), age: 21, imgUrl: 'https://user-images.githubusercontent.com/54940494/238946392-e7fe8a03-5380-47af-acde-af119e88dbf5.jpg', idGroup: Group.Nephi, countryCode: Country.albania },
    { id: 10, name: 'Kristi', nickname: 'Kristi', points: 3, birthdate: new Date('2002-03-04'), age: 21, imgUrl: 'https://user-images.githubusercontent.com/54940494/238946400-1af7fa8b-01fb-41ab-9feb-f3f31cc46f98.jpg', idGroup: Group.Nephi, countryCode: Country.albania },
    { id: 11, name: 'Mariana', nickname: 'Mariana', points: 3, birthdate: new Date('2002-03-04'), age: 21, imgUrl: 'https://user-images.githubusercontent.com/54940494/238946420-dc2c4d17-0ad9-483d-82f7-1d93f971bbfd.jpg', idGroup: Group.Esther, countryCode: Country.ucrania },
    { id: 12, name: 'Pamela', nickname: 'Pam', points: 4, birthdate: new Date('2002-03-04'), age: 21, imgUrl: 'https://user-images.githubusercontent.com/54940494/238946428-542ca0d5-ca41-4256-aa1c-e04acec2d9ab.jpg', idGroup: Group.Esther, countryCode: Country.brazil },
    { id: 13, name: 'Tania', nickname: 'Tania', points: 4, birthdate: new Date('2002-03-04'), age: 21, imgUrl: 'https://user-images.githubusercontent.com/54940494/238946436-805b420d-0123-467a-b100-9baa495e7fe6.jpg', idGroup: Group.Nephi, countryCode: Country.ucrania },
    { id: 14, name: 'Yetsy', nickname: 'Yetsy', points: 4, birthdate: new Date('2002-03-04'), age: 21, imgUrl: 'https://user-images.githubusercontent.com/54940494/238946457-86e7ad68-7a7f-48b6-96fe-afdba17f26cf.jpg', idGroup: Group.Esther, countryCode: Country.brazil },
  ]
  constructor() { }

  getStudents(): Student[]{
    return this.items;
  }
  getStudentById(id: number): Student | undefined{
    return this.items.find(x => x.id === id);
  }

  getMentors(){
    return [...this.mentors];
  }
}
