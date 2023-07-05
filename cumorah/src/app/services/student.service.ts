import { Injectable } from '@angular/core';
import { CategoryEnum, Notification, Country, Course, Mentor, Student } from '../shared/models';
import { Group } from '../shared/enums';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  public isBusy = false;

  public notifications: Notification[] = [
    { id: 1, title: 'Notification 1', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores pariatur sit provident nostrum, in odit sint ratione minima qui et voluptate vel fuga ut veritatis illum architecto perferendis dicta magni nam voluptates neque! Maiores qui blanditiis fugiat iste perferendis, nisi ducimus debitis laborum sint odit.' },
    { id: 2, title: 'Notification 2', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores pariatur sit provident nostrum, in odit sint ratione minima qui et voluptate vel fuga ut veritatis illum architecto perferendis dicta magni nam voluptates neque! Maiores qui blanditiis fugiat iste perferendis, nisi ducimus debitis laborum sint odit.' },
    { id: 3, title: 'Notification 3', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores pariatur sit provident nostrum, in odit sint ratione minima qui et voluptate vel fuga ut veritatis illum architecto perferendis dicta magni nam voluptates neque! Maiores qui blanditiis fugiat iste perferendis, nisi ducimus debitis laborum sint odit.' },
    { id: 4, title: 'Notification 4', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores pariatur sit provident nostrum, in odit sint ratione minima qui et voluptate vel fuga ut veritatis illum architecto perferendis dicta magni nam voluptates neque! Maiores qui blanditiis fugiat iste perferendis, nisi ducimus debitis laborum sint odit.' },
  ]
  public mentors: Mentor[] = [
    { id: 1, name: 'Oscar & Susan', imgURL: 'https://user-images.githubusercontent.com/54940494/245154028-4bb47e21-acfc-458c-8dde-69fd8dd0ceb5.jpg', type: CategoryEnum.mentors, topics: ['Susan & Oscar Bluth mainly live in Chandler, Arizona.', 'Since 2005, they have owned a business consulting firm where Susan coaches and trains leaders and professionals in emotional intelligence, they also own and develop real estate', 'Susan attended BYU, graduating in 1979 with a degree in Health Science'] },
    { id: 2, name: 'Seth & Amber', imgURL: 'https://user-images.githubusercontent.com/54940494/245153999-34cdcc05-8abd-4196-9e79-7fd8ab15e70b.jpg', type: CategoryEnum.mentors },
    { id: 3, name: 'Shad & Mindi', imgURL: 'https://user-images.githubusercontent.com/54940494/245379714-9b7cccd5-6bd3-4328-9958-0ccc36394405.jpg', type: CategoryEnum.mentors },
    { id: 4, name: 'Russell & Samantha', imgURL: 'https://user-images.githubusercontent.com/54940494/245379945-40bdf2bc-bb43-41a1-bb43-0ed79096f48c.jpg', type: CategoryEnum.mentors },
    { id: 5, name: 'Brian & karen', imgURL: 'https://user-images.githubusercontent.com/54940494/248585227-f2501f4d-6f0e-4a1f-9a28-ca3243b7a39d.jpg', type: CategoryEnum.mentors },
    { id: 6, name: 'Ralph & Nancy', imgURL: 'https://user-images.githubusercontent.com/54940494/250957981-6fbb7209-c9e2-4e24-8f46-8fe160a26120.jpg', type: CategoryEnum.mentors, topics: ['In 1986 Ralph Little was named to the INC 500 list as one of “Fastest Growing Private Companies in America”', 'In the twenty years he owned Little & Company, Ralph started several other businesses including a software development company, a truck tire recapping plant, storage units, a marketing company, and an electrical wiring and device company.', 'He was referred to a course of instruction at Harvard specifically for CEOs of small businesses.'] },
    { id: 7, name: 'Melissa', imgURL: 'https://user-images.githubusercontent.com/54940494/250957436-c6731f9d-0da9-4d0d-b294-48f4861885a0.jpg', type: CategoryEnum.mentors, topics: ['In 1986 Ralph Little was named to the INC 500 list as one of “Fastest Growing Private Companies in America”', 'In the twenty years he owned Little & Company, Ralph started several other businesses including a software development company, a truck tire recapping plant, storage units, a marketing company, and an electrical wiring and device company.', 'He was referred to a course of instruction at Harvard specifically for CEOs of small businesses.'] },
  ]

  public courses: Course[] = [
    { id: 1, name: 'Leadership', imgURL: 'https://my.cumorahacademy.org/_files/categories/42_6Yzw2TUM.jpg?fit=770x200', type: CategoryEnum.education },
    { id: 2, name: 'Business', imgURL: 'https://my.cumorahacademy.org/_files/categories/43_UOXJp1M6.png?fit=770x200', type: CategoryEnum.education },
    { id: 3, name: 'Soft Skills & Finding a Job', imgURL: 'https://my.cumorahacademy.org/_files/categories/41_jmIiKgaO.jpg?fit=770x200', type: CategoryEnum.education },
  ]
  public items: Student[] = [
    { id: 1, type: CategoryEnum.students, name: 'Lucas Teixeira', nickname: 'Lucas', points: 5, birthdate: new Date('2002-03-04'), age: 21, imgURL: 'https://user-images.githubusercontent.com/54940494/238946413-256ce257-0b45-4994-9f18-a604db4e70c0.jpg', idGroup: Group.Esther, countryCode: Country.brazil },
    { id: 2, type: CategoryEnum.students, name: 'Aitor', nickname: 'Aitor', points: 4, birthdate: new Date('2002-03-04'), age: 21, imgURL: 'https://user-images.githubusercontent.com/54940494/238946223-798d53b0-a1e1-4f7e-8824-76f4aded1db1.jpg', idGroup: Group.Nephi, countryCode: Country.spain },
    { id: 3, type: CategoryEnum.students, name: 'Cami', nickname: 'Camila', points: 3, birthdate: new Date('2002-03-04'), age: 21, imgURL: 'https://user-images.githubusercontent.com/54940494/238946266-009b7f70-e9ad-49b2-9ea8-9ce334ed6eed.jpg', idGroup: Group.Nephi, countryCode: Country.brazil },
    { id: 4, type: CategoryEnum.students, name: 'Emy', nickname: 'Emy', points: 3, birthdate: new Date('2002-03-04'), age: 21, imgURL: 'https://user-images.githubusercontent.com/54940494/238946288-0c4c2887-8ea0-4c9d-8246-8b9797a7bf37.jpg', idGroup: Group.Esther, countryCode: Country.colombia },
    { id: 5, type: CategoryEnum.students, name: 'Vladyslava', nickname: 'Vlada', points: 4, birthdate: new Date('2002-03-04'), age: 21, imgURL: 'https://user-images.githubusercontent.com/54940494/238946446-aaf3162d-2db1-45cc-bd11-5b86abbc5e12.jpg', idGroup: Group.Esther, countryCode: Country.ucrania },
    { id: 6, type: CategoryEnum.students, name: 'Gabriel', nickname: 'Gabe', points: 0, birthdate: new Date('2002-03-04'), age: 21, imgURL: 'https://user-images.githubusercontent.com/54940494/238946304-b087eb9d-4f8d-4106-8d92-bd9d0c207924.jpg', idGroup: Group.Esther, countryCode: Country.brazil, linkedin: 'https://www.linkedin.com/in/gabriel-oliveira-a84910223/', imgs: [{ url: 'https://user-images.githubusercontent.com/54940494/248789765-492e16c1-3a8b-446d-9079-93e8042b69e6.jpg' }, { url: 'https://user-images.githubusercontent.com/54940494/248789628-db908c76-d8fc-4b40-9156-097362cafe8a.jpg' }] },
    { id: 7, type: CategoryEnum.students, name: 'Jessica', nickname: 'Jessica', points: 3, birthdate: new Date('2002-03-04'), age: 21, imgURL: 'https://user-images.githubusercontent.com/54940494/238946324-f0e89cb0-97b4-47c9-bda9-fd05870fcc68.jpg', idGroup: Group.Nephi, countryCode: Country.brazil },
    { id: 8, type: CategoryEnum.students, name: 'Kamelia', nickname: 'Kami', points: 3, birthdate: new Date('2002-03-04'), age: 21, imgURL: 'https://user-images.githubusercontent.com/54940494/238946344-c6f1e93f-07c8-44e7-a856-03c345686e61.jpg', idGroup: Group.Nephi, countryCode: Country.ucrania },
    { id: 9, type: CategoryEnum.students, name: 'Kledion', nickname: 'Kledion', points: 1, birthdate: new Date('2002-03-04'), age: 21, imgURL: 'https://user-images.githubusercontent.com/54940494/238946392-e7fe8a03-5380-47af-acde-af119e88dbf5.jpg', idGroup: Group.Nephi, countryCode: Country.albania },
    { id: 10, type: CategoryEnum.students, name: 'Kristi', nickname: 'Kristi', points: 3, birthdate: new Date('2002-03-04'), age: 21, imgURL: 'https://user-images.githubusercontent.com/54940494/238946400-1af7fa8b-01fb-41ab-9feb-f3f31cc46f98.jpg', idGroup: Group.Nephi, countryCode: Country.albania },
    { id: 11, type: CategoryEnum.students, name: 'Mariana', nickname: 'Mariana', points: 3, birthdate: new Date('2002-03-04'), age: 21, imgURL: 'https://user-images.githubusercontent.com/54940494/238946420-dc2c4d17-0ad9-483d-82f7-1d93f971bbfd.jpg', idGroup: Group.Esther, countryCode: Country.ucrania },
    { id: 12, type: CategoryEnum.students, name: 'Pamela', nickname: 'Pam', points: 4, birthdate: new Date('2002-03-04'), age: 21, imgURL: 'https://user-images.githubusercontent.com/54940494/238946428-542ca0d5-ca41-4256-aa1c-e04acec2d9ab.jpg', idGroup: Group.Esther, countryCode: Country.brazil },
    { id: 13, type: CategoryEnum.students, name: 'Tania', nickname: 'Tania', points: 4, birthdate: new Date('2002-03-04'), age: 21, imgURL: 'https://user-images.githubusercontent.com/54940494/238946436-805b420d-0123-467a-b100-9baa495e7fe6.jpg', idGroup: Group.Nephi, countryCode: Country.ucrania },
    { id: 14, type: CategoryEnum.students, name: 'Yetsy', nickname: 'Yetsy', points: 4, birthdate: new Date('2002-03-04'), age: 21, imgURL: 'https://user-images.githubusercontent.com/54940494/238946457-86e7ad68-7a7f-48b6-96fe-afdba17f26cf.jpg', idGroup: Group.Esther, countryCode: Country.brazil },
  ]
  constructor() { }

  getStudents(): Student[] {
    this.isBusy = true;
    const timeout = setTimeout(() => {
      this.isBusy = false;
      clearTimeout(timeout)
    }, 1500);
    return this.items;
  }
  getStudentById(id: number): Student | undefined {
    this.isBusy = true;
    const timeout = setTimeout(() => {
      this.isBusy = false;
      clearTimeout(timeout)
    }, 1500);
    return this.items.find(x => x.id === id);
  }

  getMentors() {
    this.isBusy = true;
    const timeout = setTimeout(() => {
      this.isBusy = false;
      clearTimeout(timeout)
    }, 1500);
    return [...this.mentors];
  }

  getMentorById(id: number): Mentor | undefined {
    this.isBusy = true;
    const timeout = setTimeout(() => {
      this.isBusy = false;
      clearTimeout(timeout)
    }, 1500);
    return this.mentors.find(x => x.id === id);
  }
  getCourses(): Course[] {
    this.isBusy = true;
    const timeout = setTimeout(() => {
      this.isBusy = false;
      clearTimeout(timeout)
    }, 1500);
    return [...this.courses];
  }

  getCourseById(id: number): Course | undefined {
    this.isBusy = true;
    const timeout = setTimeout(() => {
      this.isBusy = false;
      clearTimeout(timeout)
    }, 1500);
    return this.courses.find(x => x.id === id);
  }
  getNotifications(): Notification[] {
    this.isBusy = true;
    const timeout = setTimeout(() => {
      this.isBusy = false;
      clearTimeout(timeout)
    }, 1500);
    return [...this.notifications];
  }
}
